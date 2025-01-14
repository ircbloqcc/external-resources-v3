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
            "ThingSpeak.name": "ThingSpeak",
            "ThingSpeak.description": "Data collection in the cloud with advanced data analysis using MATLAB."
        },
        "ru": {
            "ThingSpeak.name": "ThingSpeak",
            "ThingSpeak.description": "Data collection in the cloud with advanced data analysis using MATLAB."
        },
        "zh-cn": {
            "ThingSpeak.name": "ThingSpeak",
            "ThingSpeak.description": "Data collection in the cloud with advanced data analysis using MATLAB."
        },
        "zh-tw": {
            "ThingSpeak.name": "ThingSpeak",
            "ThingSpeak.description": "Data collection in the cloud with advanced data analysis using MATLAB."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
      {
        "THINGSPEAK_CATEGORY": "Thing Speak",
        "THINGSPEAK_BEGIN": "Initialize ThingSpeak Server with %1 baudrate",
        "THINGSPEAK_WIFI": "Connect SSID %1 Password %2 for ThingSpeak",
        "THINGSPEAK_USERID": "Set Channel ID %1 API Key AIO Key %2 for ThingSpeak",
        "THINGSPEAK_SEND": "Send %1 data to Field %2 in ThingSpeak",
        "THINGSPEAK_PUSH": "Send to Multi Field %1  %2",
        "THINGSPEAK_MULTI": "Set %1 data for Multi Field %2 in ThingSpeak",
        "THINGSPEAK_STATUS": "Send Status %1 to ThingSpeak"
     }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
      {
        "THINGSPEAK_CATEGORY": "Thing Speak",
        "THINGSPEAK_BEGIN": "Initialize ThingSpeak Server with %1 baudrate",
        "THINGSPEAK_WIFI": "Connect SSID %1 Password %2 for ThingSpeak",
        "THINGSPEAK_USERID": "Set Channel ID %1 API Key AIO Key %2 for ThingSpeak",
        "THINGSPEAK_SEND": "Send %1 data to Field %2 in ThingSpeak",
        "THINGSPEAK_PUSH": "Send to Multi Field %1  %2",
        "THINGSPEAK_MULTI": "Set %1 data for Multi Field %2 in ThingSpeak",
        "THINGSPEAK_STATUS": "Send Status %1 to ThingSpeak"
     }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
      {
        "THINGSPEAK_CATEGORY": "Thing Speak",
        "THINGSPEAK_BEGIN": "Initialize ThingSpeak Server with %1 baudrate",
        "THINGSPEAK_WIFI": "Connect SSID %1 Password %2 for ThingSpeak",
        "THINGSPEAK_USERID": "Set Channel ID %1 API Key AIO Key %2 for ThingSpeak",
        "THINGSPEAK_SEND": "Send %1 data to Field %2 in ThingSpeak",
        "THINGSPEAK_PUSH": "Send to Multi Field %1  %2",
        "THINGSPEAK_MULTI": "Set %1 data for Multi Field %2 in ThingSpeak",
        "THINGSPEAK_STATUS": "Send Status %1 to ThingSpeak"
     }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
      {
        "THINGSPEAK_CATEGORY": "Thing Speak",
        "THINGSPEAK_BEGIN": "Initialize ThingSpeak Server with %1 baudrate",
        "THINGSPEAK_WIFI": "Connect SSID %1 Password %2 for ThingSpeak",
        "THINGSPEAK_USERID": "Set Channel ID %1 API Key AIO Key %2 for ThingSpeak",
        "THINGSPEAK_SEND": "Send %1 data to Field %2 in ThingSpeak",
        "THINGSPEAK_PUSH": "Send to Multi Field %1  %2",
        "THINGSPEAK_MULTI": "Set %1 data for Multi Field %2 in ThingSpeak",
        "THINGSPEAK_STATUS": "Send Status %1 to ThingSpeak"
     }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
