import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "@/store/store";
import vuetify from "./plugins/vuetify";
import notifier from "@/plugins/notifier";

Vue.use(notifier, store);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  beforeCreate() {
    this.$store.commit("initStorage");
  },
  render: (h) => h(App),
}).$mount("#app");
