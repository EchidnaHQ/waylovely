//!
//! Abstraction of different session APIs.
//!
//! Sessions provide a way for multiple graphical systems to run in parallel by providing
//! mechanisms to switch between and handle device access and permissions for every running
//! instance.
//!
//! They are crucial to allow unprivileged processes to use graphical or input devices.
//!
//! The following mechanisms are currently provided:
//!     - direct - legacy tty / virtual terminal kernel API
//!
use nix::fcntl::OFlag;
use std::{
    cell::RefCell,
    os::unix::io::RawFd,
    path::Path,
    rc::Rc,
    sync::{Arc, Mutex},
};

/// General session interface.
///
/// Provides a way to open and close devices and change the active vt.
pub trait Session {
    /// Error type of the implementation
    type Error: AsErrno;

    /// Opens a device at the given `path` with the given flags.
    ///
    /// Returns a raw file descriptor
    fn open(&mut self, path: &Path, flags: OFlag) -> Result<RawFd, Self::Error>;
    /// Close a previously opened file descriptor
    fn close(&mut self, fd: RawFd) -> Result<(), Self::Error>;

    /// Change the currently active virtual terminal
    fn change_vt(&mut self, vt: i32) -> Result<(), Self::Error>;

    /// Check if this session is currently active
    fn is_active(&self) -> bool;
    /// Which seat this session is on
    fn seat(&self) -> String;
}

/// Signals that can be generated by a session
///
/// Objects that need to be notifier about activation and deactivation
/// of devices need to be linked to the `Signaler` of the session providing
/// these signals.
#[derive(Copy, Clone, Debug)]
pub enum Signal {
    /// The whole session has been paused
    ///
    /// All devices should be considered as paused
    PauseSession,
    /// A given device has been paused
    PauseDevice {
        /// Major number identifying the device
        major: u32,
        /// Minor number identifying the device
        minor: u32,
    },
    /// The whole session has been activated
    ActivateSession,
    /// A given device has been activated
    ActivateDevice {
        /// Major number identifying the device
        major: u32,
        /// Minor number identifying the device
        minor: u32,
        /// New file descriptor for accessing the device
        ///
        /// If it is not `None`, you should use this FD in place of the
        /// previous one for accessing this device. In case the old FD
        /// is different from the new one, the old one should be closed.
        new_fd: Option<RawFd>,
    },
}

impl Session for () {
    type Error = ();

    fn open(&mut self, _path: &Path, _flags: OFlag) -> Result<RawFd, Self::Error> {
        Err(())
    }
    fn close(&mut self, _fd: RawFd) -> Result<(), Self::Error> {
        Err(())
    }

    fn change_vt(&mut self, _vt: i32) -> Result<(), Self::Error> {
        Err(())
    }

    fn is_active(&self) -> bool {
        false
    }
    fn seat(&self) -> String {
        String::from("seat0")
    }
}

impl<S: Session> Session for Rc<RefCell<S>> {
    type Error = S::Error;

    fn open(&mut self, path: &Path, flags: OFlag) -> Result<RawFd, Self::Error> {
        self.borrow_mut().open(path, flags)
    }

    fn close(&mut self, fd: RawFd) -> Result<(), Self::Error> {
        self.borrow_mut().close(fd)
    }

    fn change_vt(&mut self, vt: i32) -> Result<(), Self::Error> {
        self.borrow_mut().change_vt(vt)
    }

    fn is_active(&self) -> bool {
        self.borrow().is_active()
    }

    fn seat(&self) -> String {
        self.borrow().seat()
    }
}

impl<S: Session> Session for Arc<Mutex<S>> {
    type Error = S::Error;

    fn open(&mut self, path: &Path, flags: OFlag) -> Result<RawFd, Self::Error> {
        self.lock().unwrap().open(path, flags)
    }

    fn close(&mut self, fd: RawFd) -> Result<(), Self::Error> {
        self.lock().unwrap().close(fd)
    }

    fn change_vt(&mut self, vt: i32) -> Result<(), Self::Error> {
        self.lock().unwrap().change_vt(vt)
    }

    fn is_active(&self) -> bool {
        self.lock().unwrap().is_active()
    }

    fn seat(&self) -> String {
        self.lock().unwrap().seat()
    }
}

/// Allows errors to be described by an error number
pub trait AsErrno: ::std::fmt::Debug {
    /// Returns the error number representing this error if any
    fn as_errno(&self) -> Option<i32>;
}

impl AsErrno for () {
    fn as_errno(&self) -> Option<i32> {
        None
    }
}

pub mod auto;
pub mod direct;

#[cfg(feature = "backend_session_logind")]
mod dbus;
#[cfg(feature = "backend_session_logind")]
pub use self::dbus::*;
