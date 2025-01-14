const servo_maixduino = formatMessage => ({
    name: formatMessage({
        id: 'servoMaixduino.name',
        default: 'Servo',
        description: 'Name of servo maixduino'
    }),
    extensionId: 'servo_maixduino',
    version: '1.1.0',
    type: 'maixduino',
    supportDevice: ['maixduino'],
    author: 'iRobochakra',
    iconURL: `assets/servo.png`,
    description: formatMessage({
        id: 'servoMaixduino.description',
        default: 'Classic servo support for maixduino.',
        description: 'Description of servo maixduino'
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

module.exports = servo_maixduino;
