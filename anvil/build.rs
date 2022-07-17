// SPDX-FileCopyrightText: 2022 Victor Berger <victor.berger@m4x.org>
// SPDX-FileCopyrightText: 2022 Victoria Brekenfeld
//
// SPDX-License-Identifier: MIT

use cfg_if::cfg_if;
use std::env::var;
fn main() {
    cfg_if! {
    if #[cfg(not(target_os = "android"))] {
     if var("CARGO_FEATURE_LOGIND").ok().is_none() && var("CARGO_FEATURE_LIBSEAT").ok().is_none() {
        println!("cargo:warning=You are compiling anvil without logind/libseat support.");
        println!("cargo:warning=This means that you'll likely need to run it as root if you want to launch it from a tty.");
        println!("cargo:warning=To enable logind support add `--feature logind` to your cargo invocation.");
        println!("cargo:warning=$ cd anvil; cargo run --feature logind");
        println!("cargo:warning=To enable libseat support add `--feature libseat` to your cargo invocation.");
        println!("cargo:warning=$ cd anvil; cargo run --feature libseat");
     }
    }

    }
}
