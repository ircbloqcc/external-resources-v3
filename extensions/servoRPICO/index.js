const servo_raspberrypico = formatMessage => ({
    name: formatMessage({
        id: 'servoRpiPico.name',
        default: 'Servo',
        description: 'Name of servo raspberrypico'
    }),
    extensionId: 'servo_raspberrypico',
    version: '1.1.0',
    type: 'raspberrypico',
    supportDevice: ['raspberrypico'],
    author: 'iRobochakra',
    iconURL: `assets/servo.png`,
    description: formatMessage({
        id: 'servoRpiPico.description',
        default: 'Classic servo support for raspberrypico.',
        description: 'Description of servo raspberrypico'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['actuator'],
    helpLink: ''
});

module.exports = servo_raspberrypico;
