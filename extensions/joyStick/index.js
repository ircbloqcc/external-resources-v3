const joyStick = formatMessage => ({
    name: formatMessage({
        id: 'joyStick.name',
        default: 'Joystick Shield V1.A',
        description: 'Name of joyStick'
    }),
    extensionId: 'joyStick',
    version: '1.1.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266', 'arduinoEsp32'],
    author: 'iRobochakra',
    iconURL: `assets/joyStick.png`,
    description: formatMessage({
        id: 'joyStick.description',
        default: 'The Joystick Shield enable your Arduino with a joystick!',
        description: 'Description of Joystick'
    }),
    featured: true,
    blocks: "blocks.js",
    generator: "generator.js",
    toolbox: "toolbox.js",
    translations: "translations.js",
    library: "lib",
    official: true,
    tags: ['shield'],
    helpLink: 'https://hardwarefun.com/projects/joystick-shield'
});

module.exports = joyStick;
