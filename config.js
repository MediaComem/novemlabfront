try {
  require('dotenv').config();
} catch (err) {
  // Ignore missing dotenv in production.
}

/**
 * URL where the Novem API can be reached. This can be only a URL path when
 * deployed behind a reverse proxy or with a local proxy (see `apiProxyUrl`
 * below).
 */
exports.apiUrl = process.env.NOVEM_API_URL || '/api';

/**
 * You can proxy requests to the Novem API for local development. If an API
 * proxy URL is specified, requests to the configured API URL will be proxied to
 * avoid CORS issues.
 *
 * Note the following caveats:
 *
 * * The configured API URL must be a URL path and not a full URL (e.g. `/api`
 *   and not `http://localhost:3000/api`).
 * * The configured URL path is not included in the proxied request.
 *
 *   For example, if `apiUrl` is set to `/api` and `apiProxyUrl` is set to
 *   http://localhost:3000, the request will be proxied to
 *   http://localhost:3000, not http://localhost:3000/api.
 *
 *   To keep the `/api` in the proxied request, include it in `apiProxyUrl`:
 *   http://localhost:3000/api.
 */
exports.apiProxyUrl = process.env.NOVEM_API_PROXY_URL;

/**
 * Port on which the application's HTTP server will listen to.
 */
exports.port = process.env.NOVEM_PORT || process.env.PORT || 8080;