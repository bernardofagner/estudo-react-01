module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/hooks/**/*.ts',
        'src/redux/**/*.ts',
        'src/utils/**/*.ts'
    ],
    resetMocks: true,
    cache: false,
    globals: {
        crypto: require('crypto')
    }
};
