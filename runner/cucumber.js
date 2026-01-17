module.exports = {
    default: {
        require: [
            'support/**/*.ts',
            'steps/**/*.ts'
        ],
        requireModule: ['ts-node/register'],
        paths: ['features/**/*.feature'],
        format: [
            'progress',
            'json:reports/cucumber-report.json'
        ]
    }
};
