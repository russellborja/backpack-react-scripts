# backpack-react-scripts

This package is a fork of [Create React App][1] (specifically the `react-scripts` package). It's intended
to be used in conjuction with `create-react-app` like so:

```sh
# we still rely on facebooks global `create-react-app` cli
npm install -g create-react-app

# specify `backpack-react-scripts` as the scripts package to use
create-react-app my-app --scripts-version=backpack-react-scripts

# start your app development like you normally would with `create-react-app`
cd my-app
npm start
```

## Why fork?

Out of the box, `create-react-app` doesn't work well with Backpack components because it has no support for
Sass stylesheets or uncompiled dependencies in the `node_modules` folder. We also want to be able to tailor
the template to use Backpack out-the-box.

## Keeping this fork updated

We wish to keep this fork updated with the upstream repo to benefit from the ongoing open source development
of `create-react-app`. Please follow the steps outlined in [this guide][2] to keep this fork up to date e.g:

```sh
git remote add upstream git@github.com:facebookincubator/create-react-app.git
git fetch upstream
git rebase upstream/master
```

You will most likely run into merge conflicts during this process. If so, please take care to fix them whilst
preserving the custom functionality we have added in the fork.

## What is different in our fork?

This is a high-level overview of the changed we made to this fork.

### Moved ESLint from Webpack to npm script

> See `config/webpack.config.{dev,prod}.js`, `package.json`, `scripts/{eject,init}.js`, `template/.eslintrc`

By default, react-scripts runs all code through ESLint *on build*. As our [ESLint configuration](http://git.prod.skyscanner.local/backpack/eslint-config-skyscanner) is quite opinionated, we have disabled this functionality.

We have added an npm script so you can still run the linter at will using `npm run lint`.

### Added stylelint configuration

> See `package.json`, `template/.stylelintrc.json`

We added Skyscanner's [Stylelint configuration](https://github.com/Skyscanner/stylelint-config-skyscanner/).

### Added in Backpack components

> See `scripts/init.js`, `template/src/*`

We pre-install some Backpack components to help you get started quickly.

### Added a server-side rendering (SSR) Webpack configuration

> See `config/webpack.config.ssr.js`

This Webpack configuration is used to to enable easy server-side rendering. It is derived from `config/webpack.config.prod.js`.

Everything that we don't need from the prod config is not removed, but *commented out*.

### Moved React and ReactDOM from `dependencies` to `devDependencies`

> See `scripts/init.js`

Any app built with backpack-react-scripts should always output a bundle, and therefore it is enough to keep React and ReactDOM in `devDependencies`. In many cases, they should also be external dependencies (not part of the bundle).

As the CRA CLI install React and ReactDOM, we cannot really do anything about that; but we can move the entries in `package.json` from `dependencies` to `devDependencies`.

## Releasing a new version of `backpack-react-scripts`

Please refer to the [CONTRIBUTING.md][3] in the root of this repo. All other packages have had their  
`package.json`'s modified to be private therefore they won't be published to the npm registry.

[1]: https://github.com/facebookincubator/create-react-app
[2]: https://robots.thoughtbot.com/keeping-a-github-fork-updated
[3]: ./../../CONTRIBUTING.md
