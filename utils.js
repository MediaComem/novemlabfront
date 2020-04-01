const debug = require('debug')('front-novemlab:utils');
const proxy = require('express-http-proxy');

const { apiUrl, apiProxyUrl } = require('./config');

/**
 * Optionally adds a proxy to the Novem API to the application. This is done
 * only if a proxy URL is explicitly configured.
 */
exports.configureApiProxy = function(app) {
  if (!apiProxyUrl) {
    // Do not set up a proxy if not explicitly configured.
    return;
  } else if (!apiUrl.match(/^\/[^/]/)) {
    // Require the API URL to be only a path with a leading slash, and not a
    // full URL.
    throw new Error(`To enable proxying with $NOVEM_API_PROXY_URL, the API URL configured with $NOVEM_API_URL (currently "${apiUrl}") must be a path, not a full URL`);
  }

  // Get the proxy URL's path.
  const apiBasePath = new URL(apiProxyUrl).pathname;

  // Get the proxy URL without the path, query or hash.
  const apiProxyUrlBase = new URL(apiProxyUrl);
  apiProxyUrlBase.hash = '';
  apiProxyUrlBase.search = '';
  apiProxyUrlBase.pathname = '';

  // Set up the proxy.
  app.use(apiUrl, proxy(apiProxyUrlBase.toString(), {
    // Keep the configured path.
    proxyReqPathResolver: req => `${apiBasePath}/${req.url}`
  }));

  debug(`Proxying ${apiUrl} to ${apiProxyUrlBase.toString()} with API base path ${apiBasePath}`);
};

/**
 * Creates an object of local variables to render a view, with the following
 * variables included by default:
 *
 * * `apiUrl` - The URL to the Novem API (injected into a `meta` tag in the
 *   default layout).
 */
exports.getLocals = function(extraLocals) {
  return {
    apiUrl,
    ...extraLocals
  };
};
