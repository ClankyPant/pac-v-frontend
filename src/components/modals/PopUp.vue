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

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PopUpComponent extends Vue {
  dialog: boolean = this.$store.getters.cookiesStatus == false;

  accept(): void {
    this.$store.commit("setCookies");
    this.dialog = false;
  }
}
</script>

<style>
.dialog-cookie {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
