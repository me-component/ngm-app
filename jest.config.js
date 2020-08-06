const { pathsToModuleNameMapper } = require('ts-jest/utils');
/*const { compilerOptions } = require('./tsconfig.base.json');

// It's dirty hack. Need to fix it.
const customModulePaths = pathsToModuleNameMapper(compilerOptions.paths);
for (const key of Object.keys(customModulePaths)) {
  customModulePaths[key] = `<rootDir>/${customModulePaths[key]}`;
}*/

module.exports = {

  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
      diagnostics: false,
      allowSyntheticDefaultImports: true,
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer'
      ]
    }
  },
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  "transform": {
    "^.+\\.(ts|html)$": "ts-jest",
    "^.+\\.js$": "babel-jest"
  },
  "testPathIgnorePatterns": [
    "/node_modules/"
  ],
  moduleFileExtensions: ['ts', 'js', 'html'],
  preset: 'ts-jest',
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^environments/(.*)$': '<rootDir>/src/environments/$1',
    //...customModulePaths
  },
  "transformIgnorePatterns": [
    "node_modules/(?!@ngrx|angular2-ui-switch|ng-dynamic)"
  ],
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ],
  coverageReporters: ['html'],
  setupFilesAfterEnv: ['<rootDir>/test-config/setupJest.ts'],

};
