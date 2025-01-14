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
            "keypad.name": "Keypad",
            "keypad.description": "Keypad is a library for using matrix style keypads with the Arduino."
        },
        "ru": {
            "keypad.name": "Keypad",
            "keypad.description": "Keypad is a library for using matrix style keypads with the Arduino."
        },
        "zh-cn": {
            "keypad.name": "Keypad",
            "keypad.description": "Keypad is a library for using matrix style keypads with the Arduino."
        },
        "zh-tw": {
            "keypad.name": "Keypad",
            "keypad.description": "Keypad is a library for using matrix style keypads with the Arduino."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
      {
        "KEYPAD_CATEGORY": "Keypad",
        "KEYPAD_INIT4X4": "Intialize 4x4 Rows: %1 %2 %3 %4 Cols: %5 %6 %7 %8",
       "KEYPAD_INIT4X3": "Intialize 4x3 Rows: %1 %2 %3 %4 Cols: %5 %6 %7",
       "KEYPAD_INIT3X3": "Intialize 3x3 Rows: %1 %2 %3 Cols: %4 %5 %6",
       "KEYPAD_SCAN": "Scan the Keypad",
       "KEYPAD_GETVALUE": "Get any key value?",
       "KEYPAD_KEYVALUE": "Key Value",
       "KEYPAD_READSTRING": "Read a string of %1 chars",
       "KEYPAD_READHASH": "Read String to #",
       "KEYPAD_ENTEREDSTRING": "Entered String"
     }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
      {
        "KEYPAD_CATEGORY": "Keypad",
        "KEYPAD_INIT4X4": "Intialize 4x4 Rows: %1 %2 %3 %4 Cols: %5 %6 %7 %8",
       "KEYPAD_INIT4X3": "Intialize 4x3 Rows: %1 %2 %3 %4 Cols: %5 %6 %7",
       "KEYPAD_INIT3X3": "Intialize 3x3 Rows: %1 %2 %3 Cols: %4 %5 %6",
       "KEYPAD_SCAN": "Scan the Keypad",
       "KEYPAD_GETVALUE": "Get any key value?",
       "KEYPAD_KEYVALUE": "Key Value",
       "KEYPAD_READSTRING": "Read a string of %1 chars",
       "KEYPAD_READHASH": "Read String to #",
       "KEYPAD_ENTEREDSTRING": "Entered String"
     }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
      {
        "KEYPAD_CATEGORY": "Keypad",
        "KEYPAD_INIT4X4": "Intialize 4x4 Rows: %1 %2 %3 %4 Cols: %5 %6 %7 %8",
       "KEYPAD_INIT4X3": "Intialize 4x3 Rows: %1 %2 %3 %4 Cols: %5 %6 %7",
       "KEYPAD_INIT3X3": "Intialize 3x3 Rows: %1 %2 %3 Cols: %4 %5 %6",
       "KEYPAD_SCAN": "Scan the Keypad",
       "KEYPAD_GETVALUE": "Get any key value?",
       "KEYPAD_KEYVALUE": "Key Value",
       "KEYPAD_READSTRING": "Read a string of %1 chars",
       "KEYPAD_READHASH": "Read String to #",
       "KEYPAD_ENTEREDSTRING": "Entered String"
     }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
      {
        "KEYPAD_CATEGORY": "Keypad",
        "KEYPAD_INIT4X4": "Intialize 4x4 Rows: %1 %2 %3 %4 Cols: %5 %6 %7 %8",
        "KEYPAD_INIT4X3": "Intialize 4x3 Rows: %1 %2 %3 %4 Cols: %5 %6 %7",
        "KEYPAD_INIT3X3": "Intialize 3x3 Rows: %1 %2 %3 Cols: %4 %5 %6",
        "KEYPAD_SCAN": "Scan the Keypad",
        "KEYPAD_GETVALUE": "Get any key value?",
        "KEYPAD_KEYVALUE": "Key Value",
        "KEYPAD_READSTRING": "Read a string of %1 chars",
        "KEYPAD_READHASH": "Read String to #",
        "KEYPAD_ENTEREDSTRING": "Entered String"
     }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
