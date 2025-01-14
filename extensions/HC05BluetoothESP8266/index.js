const HC05BluetoothEsp8266 = formatMessage => ({
    name: formatMessage({
        id: 'HC05BluetoothEsp8266.name',
        default: 'HC05 Bluetooth Esp8266',
        description: 'Name of HC05 Bluetooth Esp8266'
    }),
    extensionId: 'HC05BluetoothEsp8266',
    version: '1.0.0',
    supportDevice: 'arduinoEsp8266',
    author: 'iRobochakra',
    iconURL: `assets/HC05BluetoothEsp8266.png`,
    description: formatMessage({
        id: 'HC05BluetoothEsp8266.description',
        default: 'Data Can be transmit or Receive through Bluetooth from Esp8266.',
        description: 'Description of HC05 Bluetooth Esp8266'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: true,
    tags: ['communication'],
    helpLink: 'https://irobochakra.com/'
});

module.exports = HC05BluetoothEsp8266;
