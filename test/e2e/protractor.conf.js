const child_process = require('child_process');
const server = child_process.spawn('node', ['server/server.js']);
server.stdout.pipe(process.stdout);

let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

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

    baseUrl: 'http://localhost:4200/',

    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
        }));
    }

};

process.on('exit', () => server.kill());