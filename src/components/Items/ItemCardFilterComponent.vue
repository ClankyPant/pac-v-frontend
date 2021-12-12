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
            <ItemCardComponent v-if="showItem(item)" :item="item" />
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

import ItemModel from "@/models/ItemModel";
import { ItemCategoryEnum } from "@/enums/ItemCategoryEnum";

@Component({ components: { Divider, ItemCardComponent } })
export default class ItemCardFilterComponent extends Vue {
  categoryToFilter: number = this.$store.getters.productCategoryFilter;

  items: Array<ItemModel> = [
    new ItemModel(
      1,
      "PlayStation",
      "VideoGame da Sony muito popular",
      2000.5,
      ItemCategoryEnum.CONSOLE
    ),
    new ItemModel(
      2,
      "Xbox",
      "VideoGame da Microsoft muito popular",
      1000.5,
      ItemCategoryEnum.CONSOLE
    ),
    new ItemModel(
      3,
      "Wii",
      "VideoGame da Nintendo muito popular",
      1000.5,
      ItemCategoryEnum.CONSOLE
    ),
    new ItemModel(
      3,
      "GTA V",
      "Jogo para console",
      1000.5,
      ItemCategoryEnum.JOGOS
    ),
  ];

  showItem(item: ItemModel): boolean {
    if (
      item.category == this.categoryToFilter ||
      this.categoryToFilter == ItemCategoryEnum.TODOS
    ) {
      return true;
    }

    return false;
  }
}
</script>
