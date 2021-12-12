import ItemModel from "@/models/ItemModel";
import BaseService from "@/services/base.service";

export default class ItemService extends BaseService {
  async getAll(): Promise<Array<ItemModel>> {
    return (await this.get(
      ItemModel,
      "http://localhost:8082/pac-v-backend/item/getAll"
    )) as Array<ItemModel>;
  }
}
