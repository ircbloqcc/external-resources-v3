// This file was automatically generated. Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable dot-notation */
/* eslint-disable max-len */
function getInterfaceTranslations () {
    return {
        "en": {
            "localServer.name": "LocalServer",
            "localServer.description": "Controlling your Hardware with Local WiFi Server!"
        },
        "ru": {
            "localServer.name": "LocalServer",
            "localServer.description": "Controlling your Hardware with Local WiFi Server!"
        },
        "zh-cn": {
            "localServer.name": "LocalServer",
            "localServer.description": "Controlling your Hardware with Local WiFi Server!"
        },
        "zh-tw": {
            "localServer.name": "LocalServer",
            "localServer.description": "Controlling your Hardware with Local WiFi Server!"
        },
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
      {
        "LOCALSERVER_CATEGORY": "LocalServer",
        "LOCALSERVER_BEGIN": "Initialize LocalServer with %1 baudrate",
        "LOCALSERVER_WIFI": "Connect SSID %1 Password %2 for LocalServer",
        "LOCALSERVER_APBEGIN": "Set SSID %1 Password %2 for Access Point",
        "LOCALSERVER_GETREQUEST": "Read Request from Client",
        "LOCALSERVER_CHKREQUEST": "Check Request == %1",
        "LOCALSERVER_CLIENTFLUSH": "Client Data Flush",
        "LOCALSERVER_HTMLINIT": "Create HTML Header",
        "LOCALSERVER_CLIENTEMPTY": "Client print %1",
        "LOCALSERVER_GUIBUTTON": "Create GUI Button for %1 , Set text %2 with %3",
        "LOCALSERVER_HTMLEND": "End HTML Header"
     }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
      {
        "LOCALSERVER_CATEGORY": "LocalServer",
        "LOCALSERVER_BEGIN": "Initialize LocalServer with %1 baudrate",
        "LOCALSERVER_WIFI": "Connect SSID %1 Password %2 for LocalServer",
        "LOCALSERVER_APBEGIN": "Set SSID %1 Password %2 for Access Point",
        "LOCALSERVER_GETREQUEST": "Read Request from Client",
        "LOCALSERVER_CHKREQUEST": "Check Request == %1",
        "LOCALSERVER_CLIENTFLUSH": "Client Data Flush",
        "LOCALSERVER_HTMLINIT": "Create HTML Header",
        "LOCALSERVER_CLIENTEMPTY": "Client print %1",
        "LOCALSERVER_GUIBUTTON": "Create GUI Button for %1 , Set text %2 with %3",
        "LOCALSERVER_HTMLEND": "End HTML Header"
     }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
      {
        "LOCALSERVER_CATEGORY": "LocalServer",
        "LOCALSERVER_BEGIN": "Initialize LocalServer with %1 baudrate",
        "LOCALSERVER_WIFI": "Connect SSID %1 Password %2 for LocalServer",
        "LOCALSERVER_APBEGIN": "Set SSID %1 Password %2 for Access Point",
        "LOCALSERVER_GETREQUEST": "Read Request from Client",
        "LOCALSERVER_CHKREQUEST": "Check Request == %1",
        "LOCALSERVER_CLIENTFLUSH": "Client Data Flush",
        "LOCALSERVER_HTMLINIT": "Create HTML Header",
        "LOCALSERVER_CLIENTEMPTY": "Client print %1",
        "LOCALSERVER_GUIBUTTON": "Create GUI Button for %1 , Set text %2 with %3",
        "LOCALSERVER_HTMLEND": "End HTML Header"
     }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
      {
        "LOCALSERVER_CATEGORY": "LocalServer",
        "LOCALSERVER_BEGIN": "Initialize LocalServer with %1 baudrate",
        "LOCALSERVER_WIFI": "Connect SSID %1 Password %2 for LocalServer",
        "LOCALSERVER_APBEGIN": "Set SSID %1 Password %2 for Access Point",
        "LOCALSERVER_GETREQUEST": "Read Request from Client",
        "LOCALSERVER_CHKREQUEST": "Check Request == %1",
        "LOCALSERVER_CLIENTFLUSH": "Client Data Flush",
        "LOCALSERVER_HTMLINIT": "Create HTML Header",
        "LOCALSERVER_CLIENTEMPTY": "Client print %1",
        "LOCALSERVER_GUIBUTTON": "Create GUI Button for %1 , Set text %2 with %3",
        "LOCALSERVER_HTMLEND": "End HTML Header"
     }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
