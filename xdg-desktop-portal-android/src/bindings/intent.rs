use std::ops::Deref;

use jni::{
    objects::{JObject, JString, JValue},
    JNIEnv, JavaVM,
};

use crate::{helpers::get_env, JVM as GlobalJVM};

use super::uri::Uri;

pub struct Intent<'a>(JObject<'a>);

impl Intent<'_> {
    pub fn new(action: Action, juri: &Uri) -> Self {
        let env: JNIEnv = get_env();
        let intent = env
            .new_object(
                "android/content/Intent",
                "(Ljava/lang/String;Landroid/net/Uri;)Landroid/content/Intent;",
                &[
                    action.into(),
                    **juri,
                ],
            )
            .unwrap();
        Self(intent)
    }
}




impl<'a> From<Intent<'a>> for JValue<'a> {
    fn from(intent: Intent<'a>) -> Self {
        Self::from(intent.0)
    }
}

impl<'a> Deref for Intent<'a> {
    type Target = JObject<'a>;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

pub struct Action(&'static str);

impl Action {
    pub const VIEW: Action = Action("android.intent.action.VIEW");
}

impl<'a> Into<JString<'a>> for Action {
    fn into(self) -> JString<'a> {
        get_env().new_string(self.0).unwrap()
    }
}

impl<'a> Into<JValue<'a>> for Action {
    fn into(self) -> JValue<'a> {
        JValue::from(Into::<JString>::into(self))
    }
}

