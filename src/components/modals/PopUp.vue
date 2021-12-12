<template>
  <v-row justify="center">
    <v-dialog dark persistent v-model="dialog" max-width="690">
      <v-card>
        <v-card-title class="text-h5">
          Atenção!
        </v-card-title>
        <v-card-text>
          Esse site utiliza algumas informações para melhor experiencia de
          usuario.
        </v-card-text>
        <v-card-text>
          Ao continuar navegando você concorda com a política de
          <b>cookies</b> e <b>privacidade.</b>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="warning" text @click="openFolderLGPD()"
            >Saiba mais</v-btn
          >
          <v-btn color="warning" text @click="accept()">
            Concordar e Continuar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      persistent
      v-model="dialogLGPD"
      max-width="75vw"
      class="dialog-cookie"
    >
      <v-card height="95vh" flat>
        <v-img src="../../assets/info_lgpd.png">
          <v-btn color="warning" text @click="closeFolderLGPD()">
            X
          </v-btn>
        </v-img>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PopUpComponent extends Vue {
  dialog: boolean = this.$store.getters.cookiesStatus == false;
  dialogLGPD = false;

  accept(): void {
    this.$store.commit("setCookies");
    this.dialog = false;
  }

  openFolderLGPD(): void {
    this.dialogLGPD = true;
  }

  closeFolderLGPD(): void {
    this.dialogLGPD = false;
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
