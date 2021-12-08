import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "@/store/store";
import vuetify from "./plugins/vuetify";
import notifier from "@/plugins/notifier";
import "vue-loading-overlay/dist/vue-loading.css";
import LoaderPlugin from "vue-loading-overlay";

Vue.use(LoaderPlugin, {
  color: "#142245",
});

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
