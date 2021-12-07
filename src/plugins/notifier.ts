import NotificationModel from "@/models/NotificationModel";
import { VueConstructor } from "vue";
import { Store } from "vuex";

declare module "vue/types/vue" {
  interface Vue {
    readonly $notify: IPluginApi;
  }

  interface VueConstructor {
    readonly $notify: IPluginApi;
  }
}

export interface IPluginApi {
  info(text: string | unknown): void;
  notifications(): Array<NotificationModel>
}

const plugin = {
  install: (vue: VueConstructor, store: Store<unknown>): void => {
    if (!store) {
      throw new Error("Please configure the Vuex!");
    }

    const vueInstance = vue;
    vueInstance.prototype.$notify = {
      info: (text: string) => {
        store.commit("addNotification", new NotificationModel(text));
      },
      notifications: (): Array<NotificationModel> =>
        store.getters.notifications,
    };
  },
};

export default plugin;
