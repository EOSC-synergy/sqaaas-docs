# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

<img src="https://github.com/EOSC-synergy/service-qa-baseline/blob/master/content/images/logo-SYNERGY.png" height="80">

## Institutions owning the result
<p float="left">
    <img src="https://github.com/EOSC-synergy/service-qa-baseline/blob/master/content/images/logo-LIP.png" height="80">
    <img src="https://github.com/EOSC-synergy/service-qa-baseline/blob/master/content/images/logo-csic.png" height="80">
    <img src="https://github.com/EOSC-synergy/service-qa-baseline/blob/master/content/images/logo-UPV.png" height="80">
</p>

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
