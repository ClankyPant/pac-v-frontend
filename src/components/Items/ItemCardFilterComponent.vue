<template>
  <v-container>
    <v-container>
      <Divider />
    </v-container>
    <v-container>
      <h1>Produtos</h1>

      <v-container>
        <v-row justify="start">
          <v-col cols="4" v-for="(item, index) in items" :key="index">
            <ItemCardComponent :item="item" />
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Divider from "../divider/Divider.vue";
import ItemCardComponent from "@/components/Items/ItemCardComponent.vue";

import _ from "underscore";
import { ItemCategoryEnum } from "@/enums/ItemCategoryEnum";

import ItemModel from "@/models/ItemModel";
import ItemService from "@/services/item.service";

@Component({ components: { Divider, ItemCardComponent } })
export default class ItemCardFilterComponent extends Vue {
  categoryToFilter: number = this.$store.getters.productCategoryFilter;

  itemService = new ItemService();

  items: Array<ItemModel> = [];

  async created(): Promise<void> {
    let auxItems = await this.itemService.getAll();

    this.items = _.filter(
      auxItems,
      (item: ItemModel) =>
        item.categoria == this.categoryToFilter ||
        this.categoryToFilter == ItemCategoryEnum.TODOS
    );
  }
}
</script>
