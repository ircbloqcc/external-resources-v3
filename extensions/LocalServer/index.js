const localServer = formatMessage => ({
    name: formatMessage({
        id: 'localServer.name',
        default: 'LocalServer',
        description: 'Name of Local Server'
    }),
    extensionId: 'localServer',
    version: '1.1.0',
    supportDevice: ['arduinoEsp8266','arduinoEsp32'],
    author: 'iRobochakra',
    iconURL: `assets/localServer.png`,
    description: formatMessage({
        id: 'localServer.description',
        default: 'Controlling your Hardware with Local WiFi Server',
        description: 'Description of LocalServer'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['other'],
    helpLink: ''
});

module.exports = localServer;
