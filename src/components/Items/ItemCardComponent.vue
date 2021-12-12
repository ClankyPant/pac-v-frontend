<template>
  <v-card>
    <v-card-title>
      {{ item.titulo }}
    </v-card-title>
    <v-card-text>
      <v-img :src="item.base64"></v-img>
    </v-card-text>
    <v-card-text>
      <h2>Descrição</h2>
    </v-card-text>
    <v-card-text>
      {{ item.descricao }}
    </v-card-text>
    <v-card-text>
      <h2>R$ {{ item.preco }}</h2>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="secondary" @click="adicionarCarrinho()">
        <v-icon class="mr-2">mdi-cart</v-icon>
        <span>Adicionar</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import ItemModel from "@/models/ItemModel";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class ItemCardComponent extends Vue {
  @Prop()
  item!: ItemModel;

  adicionarCarrinho(): void {
    if (this.$store.getters.logado == false) {
      this.$notify.error(
        "Você precisa estar logado para adicionar um item ao carrinho!"
      );
    } else {
      console.log("");
    }
  }
}
</script>
