const cooperativeScheduler = formatMessage => ({
    name: formatMessage({
        id: 'cooperativeScheduler.name',
        default: 'Cooperative Scheduler'
    }),
    extensionId: 'cooperativeScheduler',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'i-Robochakra Team',
    iconURL: `assets/cooperativeScheduler.png`,
    description: formatMessage({
        id: 'cooperativeScheduler.description',
        default: 'Allow Arduino run multiple tasks.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['other'],
    helpLink: 'https://irobochakra.com/'
});

module.exports = cooperativeScheduler;
