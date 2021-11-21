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
              v-for="redeSocial in redesSociais"
              :key="redeSocial"
              class="mx-4"
              dark
              icon
              @click="redirectPage(redeSocial.link)"
            >
              <v-icon size="24px">
                {{ redeSocial.icon }}
              </v-icon>
            </v-btn>

            <v-card-text class="white--text text-left">
              © {{ new Date().getFullYear() }} | <strong>Raccon Games | Todos os direitos reservados.</strong>
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
              <a href="/"><strong>Contato</strong></a><strong>  |  <a href="/">Sobre</a></strong>
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
    redesSociais: [
      {
      icon: 'mdi-facebook',
      link: 'https://www.facebook.com/'
      },
      {
      icon: 'mdi-instagram',
      link: 'https://www.instagram.com',
      },
      {
      icon: 'mdi-linkedin',
      link: 'https://br.linkedin.com',
      },
      {
      icon: 'mdi-twitter',
      link: 'https://twitter.com/'
      },
    ]
  }),
  methods: {
    redirectPage (link) {
      window.location.href = link;
    }

  }
};
</script>

<style>
.row {
  margin: 0;
}

.v-application a {
    color: #fff !important;
  text-decoration: none;
}
</style>