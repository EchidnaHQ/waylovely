use crate::bindings::activity::Activity;
use crate::bindings::intent::{Intent, Action, self};
use crate::bindings::uri::Uri;
use crate::helpers::{get_object_path, get_env};
use crate::JVM;
use jni::objects::{JString, JValue};
use zbus::dbus_interface;
use zbus::fdo::Result;
use zbus::zvariant::{DeserializeDict, ObjectPath, OwnedObjectPath, SerializeDict, Type, Fd};
use std::fs::File;
use std::os::unix::prelude::*;
use super::handle_token::HandleToken;

//  This lovelyyy codee is copieed from https://github.com/bilelmoussaoui/ashpd/blob/master/src/desktop/open_uri.rs#L125
//   Licensed under the lovellyy MIT License (https://github.com/bilelmoussaoui/ashpd/blob/master/LICENSE)
#[derive(SerializeDict, DeserializeDict, Type, Debug, Default)]
/// Specified options for a [`OpenURIProxy::open_file`] or
/// [`OpenURIProxy::open_uri`] request.
#[zvariant(signature = "dict")]
struct OpenFileOptions {
    /// A string that will be used as the last element of the handle.
    handle_token: HandleToken,
    /// Whether to allow the chosen application to write to the file.
    /// This key only takes effect the uri points to a local file that is
    /// exported in the document portal, and the chosen application is sandboxed
    /// itself.
    writeable: Option<bool>,
    /// Whether to ask the user to choose an app. If this is not passed, or
    /// false, the portal may use a default or pick the last choice.
    ask: Option<bool>,
    // Token to activate the chosen application.
    activation_token: Option<String>,
}
// Code copied from ASHPD ends here! <3

pub struct OpenURI {}

#[dbus_interface(name = "org.freedesktop.portal.OpenURI")]
impl OpenURI {
    async fn open_uri(
        &self,
        _parent_window: &str,
        uri: &str,
        options: OpenFileOptions,
    ) -> Result<OwnedObjectPath> {
        let env = get_env();

        let juri = Uri::from_string(uri);
        let intent = Intent::new(Action::VIEW, &juri);

        Activity::start_activity(&intent);

        Ok(get_object_path(options.handle_token.clone()))
    }


        let intent = env
            .new_object(
                "android/content/Intent",
                "(Ljava/lang/String;Landroid/net/Uri;)Landroid/content/Intent;",
                &[
                    JValue::from(env.new_string("android.intent.action.VIEW").unwrap()),
                    juri,
                ],
            )
            .unwrap();

        env.call_static_method(
            "android/app/Activity",
            "startActivity",
            "(Landroid/content/Intent;)V",
            &[JValue::from(intent)],
        )
        .unwrap();

        Ok(get_object_path(options.handle_token.clone()))
    }
}
