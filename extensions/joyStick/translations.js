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
            "joyStick.name": "Joystick Shield V1.A",
            "joyStick.description": "The Joystick Shield enable your Arduino with a joystick!"
        },
        "ru": {
            "joyStick.name": "Joystick Shield V1.A",
            "joyStick.description": "The Joystick Shield enable your Arduino with a joystick!"
        },
        "zh-cn": {
            "joyStick.name": "Joystick Shield V1.A",
            "joyStick.description": "The Joystick Shield enable your Arduino with a joystick!"
        },
        "zh-tw": {
            "joyStick.name": "Joystick Shield V1.A",
            "joyStick.description": "The Joystick Shield enable your Arduino with a joystick!"
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
      {
        "JOYSTICK_CATEGORY": "joyStick",
        "JOYSTICK_INIT": "Run joyStick event",
        "JOYSTICK_BUTTONS": "%1 Button is pressed",
        "JOYSTICK_POSITION": "joyStick moves to %1",
        "JOYSTICK_XYPOS": "read joyStick %1 position"
     }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
      {
        "JOYSTICK_CATEGORY": "joyStick",
        "JOYSTICK_INIT": "Run joyStick event",
        "JOYSTICK_BUTTONS": "%1 Button is pressed",
        "JOYSTICK_POSITION": "joyStick moves to %1",
        "JOYSTICK_XYPOS": "read joyStick %1 position"
     }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
      {
        "JOYSTICK_CATEGORY": "joyStick",
        "JOYSTICK_INIT": "Run joyStick event",
        "JOYSTICK_BUTTONS": "%1 Button is pressed",
        "JOYSTICK_POSITION": "joyStick moves to %1",
        "JOYSTICK_XYPOS": "read joyStick %1 position"
     }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
      {
        "JOYSTICK_CATEGORY": "joyStick",
        "JOYSTICK_INIT": "Run joyStick event",
        "JOYSTICK_BUTTONS": "%1 Button is pressed",
        "JOYSTICK_POSITION": "joyStick moves to %1",
        "JOYSTICK_XYPOS": "read joyStick %1 position"
     }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
