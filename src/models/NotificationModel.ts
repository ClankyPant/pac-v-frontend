export default class NotificationModel {
  active = true;
  text = "";
  constructor(text: string) {
    this.active = true;
    this.text = text;
  }
}
