// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default {
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.scss"],
  ssr: true,
  serverMiddleware: [
    { path: "/api/download", handler: "~/api/download" }
  ],
};