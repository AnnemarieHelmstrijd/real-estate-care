import { createApp } from "vue";
import App from "./App.vue";
import createStore from "./store/index.js";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "@mdi/font/css/materialdesignicons.css";

let vuetify = createVuetify({
  components,
  directives,
});

let store = createStore;

createApp(App).use(store).use(vuetify).mount("#app");
