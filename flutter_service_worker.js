'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"index.html": "fbb26376bb5ecf25740e3b52abab2c04",
"/": "fbb26376bb5ecf25740e3b52abab2c04",
"main.dart.js": "3efbbe87d903f65e498d8a030e385ef0",
"manifest.json": "444f9e870d4cc3e4d82f106a0125f77f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/FontManifest.json": "b6ad626aadbe7881d2dbb9f6716e6bd2",
"assets/NOTICES": "cb8eae129979f8ba0a00ba6df8dc47fc",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/launch/ribn_logo_2.png": "ba045b0f220479e2d09f492b21a997f9",
"assets/assets/launch/android12.png": "50f6cd1d71274f96f42b7d76c424fb28",
"assets/assets/launch/launcher_icon.png": "8781ee6e9ae876907f6faf7b669d184c",
"assets/assets/icons/mint_page_active.svg": "81f98ca04030f9c25ed3027145fb59ee",
"assets/assets/icons/import_wallet.svg": "abfddf7fed68a787625b4b2ab4f4befd",
"assets/assets/icons/remint_same_asset.svg": "decb526c2e89aa3a867d347f7222eed6",
"assets/assets/icons/invalid_recipient.png": "9c8d062cabfe1011ebb1e778877fa415",
"assets/assets/icons/add.svg": "9af98250754660e398dcb9446e69898d",
"assets/assets/icons/wallet_lock.png": "ca6ebdd3323fc385c47b07bacb7651b4",
"assets/assets/icons/copy_unselected.png": "303ad3c81a5654667753f32d6e4f41b8",
"assets/assets/icons/file_copy.png": "188688b9ffdc83b3d88f0e98cdda9013",
"assets/assets/icons/encrypt_file.svg": "bb9c9850478509e12fe53b98846aec8b",
"assets/assets/icons/touch_id.png": "fd8f7505698d3c938201d9909937645c",
"assets/assets/icons/ribn_feedbackcheckmark.png": "984b32bf61169ece9caef0ff2ad806f8",
"assets/assets/icons/sms_failed.png": "0b83b3e7c26307ac619b19e196c96dc6",
"assets/assets/icons/mint_large.svg": "dd22f213bcc0fd1a92c60132429f7d41",
"assets/assets/icons/balance_page.svg": "f9abbb01f68d6669d7f7e8f9424b1736",
"assets/assets/icons/poly_icon_circle.png": "53c8b25ce712fe7480542917d63f16aa",
"assets/assets/icons/round_info_circle.png": "c801c5019ecdfa071bd4e9d4be132b6d",
"assets/assets/icons/iphone_biometrics.png": "565a3e2e35fe1c507fa9d7105f05a1f2",
"assets/assets/icons/warning_icon.png": "fe1af5ff7826ea7ebd6e9a21ea932160",
"assets/assets/icons/touch_id_cutout.png": "c9e3084765837f7d034e79fdde58bd2a",
"assets/assets/icons/mint_new_asset.svg": "be5cb8b6c1578f6fd4194f9601e5e977",
"assets/assets/icons/copy_selected.png": "25ad9137f8d2d4732de710ffac2298c2",
"assets/assets/icons/seedphrase_generated.svg": "2fc7efbda1db9a3f386dfd1b16d4b9c8",
"assets/assets/icons/issuer_fingerprint.svg": "036eaa1514f6ca7bc8dd99d54ae7eb23",
"assets/assets/icons/paper_pen.svg": "3c7fef9ae920eaecb30058fc28552a75",
"assets/assets/icons/wallet_with_border.png": "fd714822283dc56c65acb083c8cf8736",
"assets/assets/icons/sent.svg": "da4b232f47e3f28101ce2c047588ab64",
"assets/assets/icons/check_circle.png": "3be94fe596c8e13303e489c170f9b97a",
"assets/assets/icons/polysIcon.png": "49536249ac34a747acde61caac43fd30",
"assets/assets/icons/download.png": "4362498e9e11259f8ba105ed28f37be2",
"assets/assets/icons/copy_icon_alternate.png": "7df9be3113800fee67c169790b25dbce",
"assets/assets/icons/andriod_face_id_cutout.png": "531bcdb1fabc4eb3dc0950f284762ee7",
"assets/assets/icons/ribn_logo.png": "e083717d6a972a76a11f8cf126e50e8c",
"assets/assets/icons/visibility_off.svg": "9fca18cfbaebbb5114ffbf421259c718",
"assets/assets/icons/balance_page_active.svg": "7a240fb7803c5a21b2f37d9fedb96b49",
"assets/assets/icons/getting_started.png": "ca6ebdd3323fc385c47b07bacb7651b4",
"assets/assets/icons/clock_border.png": "357a52436e77bd738b6457c70f573015",
"assets/assets/icons/password_hidden.png": "81ac1e1c70f5b38e9d0ab5ed67be919e",
"assets/assets/icons/plus.svg": "60ef2c0b37cd7e28f1a75cc03f8f1195",
"assets/assets/icons/settings.svg": "7110cbae653817c7956a88dd60365f05",
"assets/assets/icons/pen_paper.png": "1d5ad893fd6a66e6906a83b26bcfcb77",
"assets/assets/icons/wink.svg": "a10fc3450986de470408edec5c64c613",
"assets/assets/icons/coffee-green-icon.svg": "ad8237310c002af92882f0dbc2e4d080",
"assets/assets/icons/remove.svg": "6147faae08c9e709e4ea358c97b475b6",
"assets/assets/icons/password_visible.png": "e757818478e6959b55b29d78633da43f",
"assets/assets/icons/circle_info.png": "60654866aff6a41585cf751f44900291",
"assets/assets/icons/document.png": "05771b4f5dea494c6b1f2e4942fff5f2",
"assets/assets/icons/my_fingerprint.svg": "c8bf90721665ff46093f6405326065b3",
"assets/assets/icons/success.png": "223e56b163b356b67ebdf94a1d11c45d",
"assets/assets/icons/asset_unselected.png": "ba52b13feaf9d1f886496f3ce809ba2f",
"assets/assets/icons/ios_face_id.png": "16fa06058f8af5859fba7954580d120f",
"assets/assets/icons/add_plus.png": "d64a78e23dfd05f7024afad62dac7f2e",
"assets/assets/icons/undefined_icon.png": "e08007c02a0bf315677880f114c3e3f0",
"assets/assets/icons/error_face.png": "05853a180b60dcde507d1749a0f5cb57",
"assets/assets/icons/ios_face_id_cutout.png": "0a40e86fbafe3cb777c123bc729836b0",
"assets/assets/icons/edit_icon.png": "ef982cf5e07478012642eb5e459abd86",
"assets/assets/icons/address_copied.png": "ca8eb2557b6f6c8eb88449f54c6766f6",
"assets/assets/icons/android_face_id.png": "fbe7e1305e4119df6b8572ac7e19c258",
"assets/assets/icons/warning.svg": "2210d63dbdb4c40faccdd85d9c9296b6",
"assets/assets/icons/menu.png": "cd59dd9db6c821d8609f2062d36ef54e",
"assets/assets/icons/close_grey.svg": "f929416740abab138ef6b410aae6ac02",
"assets/assets/icons/key_dark.png": "d46a8f7747ebf9742c4bda1ab7b7cb69",
"assets/assets/icons/onboarding_background.png": "4b2b9108d8cf20d96fafb4b5e548bf0d",
"assets/assets/icons/onboarding_background.svg": "9c489d0a0eb4c4bc46e087f2c054b1c3",
"assets/assets/icons/program.png": "7286a4d089ddb93fc16d3f8ae8fb47f3",
"assets/assets/icons/content_copy.svg": "d035cf07de4495bda421f7ced92fcac9",
"assets/assets/icons/extension.svg": "b5b523c743e7569582faf20bc14e319e",
"assets/assets/icons/support.svg": "0c9a7e524454ed8820ad4aa098c33bd4",
"assets/assets/icons/topl_placeholder_card.svg": "16633a55ca9704da345c674a4425a828",
"assets/assets/icons/android_biometrics.png": "b103466a3fddbd207d4fe60d35d9415f",
"assets/assets/icons/another_wallet_button.svg": "90ee974cf98ce55d3361c67252c91c0e",
"assets/assets/icons/send.png": "0a747f2d2732aa69f00dd7aec3f1e9c6",
"assets/assets/icons/info.png": "a76a776acf4c5b6273ccbafaf01ddcbd",
"assets/assets/icons/tx_history_page.svg": "6832b960bd85eb69338ad0609b02c254",
"assets/assets/icons/import.svg": "d67b0dd200a2938d00a17cd7f8b88352",
"assets/assets/icons/mint_page.svg": "27d2c52a1a41a92faf2f3c72d695925a",
"assets/assets/icons/visibility.svg": "88d784f7a22e8ffd4f44bfc8a7b5ed43",
"assets/assets/icons/password_lock.png": "e4b11a3f24f812828a2594fa17be2c38",
"assets/assets/icons/iphone_biometrics_outline.png": "adb758e9a6fbdcf7e21cc2ed30639b60",
"assets/assets/icons/wallet_password.svg": "b1aa627a1e6b974769667bff165bf157",
"assets/assets/icons/finger_print_assets.png": "bf38a85f96bdd9dfad395a3180e74496",
"assets/assets/icons/finger_print_light.svg": "6a0f83769c176f93fdacfaf832d04e3d",
"assets/assets/icons/open_in_new.png": "f52df56184413a5b6e0533207b3a7dc5",
"assets/assets/icons/my_wallet_button.svg": "2a33565ea9497b6d32915a69c51c214e",
"assets/assets/icons/topl_placeholder.svg": "81ae444596e0bfbc12797af10793a393",
"assets/assets/icons/content_copy.png": "c7bf0a9580990ae9012a819d43f4ad57",
"assets/assets/icons/seedphrase_created.png": "36088c8adc6c34ba1b8a6e63ba42b1bd",
"assets/assets/icons/help_icon.png": "5b480e786da9b80f925851e043f948a3",
"assets/assets/icons/finger_print_dark.svg": "3c62559d927fcb1c29051609c7bc5a7d",
"assets/assets/icons/menu.svg": "caf6b0adaaf618c405b54886dfcf41ab",
"assets/assets/icons/red_danger_triangle.png": "fca04fbbec105fac2cd5b341bbb03500",
"assets/assets/icons/tx_history_page_active.svg": "05e1509ca9572dda953157e0c9aac48f",
"assets/assets/icons/receive.png": "ee9aa2e7857aa25739e434ae01369054",
"assets/assets/icons/recipient_fingerprint.svg": "be2c79bd0a954c3f8af31f20a9cf61ff",
"assets/assets/icons/android_biometrics_outline.png": "1aa557c43ecd72f5d8f80df534e687a2",
"assets/assets/icons/copy_icon.png": "529cec9f38ac527dc64d6faf0b8d47ae",
"assets/assets/icons/connect_dapp.png": "c32fd64043fa0bdf4b0f0c18dd0f7551",
"assets/assets/icons/seed_phrase_confirmed.svg": "1c3a7f48da43d8345ce320c95b915c50",
"assets/assets/icons/key_light.png": "994a3199ec9422428db861f99770a365",
"assets/assets/icons/password_manager.svg": "bf1ac4022d98a4ab275e457b12a095c1",
"assets/assets/icons/download.svg": "45e278abab630126b4413cc1cdf693ba",
"assets/assets/icons/sad_face.png": "c298d0ff117d0ba5ccb7f0286a8d8a3e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/ribn_toolkit/fonts/DMSans-Regular.ttf": "8c79e87613696cae32379ee06b2e16c7",
"assets/packages/ribn_toolkit/fonts/DMSans-Bold.ttf": "1af8ec25074feb61fd81bc4d81d857aa",
"assets/packages/ribn_toolkit/fonts/DMSans-Medium.ttf": "7880a8db2b16c7b95e6d0dfa4d2e7895",
"assets/packages/ribn_toolkit/assets/fonts/DMSans-Regular.ttf": "8c79e87613696cae32379ee06b2e16c7",
"assets/packages/ribn_toolkit/assets/fonts/DMSans-Bold.ttf": "1af8ec25074feb61fd81bc4d81d857aa",
"assets/packages/ribn_toolkit/assets/fonts/DMSans-Medium.ttf": "7880a8db2b16c7b95e6d0dfa4d2e7895",
"assets/packages/ribn_toolkit/assets/asset_icons/coff_blue_icon.png": "e0a9967e5a63bf7e496edd9d56ec0681",
"assets/packages/ribn_toolkit/assets/asset_icons/coff_green_icon.png": "b5f751a25dfad0403aa231e06b03a0ed",
"assets/packages/ribn_toolkit/assets/asset_icons/coff_purple_icon.png": "c2dbc662dc28fd6000480577f753747e",
"assets/packages/ribn_toolkit/assets/asset_icons/dia_green_icon.png": "913799e7e18e3f5861e800f6d09c2151",
"assets/packages/ribn_toolkit/assets/asset_icons/dia_yellow_icon.png": "8b757cb8e6987a80efd76e045573759e",
"assets/packages/ribn_toolkit/assets/asset_icons/dia_blue_icon.png": "b2a98078173da04e5044fc306258bced",
"assets/packages/ribn_toolkit/assets/asset_icons/dia_purple_icon.png": "ed2a852eed2032979bb2965cfd7dc516",
"assets/packages/ribn_toolkit/assets/asset_icons/coff_brown_icon.png": "e56ec05f606f7b7221b921aebc9f529c",
"assets/packages/ribn_toolkit/assets/asset_icons/coff_yellow_icon.png": "1e415e9239fe8063f59a74b43a0f8989",
"assets/packages/ribn_toolkit/assets/icons/mint_page_active.svg": "81f98ca04030f9c25ed3027145fb59ee",
"assets/packages/ribn_toolkit/assets/icons/import_wallet.svg": "abfddf7fed68a787625b4b2ab4f4befd",
"assets/packages/ribn_toolkit/assets/icons/remint_same_asset.svg": "decb526c2e89aa3a867d347f7222eed6",
"assets/packages/ribn_toolkit/assets/icons/wallet_blue.png": "e5ad5e8879c9c9d42be404efde0aa883",
"assets/packages/ribn_toolkit/assets/icons/invalid_recipient.png": "9c8d062cabfe1011ebb1e778877fa415",
"assets/packages/ribn_toolkit/assets/icons/add.svg": "9af98250754660e398dcb9446e69898d",
"assets/packages/ribn_toolkit/assets/icons/copy_unselected.png": "303ad3c81a5654667753f32d6e4f41b8",
"assets/packages/ribn_toolkit/assets/icons/file_copy.png": "188688b9ffdc83b3d88f0e98cdda9013",
"assets/packages/ribn_toolkit/assets/icons/encrypt_file.svg": "bb9c9850478509e12fe53b98846aec8b",
"assets/packages/ribn_toolkit/assets/icons/chevron_down_dark.png": "65f9ee3376c5e770410eb9c0bac34a01",
"assets/packages/ribn_toolkit/assets/icons/ribn_feedbackcheckmark.png": "984b32bf61169ece9caef0ff2ad806f8",
"assets/packages/ribn_toolkit/assets/icons/sms_failed.png": "0b83b3e7c26307ac619b19e196c96dc6",
"assets/packages/ribn_toolkit/assets/icons/mint_large.svg": "dd22f213bcc0fd1a92c60132429f7d41",
"assets/packages/ribn_toolkit/assets/icons/balance_page.svg": "f9abbb01f68d6669d7f7e8f9424b1736",
"assets/packages/ribn_toolkit/assets/icons/poly_icon_circle.png": "53c8b25ce712fe7480542917d63f16aa",
"assets/packages/ribn_toolkit/assets/icons/round_info_circle.png": "c801c5019ecdfa071bd4e9d4be132b6d",
"assets/packages/ribn_toolkit/assets/icons/gray_help_bubble.png": "bed1d884e2187e4edb7b1ed937c2615f",
"assets/packages/ribn_toolkit/assets/icons/mint_new_asset.svg": "be5cb8b6c1578f6fd4194f9601e5e977",
"assets/packages/ribn_toolkit/assets/icons/copy_selected.png": "25ad9137f8d2d4732de710ffac2298c2",
"assets/packages/ribn_toolkit/assets/icons/seedphrase_generated.svg": "2fc7efbda1db9a3f386dfd1b16d4b9c8",
"assets/packages/ribn_toolkit/assets/icons/issuer_fingerprint.svg": "036eaa1514f6ca7bc8dd99d54ae7eb23",
"assets/packages/ribn_toolkit/assets/icons/paper_pen.svg": "3c7fef9ae920eaecb30058fc28552a75",
"assets/packages/ribn_toolkit/assets/icons/sent.svg": "da4b232f47e3f28101ce2c047588ab64",
"assets/packages/ribn_toolkit/assets/icons/new_ribn_logo.png": "32b84e848ab46b69e0300e60158b2e3d",
"assets/packages/ribn_toolkit/assets/icons/check_circle.png": "2f082b91229ced13aa2dd141d2bfffe3",
"assets/packages/ribn_toolkit/assets/icons/polysIcon.png": "49536249ac34a747acde61caac43fd30",
"assets/packages/ribn_toolkit/assets/icons/visibility_off.svg": "9fca18cfbaebbb5114ffbf421259c718",
"assets/packages/ribn_toolkit/assets/icons/balance_page_active.svg": "7a240fb7803c5a21b2f37d9fedb96b49",
"assets/packages/ribn_toolkit/assets/icons/password_hidden.png": "81ac1e1c70f5b38e9d0ab5ed67be919e",
"assets/packages/ribn_toolkit/assets/icons/plus.svg": "d130b4c2b0f527324438d1f710bb1184",
"assets/packages/ribn_toolkit/assets/icons/wink.svg": "a10fc3450986de470408edec5c64c613",
"assets/packages/ribn_toolkit/assets/icons/coffee-green-icon.svg": "ad8237310c002af92882f0dbc2e4d080",
"assets/packages/ribn_toolkit/assets/icons/remove.svg": "6147faae08c9e709e4ea358c97b475b6",
"assets/packages/ribn_toolkit/assets/icons/password_visible.png": "e757818478e6959b55b29d78633da43f",
"assets/packages/ribn_toolkit/assets/icons/wallet_grey.png": "8ab718754148685ff5edb714a7f8a506",
"assets/packages/ribn_toolkit/assets/icons/clock_grey.png": "c6012bde83efa421502e6f0c72ff7cd0",
"assets/packages/ribn_toolkit/assets/icons/my_fingerprint.svg": "c8bf90721665ff46093f6405326065b3",
"assets/packages/ribn_toolkit/assets/icons/asset_unselected.png": "ba52b13feaf9d1f886496f3ce809ba2f",
"assets/packages/ribn_toolkit/assets/icons/error.png": "45672afdb600b81ba5ab4fdc5dc4a38f",
"assets/packages/ribn_toolkit/assets/icons/undefined_icon.png": "b5808ac3dd12af625da2f75a8b3eb251",
"assets/packages/ribn_toolkit/assets/icons/import_wallet.png": "98b50b6f90c47e7cc63fc5660576639a",
"assets/packages/ribn_toolkit/assets/icons/error_face.png": "05853a180b60dcde507d1749a0f5cb57",
"assets/packages/ribn_toolkit/assets/icons/edit_icon.png": "ef982cf5e07478012642eb5e459abd86",
"assets/packages/ribn_toolkit/assets/icons/create_wallet.png": "d882f301196890d8db8c4aaa26b1e275",
"assets/packages/ribn_toolkit/assets/icons/address_copied.png": "ca8eb2557b6f6c8eb88449f54c6766f6",
"assets/packages/ribn_toolkit/assets/icons/warning.svg": "2210d63dbdb4c40faccdd85d9c9296b6",
"assets/packages/ribn_toolkit/assets/icons/menu.png": "cd59dd9db6c821d8609f2062d36ef54e",
"assets/packages/ribn_toolkit/assets/icons/close_grey.svg": "f929416740abab138ef6b410aae6ac02",
"assets/packages/ribn_toolkit/assets/icons/key_dark.png": "d46a8f7747ebf9742c4bda1ab7b7cb69",
"assets/packages/ribn_toolkit/assets/icons/restore_wallet.png": "43f3d9545a962e3d7bb830520650a7e9",
"assets/packages/ribn_toolkit/assets/icons/content_copy.svg": "d035cf07de4495bda421f7ced92fcac9",
"assets/packages/ribn_toolkit/assets/icons/extension.svg": "b5b523c743e7569582faf20bc14e319e",
"assets/packages/ribn_toolkit/assets/icons/plus_blue.png": "9a3d1900dd3bd10f0e6b7f642e78e6e5",
"assets/packages/ribn_toolkit/assets/icons/settings.png": "d4438044ec221ec3bcc5e3465023d616",
"assets/packages/ribn_toolkit/assets/icons/topl_placeholder_card.svg": "16633a55ca9704da345c674a4425a828",
"assets/packages/ribn_toolkit/assets/icons/another_wallet_button.svg": "90ee974cf98ce55d3361c67252c91c0e",
"assets/packages/ribn_toolkit/assets/icons/send.png": "0a747f2d2732aa69f00dd7aec3f1e9c6",
"assets/packages/ribn_toolkit/assets/icons/info.png": "a76a776acf4c5b6273ccbafaf01ddcbd",
"assets/packages/ribn_toolkit/assets/icons/tx_history_page.svg": "6832b960bd85eb69338ad0609b02c254",
"assets/packages/ribn_toolkit/assets/icons/import.svg": "d67b0dd200a2938d00a17cd7f8b88352",
"assets/packages/ribn_toolkit/assets/icons/mint_page.svg": "27d2c52a1a41a92faf2f3c72d695925a",
"assets/packages/ribn_toolkit/assets/icons/visibility.svg": "88d784f7a22e8ffd4f44bfc8a7b5ed43",
"assets/packages/ribn_toolkit/assets/icons/plus_grey.png": "34353d2b61b96b96d4654ad43f2ba42a",
"assets/packages/ribn_toolkit/assets/icons/wallet_password.svg": "b1aa627a1e6b974769667bff165bf157",
"assets/packages/ribn_toolkit/assets/icons/create_wallet_shadow.png": "0d9cc6449a99a80c5f429ae27987bc4d",
"assets/packages/ribn_toolkit/assets/icons/finger_print_light.svg": "6a0f83769c176f93fdacfaf832d04e3d",
"assets/packages/ribn_toolkit/assets/icons/clock_blue.png": "5a8c72e3b08348f16722eeeac5008453",
"assets/packages/ribn_toolkit/assets/icons/hamburger_menu.png": "99497afc9d948b1b50bbfb7f98db09bd",
"assets/packages/ribn_toolkit/assets/icons/chevron_down.png": "a1ad2bd8cccac5bf1c84abe27e799399",
"assets/packages/ribn_toolkit/assets/icons/circle_plus.png": "f3be6eb9be848db6704b89f60fa601e6",
"assets/packages/ribn_toolkit/assets/icons/open_in_new.png": "6eccc8b41e78289c049a982b67377dc8",
"assets/packages/ribn_toolkit/assets/icons/my_wallet_button.svg": "2a33565ea9497b6d32915a69c51c214e",
"assets/packages/ribn_toolkit/assets/icons/topl_placeholder.svg": "81ae444596e0bfbc12797af10793a393",
"assets/packages/ribn_toolkit/assets/icons/ribn_circle_logo.png": "cd884c1b69072fd642aaf5c5b97661ed",
"assets/packages/ribn_toolkit/assets/icons/seedphrase_created.png": "36088c8adc6c34ba1b8a6e63ba42b1bd",
"assets/packages/ribn_toolkit/assets/icons/help_icon.png": "5b480e786da9b80f925851e043f948a3",
"assets/packages/ribn_toolkit/assets/icons/finger_print_dark.svg": "3c62559d927fcb1c29051609c7bc5a7d",
"assets/packages/ribn_toolkit/assets/icons/menu.svg": "caf6b0adaaf618c405b54886dfcf41ab",
"assets/packages/ribn_toolkit/assets/icons/tx_history_page_active.svg": "05e1509ca9572dda953157e0c9aac48f",
"assets/packages/ribn_toolkit/assets/icons/receive.png": "ee9aa2e7857aa25739e434ae01369054",
"assets/packages/ribn_toolkit/assets/icons/recipient_fingerprint.svg": "be2c79bd0a954c3f8af31f20a9cf61ff",
"assets/packages/ribn_toolkit/assets/icons/copy_icon.png": "282284861f6b2798c9b6191996ccc507",
"assets/packages/ribn_toolkit/assets/icons/seed_phrase_confirmed.svg": "1c3a7f48da43d8345ce320c95b915c50",
"assets/packages/ribn_toolkit/assets/icons/key_light.png": "994a3199ec9422428db861f99770a365",
"assets/packages/ribn_toolkit/assets/icons/support.png": "c6c516b7752c6a29131f384ef56f273f",
"assets/packages/ribn_toolkit/assets/icons/password_manager.svg": "bf1ac4022d98a4ab275e457b12a095c1",
"assets/packages/ribn_toolkit/assets/icons/download.svg": "45e278abab630126b4413cc1cdf693ba",
"assets/packages/ribn_toolkit/assets/icons/sad_face.png": "c298d0ff117d0ba5ccb7f0286a8d8a3e",
"assets/AssetManifest.json": "231bb3fc4f5d482e4e46990853e6137d",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"version.json": "1e0ca63e183506c32e907bcd4452f5f4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
