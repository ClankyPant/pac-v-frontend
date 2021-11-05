<template>
    <div>
      <v-app-bar app dark dense color="primary" min-height="200" > 
        <div class="d-flex justify-space-between  align-center full-width">
          <div>
              <a href="#">
                <v-img
                  lazy-src="../../static/raccon-games-logo.png"
                  max-height="150"
                  max-width="250"
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
          <div>
            <v-btn icon class="mx-5" @click="showWishlistModal">
              <v-icon>mdi-purse</v-icon>
            </v-btn>
            <v-flex>
              <User />
            </v-flex>
          </div>
        </div>
      <div class="items-menu">
        <div class="category-menu">
          <a href="#"><p>Todos os produtos</p></a>
        </div>
        <div class="category-menu">
          <a href="#"><p>Console</p></a>
        </div>
        <div class="category-menu">
          <a href="#"><p>Jogos</p></a>
        </div>
        <div class="category-menu">
          <a href="#"><p>Acessórios</p></a>
        </div>
        <div class="category-menu">
          <a href="#"><p>Decoração</p></a>
        </div>
      </div>
      </v-app-bar>
    </div>
</template>

<script>
import User from "../modals/User";
// import Wishlist from "../modals/Wishlist";

export default {
  components: { User },

  data: () => ({
    items:[
      { icone: "mdi-purse", title: "Carrinho"},
      { icone: "mdi-account", title: "Usuário"}
    ]
  }),

  methods: {
    showLoginModal () {
      console.log("deu boa Login")
    },

    showWishlistModal () {
      console.log("deu boa Wishlist")
    }


  }
};
</script>

<style scoped>
* {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.title {
  background: url('../../static/raccon-games-logo.png') no-repeat;
  /* background-position: 50% 50%;
  background-size: 165px;
  width: 275px;
  height: 65px; */
}

.full-width {
  width: 100vw;
}

.half-width {
  width: 45vw;
}

.items-menu {
  background-color: #bdc1ca;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.category-menu p {
  color: #000;
  font-weight: bold;
}

.category-menu p:hover {
  color: #3b3b3b;
}
</style>
