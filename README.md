# React starter

This starter provide ready to dev [react-app](https://create-react-app.dev/) with [typescript](https://www.typescriptlang.org/).

* [Install](#💿-install)
* [Run](#🚀-run)
* [Build](#🏗️-build)
* [Test](#🧪-test)
* [Lint]()

* * *

## 💿 Install

**Project prerequists are to install globally [Node.js](https://nodejs.org/en/) or [Docker](https://www.docker.com/).**

Clone this repository.

```bash
git clone https://github.com/seeren/react-starter.git
```

Change directory

```bash
cd react-starter
```

* * *

## 🚀 Run

This section describe how to **run** the project.

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

## 🏗️ Build

This section describe how to **build** the project.

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

## 🧪 Test

This section describe how to **test** the project.

* * *

## 📐 Lint

This section describe how to **lint** the project.

* * *
