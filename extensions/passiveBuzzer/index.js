const passiveBuzzer = formatMessage => ({
    name: formatMessage({
        id: 'passiveBuzzer.name',
        default: 'Passive Buzzer'
    }),
    extensionId: 'passiveBuzzer',
    version: '2.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266'],
    author: 'i-Robochakra Team',
    iconURL: `assets/passiveBuzzer.png`,
    description: formatMessage({
        id: 'passiveBuzzer.description',
        default: 'Unlike the active buzzer, the passive buzzer can be used to make different tones of sound and play some ringtones.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['actuator'],
    helpLink: 'https://irobochakra.com/'
});

module.exports = passiveBuzzer;
