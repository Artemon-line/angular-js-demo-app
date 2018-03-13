const child_process = require('child_process');
const server = child_process.spawn('node', ['server/server.js']);
server.stdout.pipe(process.stdout);

exports.config = {
    directConnect: true,
    specs: ['./specs/*.spec.js'],

    capabilities: {
        browserName: 'chrome'
    },

    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    },

    allScriptsTimeout: 8000,

    baseUrl: 'http://localhost:3000/',

    // framework: 'custom',
    // frameworkPath: require.resolve('protractor-cucumber-framework'),

    onCleanUp: function () {
        // nothing to do here
    },
    onComplete: function () {
        // nothing to do here
    },
    beforeLaunch: function () {
        // nothing to do here
    },
    afterLaunch: function () {
        // nothing to do here
    }
};

process.on('exit', () => server.kill());