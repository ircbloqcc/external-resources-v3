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
            "Blynk.name": "Blynk New 2.0",
            "Blynk.description": "Blynk platform powers low-batch manufacturers of smart home products, complex HVAC systems, agricultural equipment, and everyone in between"
        },
        "ru": {
            "Blynk.name": "Blynk New 2.0",
            "Blynk.description": "Blynk platform powers low-batch manufacturers of smart home products, complex HVAC systems, agricultural equipment, and everyone in between"
        },
        "zh-cn": {
            "Blynk.name": "Blynk New 2.0",
            "Blynk.description": "Blynk platform powers low-batch manufacturers of smart home products, complex HVAC systems, agricultural equipment, and everyone in between"
        },
        "zh-tw": {
            "Blynk.name": "Blynk New 2.0",
            "Blynk.description": "Blynk platform powers low-batch manufacturers of smart home products, complex HVAC systems, agricultural equipment, and everyone in between"
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
          "BLYNK_CATEGORY": "BLYNK 2.0",
          "BLYNK_BEGIN": "Initialize BLYNK Server with %1 baudrate",
          "BLYNK_TEMPLATEID": "Blynk Template ID %1 Device Name %2",
          "BLYNK_USERID": "Connect SSID %1 Password %2 Auth Token %3 for Blynk",
          "BLYNK_START": "Start Blynk Server",
          "BLYNK_RECEIVE": "Receive %1 data in virtual pin %2 from Blynk",
          "BLYNK_SEND": "Send %1 data in virtual pin %2 in every %3 ms to Blynk",
          "BLYNK_STRING": "String Variable %1",
          "BLYNK_STRINGEQL": "Assign %1 = %2"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
          "BLYNK_CATEGORY": "BLYNK 2.0",
          "BLYNK_BEGIN": "Initialize BLYNK Server with %1 baudrate",
          "BLYNK_TEMPLATEID": "Blynk Template ID %1 Device Name %2",
          "BLYNK_USERID": "Connect SSID %1 Password %2 Auth Token %3 for Blynk",
          "BLYNK_START": "Start Blynk Server",
          "BLYNK_RECEIVE": "Receive %1 data in virtual pin %2 from Blynk",
          "BLYNK_SEND": "Send %1 data in virtual pin %2 in every %3 ms to Blynk",
          "BLYNK_STRING": "String Variable %1",
          "BLYNK_STRINGEQL": "Assign %1 = %2"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
          "BLYNK_CATEGORY": "BLYNK 2.0",
          "BLYNK_BEGIN": "Initialize BLYNK Server with %1 baudrate",
          "BLYNK_TEMPLATEID": "Blynk Template ID %1 Device Name %2",
          "BLYNK_USERID": "Connect SSID %1 Password %2 Auth Token %3 for Blynk",
          "BLYNK_START": "Start Blynk Server",
          "BLYNK_RECEIVE": "Receive %1 data in virtual pin %2 from Blynk",
          "BLYNK_SEND": "Send %1 data in virtual pin %2 in every %3 ms to Blynk",
          "BLYNK_STRING": "String Variable %1",
          "BLYNK_STRINGEQL": "Assign %1 = %2"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
          "BLYNK_CATEGORY": "BLYNK 2.0",
          "BLYNK_BEGIN": "Initialize BLYNK Server with %1 baudrate",
          "BLYNK_TEMPLATEID": "Blynk Template ID %1 Device Name %2",
          "BLYNK_USERID": "Connect SSID %1 Password %2 Auth Token %3 for Blynk",
          "BLYNK_START": "Start Blynk Server",
          "BLYNK_RECEIVE": "Receive %1 data in virtual pin %2 from Blynk",
          "BLYNK_SEND": "Send %1 data in virtual pin %2 in every %3 ms to Blynk",
          "BLYNK_STRING": "String Variable %1",
          "BLYNK_STRINGEQL": "Assign %1 = %2"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
