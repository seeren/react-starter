# React starter

This starter provide ready to dev [react-app](https://create-react-app.dev/) with [typescript](https://www.typescriptlang.org/).

* * *

## 💿 Install

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

Prerequist to run the project is to install globally [Node.js](https://nodejs.org/en/) or [Docker](https://www.docker.com/).

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

_Port can be configured in `.env` file with the `PORT_NGINX` variable_. Production rely on [nginx](https://www.nginx.com/) configured in the `nginx.conf` file serve index.html.

```bash
docker-compose up prod
```

You can execute commands for react-starter with `zsh`

```bash
docker exec -it react-starter_dev zsh
```

* * *

## 🏗️ Build

Build have same prerequist than previous section

### Npm

-   Build the project

```bash
npm run build
```

### Docker

-   Build then run image for build stage.

```bash
docker-compose up prod
```
