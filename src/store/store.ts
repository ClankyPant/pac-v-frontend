import NotificationModel from "@/models/NotificationModel";
import Vue from "vue";
import Vuex from "vuex";
import State from "@/models/store/StateModel";
import { ItemCategoryEnum } from "@/enums/ItemCategoryEnum";

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

      if (localStorage.getItem("productCategoryFilter")) {
        state.productCategoryFilter = Number(
          localStorage.getItem("productCategoryFilter")
        );
      }

      if (localStorage.getItem("token")) {
        state.token = localStorage.getItem("token") || "";
      }
    },
    addNotification(state: State, notficationToAdd: NotificationModel) {
      state.notifications = [...state.notifications, notficationToAdd];
    },
    setToken(state: State, token: string) {
      localStorage.setItem("token", token);
      state.token = token;
    },
    setProductCategoryFilter(state: State, category: number): void {
      localStorage.setItem("productCategoryFilter", category?.toString());
      state.productCategoryFilter = category;
    },
  },
  getters: {
    productCategoryFilter(state: State): number {
      let result: number = ItemCategoryEnum.TODOS;

      if (state.productCategoryFilter != null) {
        result = state.productCategoryFilter;
      }

      return result;
    },
    logado(state: State): boolean {
      return state.token != null && state.token.length > 0;
    },
    cookiesStatus(state: State): boolean {
      return state.cookiesStatus;
    },
    notifications(state: State): Array<NotificationModel> {
      return state.notifications;
    },
    token(state: State): string {
      return state.token;
    },
  },
});
