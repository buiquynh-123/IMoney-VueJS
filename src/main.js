import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import "./assets/style/tailwind.css";
import "./assets/style/global.css";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { createPinia } from "pinia";
import { registerGlobalComponents } from "./utils/import";

library.add(fas, fab, far);
const pinia = createPinia();

const app = createApp(App);
registerGlobalComponents(app);
app.use(router);
app.use(store);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(VueSweetalert2);
app.use(pinia);
app.mount("#app");
