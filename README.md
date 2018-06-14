# vue-webpack-mobile-template

> A template for mobile project, fork from [vuejs-templates/webpack](https://github.com/JZLeung), modified by [LeungJZ](https://github.com/JZLeung)

## Feature
- [x] pug
- [x] vw/vh
- [x] scss/less
- [x] cdn
- [x] dll
- [ ] flexible/rem
- [ ] 1px line in mobile

... and so on.

## What's New
- [Pug](https://github.com/pugjs/pug) - A high-performance template engine
- [vw/vh in css](https://www.w3cplus.com/mobile/vw-layout-in-vue.html) - A mobile side layout solution
- CSS pre-processor - Scss/Less
- CDN - use BootCdn to increase the loading speed
- [webpackDllPlugin](https://webpack.js.org/plugins/dll-plugin/) - use webpackDllPlugin to increase the speed of packing
- 1px line in mobile - 
Solve the problem of mobile side 1px line display

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init JZLeung/webpack#mobile my-project
$ cd my-project
$ npm install
$ npm run dev
```
The development server will run on port 8080 by default. If that port is already in use on your machine, the next free port will be used.

:warning: **The develop branch is not considered stable and can contain bugs or not build at all, so use at your own risk.**

## Documentation

- [For the based template](http://vuejs-templates.github.io/webpack): common questions specific to this template are answered and each part is described in greater detail
- [For Vue 2.0](http://vuejs.org/guide/): general information about how to work with Vue, not specific to this template

## What's Included

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps



- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - Static assets compiled with version hashes for efficient long-term caching, and an auto-generated production `index.html` with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.

- `npm run unit`: Unit tests run in [JSDOM](https://github.com/tmpvar/jsdom) with [Jest](https://facebook.github.io/jest/), or in PhantomJS with Karma + Mocha + karma-webpack.
  - Supports ES2015+ in test files.
  - Easy mocking.

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```
