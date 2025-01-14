const adafruitIO = formatMessage => ({
    name: "Adafruit IO",
    extensionId: "adafruitIO",
    version: "2.0.0",
    supportDevice: ["arduinoEsp8266","arduinoEsp32"],
    author: "iRobochakra",
    iconURL: `assets/AdafruitIO.png`,
    description: formatMessage({
        id: "adafruitIO.description",
        default: "Adafruit IO is the easiest way to get your projects onto the Internet of Things!",
        description: "Description of Adafruit IO"
    }),
    featured: true,
    blocks: "blocks.js",
    generator: "generator.js",
    toolbox: "toolbox.js",
    translations: 'translations.js',
    library: "lib",
    tags: ["other"],
    helpLink: "https://io.adafruit.com/"
});

module.exports = adafruitIO;
