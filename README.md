<p align="center">
    <img height="64px" src="http://i.imgur.com/Ia3H0Ae.png" />
</p>

<p align="center">
    <a href="https://circleci.com/gh/scottbedard/vuetober-spa">
        <img alt="Build Status" src="https://img.shields.io/circleci/build/github/scottbedard/vuetober-spa" />
    </a>
    <a href="https://david-dm.org/scottbedard/vuetober-spa">
        <img alt="Depdendencies" src="https://img.shields.io/david/scottbedard/vuetober-spa" />
    </a>
    <a href="https://david-dm.org/scottbedard/vuetober-spa?type=dev">
        <img alt="Dev Depdendencies" src="https://img.shields.io/david/dev/scottbedard/vuetober-spa" />
    </a>
    <a href="https://github.com/scottbedard/vuetober-spa/blob/master/LICENSE">
        <img alt="License" src="https://img.shields.io/github/license/scottbedard/oc-prerender-plugin?color=blue" />
    </a>
</p>

This repository is a pre-configured [Vuetober](https://github.com/scottbedard/vuetober) theme for building single page applications. It comes with the following features, and additional tooling can be added with [vue-cli](https://cli.vuejs.org).

- Vuex & vue-router
- Babel
- ESLint
- Unit testing with Jest
- SASS / SCSS preprocessing

## Getting started

Run the following commands from your theme directory to get started:

- `git clone git@github.com:scottbedard/vuetober-spa.git mytheme`
- `cd mytheme`
- `yarn install`

Once this is done, the following commands will be available.

```bash
# start dev server with hot-reloading
yarn serve

# build production assets
yarn build

# run tests
yarn test:unit

# lint and fix files
yarn lint
```

See the [vue-cli documentation](https://cli.vuejs.org/config/) for information on customizing the config.

## License

Copyright (c) 2019-present, Scott Bedard

[MIT](https://github.com/scottbedard/vuetober-spa/blob/master/LICENSE)
