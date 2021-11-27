import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    token: "",
    cookiesStatus: false,
  },
  mutations: {
    setCookies(state) {
      localStorage.setItem("cookiesStatus", "true");
      state.cookiesStatus = true;
    },
    initialiseStore(state) {
      if (localStorage.getItem("cookiesStatus")) {
        state.cookiesStatus = true;
      }
    },
  },
});

new Vue({
  router,
  vuetify,
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
  store: store,
  render: (h) => h(App),
}).$mount("#app");
