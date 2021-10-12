<template>
  <v-card>
    <v-toolbar
      color="#142245"
      dark
      flat
      height="180px"
    >
      <v-toolbar-title>RACCON GAMES</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-layout style="max-width: 30vw; min-width:1vw;">
        <v-text-field
          placeholder="Pesquisar..."
          single-line
          background-color="#142245"
          color="white"
          hide-details
        ></v-text-field>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-layout>

      <v-btn icon>
        <!-- <v-card-text>Carrinho</v-card-text> -->
        <v-icon size="50px">mdi-purse</v-icon>
      </v-btn>

      <v-btn icon>
        <!-- <v-card-text>Minha conta</v-card-text> -->
        <v-icon size="50px">mdi-account</v-icon>
      </v-btn>

    </v-toolbar>
  </v-card>
</template>

<script>
  export default {
  }
</script>