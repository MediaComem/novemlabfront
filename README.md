# Novem Lab

Frontend application for the transmedia project novemlab:
https://github.com/ghiringh/transmedia

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Development](#development)
- [Production](#production)
- [Configuration](#configuration)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```bash
git clone https://github.com/MediaComem/novemlabfront.git
cd novemlabfront
npm ci
```

## Development

Create a local environment file:

```
cp .env.sample .env
```

> If you are also running the Novem API locally and are not using a reverse
> proxy, you can configure a proxy to avoid CORS issues. See
> [Configuration](#configuration) below.

Run the application in development mode with live code reload:

```
npm run dev
```

Visit http://localhost:8080 (if you are using the default port).

## Production

Run the application in production mode:

```
npm start
```

## Configuration

Environment variable   | Default value | Description
:--------------------- | :------------ | :----------------------------------------------------------------------------
`$NOVEM_API_URL`       | `/api`        | URL where the Novem API can be reached.
`$NOVEM_API_PROXY_URL` | -             | If specified, requests to the Novem API will be proxied to avoid CORS issues.
`$NOVEM_PORT`          | `8080`        | Port on which the application's HTTP server will listen to.

> See [`config.js`][./config.js] for more information.

In development, environment variables can be set by creating an `.env` file (see
[`.env.sample`](./.env.sample)).
