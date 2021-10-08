exports.config = {

    specs: [
        './test/**/*.js'
    ],

    suites: {

        login: [
            './test/login/invalidLoginTest.js'
        ],
        signUpPF: [
            './test/register/signUpPFTest.js'
        ],
        signUpPJ: [
            './test/register/signUpPJTest.js'
        ]
    },

    exclude: [

    ],
    // ============
    // Capabilities
    // ============
    maxInstances: 8,
    capabilities: [{
        maxInstances: 8,
        browserName: 'chrome'/* ,
        'goog:chromeOptions': {
            args: ['--disable-gpu', 'window-size=1280,1024', '--no-sandbox']
        } */
    }],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.kanui.com.br/',
    waitforTimeout: 50000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        require: ['@babel/register']
    }
}
