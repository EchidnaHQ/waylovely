use zbus::zvariant::{ObjectPath, OwnedObjectPath};

use crate::{handle_token::HandleToken, CONNECTION};


/**
 *
 * Copied from https://github.com/bilelmoussaoui/ashpd/blob/master/src/desktop/request.rs#L191-L197
 */
pub fn get_object_path(handle_token: HandleToken) -> OwnedObjectPath {
    let connection = CONNECTION.get().unwrap();
    let unique_name = connection.unique_name().unwrap();
    let unique_identifier = unique_name.trim_start_matches(':').replace('.', "_");
    
    OwnedObjectPath::try_from(format!(
        "/org/freedesktop/portal/desktop/request/{}/{}",
        unique_identifier, handle_token
    ))
    .unwrap()
}
