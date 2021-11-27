<template>
  <v-row justify="center">
    <v-dialog persistent v-model="dialog" max-width="690" class="dialog-cookie">
      <v-card>
        <v-card-title class="text-h5">
          Atenção!
        </v-card-title>

        <v-card-text>
          Este site salva seu histórico de uso. Ao continuar navegando você
          concorda com a política de <b>cookies</b> e <b>privacidade.</b>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="orange" text @click="accept()">
            Concordar e Continuar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: this.$store.state.cookiesStatus == false,
    };
  },
  methods: {
    accept() {
      this.$store.commit("setCookies");
      this.dialog = false;
    },
  },
};
</script>

<style>
.dialog-cookie {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
