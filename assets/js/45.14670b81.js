(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{248:function(a,t,e){"use strict";e.r(t);var s=e(0),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"wasabi-setup-on-tails"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wasabi-setup-on-tails"}},[a._v("#")]),a._v(" Wasabi Setup on Tails")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#create-admin-password"}},[a._v("CREATE ADMIN PASSWORD")])]),e("li",[e("a",{attrs:{href:"#download"}},[a._v("DOWNLOAD")])]),e("li",[e("a",{attrs:{href:"#wasabi-data-folder"}},[a._v("WASABI DATA FOLDER")])]),e("li",[e("a",{attrs:{href:"#install-wasabi"}},[a._v("INSTALL WASABI")])]),e("li",[e("a",{attrs:{href:"#load-from-your-data-directory"}},[a._v("LOAD FROM YOUR DATA DIRECTORY")])]),e("li",[e("a",{attrs:{href:"#script-to-automatically-install-wasabi-on-tails"}},[a._v("Script to automatically install Wasabi on Tails")])])])]),e("p"),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("This essay is extracted from this step by step "),e("a",{attrs:{href:"https://github.com/PulpCattel/Tails-BitcoinCore-Wasabi",target:"_blank",rel:"noopener noreferrer"}},[a._v("guide"),e("OutboundLink")],1),a._v(", which also includes tutorials on how to install Tails, create a persistent storage and use Bitcoin Core alongside with it.")]),a._v(" "),e("h2",{attrs:{id:"create-admin-password"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-admin-password"}},[a._v("#")]),a._v(" CREATE ADMIN PASSWORD")]),a._v(" "),e("p",[a._v("You need sudo privileges to install Wasabi, at “Tails Greeter” create your admin password in “additional settings” and launch Tails.")]),a._v(" "),e("p",[a._v("Source: "),e("a",{attrs:{href:"https://tails.boum.org/doc/first_steps/startup_options/administration_password/index.en.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://tails.boum.org/doc/first_steps/startup_options/administration_password/index.en.html"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"download"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[a._v("#")]),a._v(" DOWNLOAD")]),a._v(" "),e("p",[a._v("Download for Debian/Ubuntu from:"),e("br"),a._v(" "),e("a",{attrs:{href:"http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion"),e("OutboundLink")],1),a._v(" (tor hidden service)"),e("br"),a._v("\nor"),e("br"),a._v(" "),e("a",{attrs:{href:"https://www.wasabiwallet.io/#download",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.wasabiwallet.io/#download"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("Verify the PGP signature of the downloaded package, the zkSNACKs' PGP key fingerprint is:\n"),e("br"),a._v(" "),e("code",[a._v("6FB3 872B 5D42 292F 5992 0797 8563 4832 8949 861E")])]),a._v(" "),e("p",[e("code",[a._v("gpg -v Wasabi-1.1.9.2.deb")]),a._v(" (For more details check this "),e("router-link",{attrs:{to:"/using-wasabi/InstallPackage.html#debian-and-ubuntu"}},[a._v("guide")]),a._v(")")],1),a._v(" "),e("p",[a._v("You can now save your "),e("code",[a._v("Wasabi-1.1.9.2.deb")]),a._v(" into the persistent storage, which should look like this:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("/Persistent\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /bitcoin-0.18.1    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Bitcoin Core launcher folder")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /Bitcoin           "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Bitcoin Core data folder")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /Wasabi-1.1.9.2.deb  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Wasabi installer")]),a._v("\n")])])]),e("h2",{attrs:{id:"wasabi-data-folder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wasabi-data-folder"}},[a._v("#")]),a._v(" WASABI DATA FOLDER")]),a._v(" "),e("p",[a._v("As of version 1.1.9 Wasabi doesn’t offer easy ways, especially without command line, to change install directory. There is though a quick workaround.")]),a._v(" "),e("p",[a._v("Wasabi "),e("router-link",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#where-can-i-find-the-wasabi-data-folder"}},[a._v("saves session files")]),a._v(" in "),e("code",[a._v("/Home/.walletwasabi/client")]),a._v(", you need to mark the “show hidden files” setting to see it.")],1),a._v(" "),e("p",[a._v("Create a directory in your persistent with the same hierarchical structure, like this:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("/Persistent\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /bitcoin-0.18.1    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Bitcoin Core launcher folder")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /Bitcoin           "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Bitcoin Core data folder")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /Wasabi-1.1.9.2.deb  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Wasabi installer")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /.walletwasabi\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /client        "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Here we save our wallet files, filters and blocks")]),a._v("\n")])])]),e("p",[a._v("After every session, when you’re done, navigate into "),e("code",[a._v("/Home/.walletwasabi/client")]),a._v(" and copy the desired folders into your persistent directory.")]),a._v(" "),e("p",[a._v("Generally, you’d like to save the "),e("code",[a._v("Wallets")]),a._v(" and "),e("code",[a._v("Blocks")]),a._v(" folders.")]),a._v(" "),e("p",[a._v("The former contains your wallet information (e.g. keys, labels), while the latter includes the blocks needed to establish your balance.")]),a._v(" "),e("p",[a._v("Could be also nice to save the "),e("code",[a._v("BitcoinStore")]),a._v(" folder, which contains the BIP 158 block filters, so that you don’t have to download them again.")]),a._v(" "),e("h2",{attrs:{id:"install-wasabi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-wasabi"}},[a._v("#")]),a._v(" INSTALL WASABI")]),a._v(" "),e("p",[a._v("Drop the "),e("code",[a._v("Wasabi-1.1.9.2.deb")]),a._v(" file from "),e("code",[a._v("/Home/Persistent")]),a._v(" into desktop.")]),a._v(" "),e("p",[a._v("Open the terminal and run:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" Desktop\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dpkg -i Wasabi-1.1.9.2.deb\n")])])]),e("p",[a._v("Type the password you created at “Tails Greeter”.")]),a._v(" "),e("p",[a._v("("),e("a",{attrs:{href:"https://help.ubuntu.com/lts/serverguide/dpkg.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Info"),e("OutboundLink")],1),a._v(" about dpkg)")]),a._v(" "),e("p",[a._v("Wasabi will show as a normal application in your activities overview menu, ready to start.")]),a._v(" "),e("ul",[e("li",[a._v("Press "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Windows_key",target:"_blank",rel:"noopener noreferrer"}},[a._v("Windows key"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v('Type "wasabi"')]),a._v(" "),e("li",[a._v("Launch it")])]),a._v(" "),e("h2",{attrs:{id:"load-from-your-data-directory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#load-from-your-data-directory"}},[a._v("#")]),a._v(" LOAD FROM YOUR DATA DIRECTORY")]),a._v(" "),e("p",[a._v("After the first time you save a Wasabi session, your persistent storage will look like:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("/Persistent\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /bitcoin-0.18.1        "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Bitcoin Core launcher folder")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /Bitcoin               "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Bitcoin Core data folder")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /Wasabi-1.1.9.2.deb      "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Wasabi installer")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /.walletwasabi\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /client            "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Here we save our wallet files, blocks and filters")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /Wallets\n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /Blocks\n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /BitcoinStore\n")])])]),e("p",[a._v("To load your saved session, drop the "),e("code",[a._v(".walletwasabi")]),a._v(" folder into "),e("code",[a._v("/Home")]),a._v(" before starting Wasabi.")]),a._v(" "),e("p",[a._v("You can save multiple copies of "),e("code",[a._v(".walletwasabi")]),a._v(" in your persistent, each with different data:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("/Persistent\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /bitcoin-0.18.1            \t   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Bitcoin Core launcher folder")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /Bitcoin                       "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Bitcoin Core data folder")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /Wasabi                        "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# General Wasabi folder")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /Wasabi-1.1.9.2.deb          "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Wasabi installer")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /BitcoinStore              "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Filters (No need to keep multiple copies of them)")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /CoinJoin wallet\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /.walletwasabi\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("       "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /client            "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Here we save our wallet files and blocks")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("           "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /Wallets\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("           "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /Blocks\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /watch-only coldstorage A\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /.walletwasabi\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("       "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /client\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("           "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /Wallets\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("           "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /Blocks\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /watch-only coldstorage B\n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /.walletwasabi\n            "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /client\n                "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /Wallets\n                "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("__ /Blocks\n")])])]),e("p",[a._v("This is only a minor example, tune it to your own needs.")]),a._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),e("p",[a._v("Remember to backup either your files or your "),e("a",{attrs:{href:"https://tails.boum.org/doc/first_steps/persistence/copy/index.en.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("persistent storage"),e("OutboundLink")],1),a._v("!")])]),a._v(" "),e("h2",{attrs:{id:"script-to-automatically-install-wasabi-on-tails"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#script-to-automatically-install-wasabi-on-tails"}},[a._v("#")]),a._v(" Script to automatically install Wasabi on Tails")]),a._v(" "),e("p",[a._v("Alternatively, you can use this "),e("a",{attrs:{href:"https://github.com/permabull/wasabi_tails_installer/blob/master/wasabi_tails_installer",target:"_blank",rel:"noopener noreferrer"}},[a._v("script"),e("OutboundLink")],1),a._v(" made by "),e("a",{attrs:{href:"https://github.com/permabull",target:"_blank",rel:"noopener noreferrer"}},[a._v("permabull"),e("OutboundLink")],1),a._v(", which, after downloading Wasabi by following "),e("router-link",{attrs:{to:"/using-wasabi/WasabiSetupTails.html#download"}},[a._v("step 2")]),a._v(", automatically installs Wasabi from the persistent folder and moves the wallet you wanna open (or all of them) by user input:")],1),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('#!/bin/bash\n\nsudo dpkg -i Wasabi-1.1.9.2.deb\n\nwassabee </dev/null &>/dev/null &\n\nsleep 5s\n\npkill wassabee\n\necho "*********************"\n\nls -1 -d */\n\necho "*********************"\n\nwhile true\ndo\t\n    read -p "Enter wallet to open: " wallet_name\n    FOLDER="$wallet_name"\n\n    if [ -d "$FOLDER" ]\n    then\n        echo "$FOLDER wallet found."\n\tcd "$FOLDER"/.walletwasabi/\n\tcp -r client/* ~/.walletwasabi/client\n\techo "Your files have been moved to wasabi folder"\n\tbreak\n    else\n\techo ""$FOLDER" wallet doesn\'t exist"\n\tcontinue\nfi\ndone\n\nwassabee </dev/null &>/dev/null &\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);