<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
      color="#142245"
    >
      <v-row>
        <v-col md="4">
          <v-card
            class="pa-2"
            outlined
            tile
            color="#142245"
          >
            <v-card-text class="white--text text-left" style="font-size: 18px">
              <strong>RACCON GAMES</strong>
            </v-card-text>

            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              dark
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>

            <v-card-text class="white--text text-left">
              {{ new Date().getFullYear() }} | <strong>Raccon Games | Todos os direitos reservados.</strong>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          md="4"
          class="ml-auto"
        >
          <v-card
            class="pa-2"
            outlined
            tile
            color="#142245"
          >
            <v-card-text class="white--text text-right">
              <strong>Contato | Sobre</strong>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
        
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-instagram',
      'mdi-linkedin',
      'mdi-twitter',
    ],
  }),
};
</script>