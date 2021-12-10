export default class NotificationModel {
  active = true;
  text = "";
  color = "";

  constructor(text: string, color = "dark") {
    this.active = true;
    this.text = text;
    this.color = color;
  }
}
