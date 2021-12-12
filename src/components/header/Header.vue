<template>
  <div>
    <v-app-bar app dark dense color="primary" min-height="150">
      <div class="items-menu">
        <div class="category-menu">
          <a @click="changeFilter(itemCategoryObj.CONSOLE)">
            <p>Console</p>
          </a>
        </div>
        <div class="category-menu">
          <a @click="changeFilter(itemCategoryObj.JOGOS)">
            <p>Jogos</p>
          </a>
        </div>
        <div class="category-menu">
          <a @click="changeFilter(itemCategoryObj.ACESSORIOS)">
            <p>Acessórios</p>
          </a>
        </div>
        <div class="category-menu">
          <a @click="changeFilter(itemCategoryObj.DECORACAO)">
            <p>Decoração</p>
          </a>
        </div>
      </div>
      <div class="d-flex justify-space-between  align-center full-width">
        <div>
          <a href="/" @click="changeFilter(itemCategoryObj.TODOS)">
            <v-img
              lazy-src="../../static/raccon-games-logo.png"
              max-height="150"
              max-width="250"
              style="margin-left:10px"
              src="../../static/raccon-games-logo.png"
            ></v-img>
          </a>
        </div>
        <div class="half-width">
          <v-text-field
            dark
            dense
            outlined
            hide-details
            placeholder="Pesquisar..."
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </div>
        <div class="header-bottons">
          <v-row justify="space-around" class="bottons-item">
            <v-col cols="6">
              <v-btn
                color="primary"
                class="elevation-0"
                @click="wishlistPage()"
              >
                <v-icon class="mr-2">mdi-cart</v-icon>
                Carrinho
              </v-btn>
            </v-col>
            <v-col cols="6">
              <UserView />
            </v-col>
          </v-row>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import UserView from "@/views/UserView.vue";
import { Component, Vue } from "vue-property-decorator";
import { ItemCategoryEnum } from "@/enums/ItemCategoryEnum";

@Component({ components: { UserView } })
export default class HeaderComponent extends Vue {
  itemCategoryObj = {
    JOGOS: ItemCategoryEnum.JOGOS,
    CONSOLE: ItemCategoryEnum.CONSOLE,
    ACESSORIOS: ItemCategoryEnum.ACESSORIOS,
    DECORACAO: ItemCategoryEnum.DECORACAO,
    TODOS: ItemCategoryEnum.TODOS,
  };

  items = [
    { icone: "mdi-purse", title: "Carrinho" },
    { icone: "mdi-account", title: "Usuário" },
  ];

  wishlistPage(): void {
    window.location.href = "/carrinho";
  }

  changeFilter(categoryFilter: number): void {
    this.$store.commit("setProductCategoryFilter", categoryFilter);
    window.location.href = "/produtos";
  }
}
</script>

<style scoped>
* {
  user-select: none;
}

.v-menu__content {
  box-shadow: none;
}

.v-application p {
  margin-bottom: 0 !important;
  margin-right: 10px;
}

.title {
  background: url("../../static/raccon-games-logo.png") no-repeat;
}

.full-width {
  width: 100vw;
}

.half-width {
  width: 45vw;
}

.items-menu {
  background-color: #bdc1ca;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  margin-top: 141px;
  left: 0px;
}

.category-menu p {
  color: #000;
  font-weight: bold;
}

.category-menu p:hover {
  color: #3b3b3b;
}

.header-bottons {
  display: flex;
  margin: 10px;
  padding: 10px;
}

.bottons-item {
  margin: 12px;
}
</style>
