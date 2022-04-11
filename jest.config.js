module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],

  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy'
  },
  testEnvironment: 'jsdom',
  testURL: 'http://localhost:7000',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.css$': 'jest-css-modules-transform',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '\\.pnp\\.[^\\/]+$'
  ],
  verbose: true,
  watchman: true
};