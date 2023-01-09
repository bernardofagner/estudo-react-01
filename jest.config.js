module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/common/**/*.ts'
    ],
    resetMocks: true,
    cache: false,
    globals: {
        crypto: require('crypto')
    }
};
