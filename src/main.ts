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
  },
  mutations: {
    changeToken(state, token) {
      state.token = token;
    },
  },
});

new Vue({
  router,
  vuetify,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
