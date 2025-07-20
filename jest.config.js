export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy'
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.jest.json'
        }
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};
