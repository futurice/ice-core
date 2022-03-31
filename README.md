<a href="https://github.com/futurice/ice-core" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://github.com/futurice/ice-style/raw/trunk/docs/images/brand/ice-logo.svg" alt="Ice Logo">
</a>

# Ice Core

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat)](https://opensource.org/licenses/MIT)

Ice Core provides the core Ice web component library. 

Each web component comes with its own functional styling which can be customised as needed. 

## Installing

To install the web component library you can use [Node Package Manager](https://npmjs.org).

```
npm install "@futurice/ice-core" --save-dev
```

## Usage

To use the project reference the full library:

```html
<script type="module" 
        src="node_modules/ice-core/lib/ice-core.es.js"></script>
```

Then you can use a component (e.g. a button) as follows in a HTML document:

```html
<ice-button id="primary-button" />
```

Or programmatically as follows:

```javascript
const button = new IceButton();
```

## Building

To build the project you can use [Node Package Manager](https://npmjs.org). 

```
npm run clean && npm run build
```

## Developing

To get started in developing the project it's recommended to use the official [_Node_ Docker image](https://hub.docker.com/_/node/), as this will provide a consistent and reliable environment for developing and testing changes. It's the exact image the project uses as part of the continuous integration (CI) build pipeline.

To start with Docker you can use the following command-line statement.

The project is built using [Vite](https://vitejs.dev) and the configuration can be found in the `build` directory (along with any other build-specific files). 

For further details on contributing to this project, follow [the CONTRIBUTING guide](./CONTRIBUTING).

```
docker run -it --name "ice-node" -P -v $(pwd):/src node:16-alpine sh; docker rm "ice-node"
```

> **Note:** The statement automatically removes the Docker image after use through the post-fixed `docker rm ...` command. If you want to keep the image, remove the post-fix statement and continue.