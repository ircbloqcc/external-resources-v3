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
            "servoMaixduino.name": "Servo",
            "servoMaixduino.description": "Classic servo support for maixduino."
        },
        "ru": {
            "servoMaixduino.name": "Servo",
            "servoMaixduino.description": "Classic servo support for maixduino."
        },
        "zh-cn": {
            "servoMaixduino.name": "Servo",
            "servoMaixduino.description": "Classic servo support for maixduino."
        },
        "zh-tw": {
            "servoMaixduino.name": "Servo",
            "servoMaixduino.description": "Classic servo support for maixduino."
        },
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
          "SERVO_MAIXDUINO_CATEGORY": "Servo",
          "SERVO_WRITE_MAIXDUINO": "set servo pin %1 angle as %2 timer %3"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
          "SERVO_MAIXDUINO_CATEGORY": "Servo",
          "SERVO_WRITE_MAIXDUINO": "set servo pin %1 angle as %2 timer %3"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
          "SERVO_MAIXDUINO_CATEGORY": "Servo",
          "SERVO_WRITE_MAIXDUINO": "set servo pin %1 angle as %2 timer %3"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
          "SERVO_MAIXDUINO_CATEGORY": "Servo",
          "SERVO_WRITE_MAIXDUINO": "set servo pin %1 angle as %2 timer %3"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
