<template>
  <v-app-bar app dark dense color="primary">
    <div class="d-flex justify-space-between  align-center full-width">
      <div>
        <v-app-bar-title>
          RACCON GAMES
        </v-app-bar-title>
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
        <v-btn icon class="mx-5">
          <v-icon>mdi-purse</v-icon>
        </v-btn>
        <v-btn icon class="mx-5">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </div>
    </div>
    <template #extension>
      <v-tabs align-with-title>
        <v-tab>Todos</v-tab>
        <v-tab>Consoles</v-tab>
        <v-tab>Jogos</v-tab>
        <v-tab>Acessórios</v-tab>
        <v-tab>Decoração</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {};
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

.full-width {
  width: 100vw;
}

.half-width {
  width: 45vw;
}
</style>
