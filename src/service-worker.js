/* eslint-disable no-undef */
import { clientsClaim } from "workbox-core";
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");
registerRoute(({ request, url }) => {
  if (request.mode !== "navigate") {
    return false;
  }

  if (url.pathname.startsWith("/_")) {
    return false;
  }

  if (url.pathname.match(fileExtensionRegexp)) {
    return false;
  }

  return true;
}, createHandlerBoundToURL(`${process.env.PUBLIC_URL}/index.html`));

registerRoute(
  ({ url }) =>
    url.pathname.endsWith(".webp") ||
    url.pathname.endsWith(".png") ||
    url.pathname.endsWith(".jpg") ||
    url.pathname.endsWith(".jpeg"),
  new StaleWhileRevalidate({
    cacheName: "images",
  })
);

registerRoute(
  /^https:\/\/fonts/,
  new StaleWhileRevalidate({
    cacheName: "fonts",
  })
);

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
