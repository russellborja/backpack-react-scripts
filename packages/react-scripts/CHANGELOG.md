# `backpack-react-scripts` Change Log

## UNRELEASED

_Nothing yet..._

## 0.0.19 - 2017-05-02
### Added
- The ability to configure "babelIncludeRegex" in package json

## 0.0.18 - 2017-04-10
### Added
- Support for new `bpk-icon` mixin from `bpk-mixins`

## 0.0.17 - 2017-04-06
### Fixed
- Rebased from `upstream/0.9.x` (ebebe80383eb15b4759a0cd5ea12015eaac94c0e)
- Now moves `react` and `react-dom` from dependencies to devDependencies

## 0.0.16 - 2017-03-30
### Added
- Upgrading `eslint-config-skyscanner` to v1.1.0
- Upgrading `stylelint-config-skyscanner` to v0.1.3
- Upgrading `eslint-plugin-react` to v6.10.3 as [undelying issue](https://github.com/yannickcr/eslint-plugin-react/issues/1117) which caused it to be pinned was resolved
- Upgrading `node-sass` to v4.5.0 to make it compatible with latest version of `bpk-mixins`
- Upgrading all Backpack dev dependencies:
  - `bpk-component-button` to v1.6.6
  - `bpk-component-code` to v0.0.58
  - `bpk-component-grid` to v1.0.8
  - `bpk-component-heading` to v1.2.7
  - `bpk-component-paragraph` to v0.2.1
  - `bpk-mixins` to v11.0.2
  - `bpk-stylesheets` to v3.2.16
- Upgrading `detect-port` to v1.1.1

## 0.0.15 - 2017-03-27
### Added
- The ability to lint SCSS with `stylelint-config-skyscanner`
  - run `npm run lint:scss` or just `npm run lint` for both JS and SCSS linting
- The ability to automatically fix many SCSS linting issues using `stylefmt`
  - run `npm run lint:scss:fix`
- The ability to automatically fix many JS linting issues using `eslint --fix`
  - run `npm run lint:js:fix`

## 0.0.14 - 2017-03-20
### Added
- Upgrading `eslint-config-skyscanner` to v1.0.0

### Fixed
- Pinning `eslint-plugin-react` to 6.10.0 to fix indent bug

## 0.0.13 - 2017-03-09
### Added
- The ability to configure "ssrExternals" in package json

## 0.0.12 - 2017-03-01
### Fixed
- The backpack module regex now works on windows

## 0.0.11 - 2017-02-27
### Changed
- Removed backpack logo usage from output template

### Added
- There is now an `.editorconfig` in the output template

## 0.0.10 - 2017-01-05
### Changed
- Rebased from `upstream/master` (4d7b7544e74db1aaca22e847b233ed1f3b95b72b)
  - Updates `babel-jest` && `jest` packages to 18.0.0
- Upgraded `eslint` & `eslint-plugin-react` to 3.12.2 & 6.8.0 respectively

### Added
- Added ability to configure "externals" in package json

## 0.0.9 - 2016-12-20
### Added
- Server Side Rendering support (proof of concept):
  - `webpack.config.ssr.js`: This is a duplicate of `webpack.config.prod.js` modified to target a server side node environment
  - `build.js` now checks if an `ssr.js` file exists at the app root, if so it will compile it in parallel with the optimized browser bundle leaving an
    `ssr.js` file in the build directory ready to be required on the server
  - See the [readme](http://git.prod.skyscanner.local/backpack/create-react-app/tree/master/packages/react-scripts/template#server-side-rendering-ssr) for detailed instructions.

## 0.0.8
### Changed
- Rebased from `upstream/master` (94c912dc60561c931232caf9cf5442082711227c)
  - Mostly bug fixes and dependency upgrades, see [create-react-app's changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md)
  (between versions `v0.8.0` -> `v0.8.4`)

## 0.0.7
### Fixed
- Added base stylesheet scripts to the template so that hover effects work

## 0.0.6
### Changed
- Removed eslint from webpack to a separate `npm run lint` task
- Swapped out `eslint-config-react-app` in favour of `eslint-config-skyscanner`

### Added
- A `backpack-react-scripts` specific readme

## 0.0.5
### Fixed
- Rebased from `upstream/master` (bcc469c9a5c7916ec10786f133769cdda2c80188)
  - Most notable change is Yarn support

## 0.0.4
### Fixed
- Reverted nested components dir

## 0.0.3
### Added
- New Backpack template
  - Backpack stylesheet and Sass mixin integration
  - Backpack button, code, grid, heading & paragraph components integration
  - `.eslintrc` for editor integration
  - Nested components into `src/components/` dir

## 0.0.2
### Fixed
- Removed `bundledDependencies`

## 0.0.1
### Changed
- Customised `react-scripts` package to be `backpack-react-scripts`
- Marked all other packages as private

### Added
- Sass stylesheet support
- Babel will now compile imports from the `node_modules` folder that match `/bpk-*`
- Drone build configuration
