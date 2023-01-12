module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/common/**/*.ts',
        'src/redux/**/*.ts',
        'src/config/**/*.ts'
    ],
    resetMocks: true,
    cache: false,
    globals: {
        crypto: require('crypto')
    }
};
