# React starter

This starter provide ready to dev [react-app](https://create-react-app.dev/) with [typescript](https://www.typescriptlang.org/).

-   [Install](#💿-install)
-   [Editor](#⌨️-ide)
-   [Run](#🚀-run)
-   [Lint](#📐-lint)
-   [Dev](#👨‍💻-develop)
-   [Build](#🏗️-build)

* * *

## 💿 Install

**Project prerequists are to install globally [Node.js](https://nodejs.org/en/) or [Docker](https://www.docker.com/).**

Clone this repository.

```bash
git clone https://github.com/seeren/react-starter.git
```

Change directory.

```bash
cd react-starter
```

* * *

## ⌨️ Editor

**[VScode](https://code.visualstudio.com/) is sugested with the provided configuration.**

### Extension

The file `.vscode/extensions.json` recommand installing folowing extensions:

-   [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to enforce code quality.
-   [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to enforce code style.
-   [mrmlnc.vscode-remark](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-remark) to enforce markdown style.
-   [csstools.postcss](https://marketplace.visualstudio.com/items?itemName=csstools.postcss) to allow custom at rules.

### Settings

The file `.vscode/settings.json` contain recommanded settings.

* * *

## 🚀 Run

**Execute the project on local environement**

### Npm

-   Install dependencies.

```bash
npm install
```

-   Serve the project.

```bash
npm start
```

### Docker

-   Build then run image for developement stage.

_Port can be configured in `.env` file with the `PORT` variable_

```bash
docker-compose up dev
```

-   Build then run image for production stage.

_Port can be configured in `.env` file with the `PORT_NGINX` variable._

Production rely on [nginx](https://www.nginx.com/) with the `nginx.conf` file to serve `build/index.html` whatever the url path is.

```bash
docker-compose up prod
```

You can execute commands for react-starter containers with `zsh`

```bash
docker exec -it react-starter_dev zsh
```

* * *

## 📐 Lint

**Enforce code quality and style**

Fix lint rules and save file.

```bash
npm run lint
```

### Eslint

Lint stack is specific to react typescript and opiniated. There is few rules for encourage to adding them as needed.

* * *

## 👨‍💻 Dev

**Learn react practices**

Explore project directories README:
-   [Routes](./src/routes/)
-   [Pages](./src/pages/)
-   [Layouts](./src/layouts/)
-   [Components](./src/components/)
-   [Features](./src/features/)
-   [Hooks](./src/hooks/)
-   [Stores](./src/stores/)
-   [Slices](./src/slices/)
-   [Models](./src/models/)
-   [Types](./src/types/)
-   [Selectors](./src/selectors/)
-   [Services](./src/services/)

* * *

## 🏗️ Build

**This section describe how to build the project.**

### Npm

-   Build the project

```bash
npm run build
```

### Docker

-   Build then run image for build stage.

```bash
docker-compose up build
```

* * *
