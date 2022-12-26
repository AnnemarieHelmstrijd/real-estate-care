import { createApp } from "vue";
import App from "./App.vue";
import createStore from "./store";
import router from './router';

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

createApp(App).use(router).use(store).use(vuetify).mount("#app");
