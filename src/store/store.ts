import NotificationModel from "@/models/NotificationModel";
import Vue from "vue";
import Vuex from "vuex";
import State from "@/models/store/StateModel";

Vue.use(Vuex);

export default new Vuex.Store({
  state: new State(),
  mutations: {
    setCookies(state: State) {
      localStorage.setItem("cookiesStatus", "true");
      state.cookiesStatus = true;
    },
    initStorage(state: State) {
      if (localStorage.getItem("cookiesStatus")) {
        state.cookiesStatus = true;
      }
    },
    addNotification(state: State, notficationToAdd: NotificationModel) {
      state.notifications = [...state.notifications, notficationToAdd];
    },
    setToken(state: State, token: string) {
      state.token = token;
    },
  },
  getters: {
    cookiesStatus(state: State) {
      return state.cookiesStatus;
    },
    notifications(state: State) {
      return state.notifications;
    },
  },
});
