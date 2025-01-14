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
            "servoRpiPico.name": "Servo",
            "servoRpiPico.description": "Classic servo support for raspberrypi pico."
        },
        "ru": {
            "servoRpiPico.name": "Servo",
            "servoRpiPico.description": "Classic servo support for raspberrypi pico."
        },
        "zh-cn": {
            "servoRpiPico.name": "Servo",
            "servoRpiPico.description": "Classic servo support for raspberrypi pico."
        },
        "zh-tw": {
            "servoRpiPico.name": "Servo",
            "servoRpiPico.description": "Classic servo support for raspberrypi pico."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
          "SERVO_RASPBERRYPICO_CATEGORY": "Servo",
          "SERVO_WRITE_RASPBERRYPICO": "set servo pin %1 out %2 freq %3"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
          "SERVO_RASPBERRYPICO_CATEGORY": "Servo",
          "SERVO_WRITE_RASPBERRYPICO": "set servo pin %1 out %2 freq %3"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
          "SERVO_RASPBERRYPICO_CATEGORY": "Servo",
          "SERVO_WRITE_RASPBERRYPICO": "set servo pin %1 out %2 freq %3"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
          "SERVO_RASPBERRYPICO_CATEGORY": "Servo",
          "SERVO_WRITE_RASPBERRYPICO": "set servo pin %1 out %2 freq %3"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
