import NotificationModel from "@/models/NotificationModel";

export default class State {
  token = "";
  cookiesStatus = false;
  notifications: Array<NotificationModel> = [];
}
