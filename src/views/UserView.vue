<template>
  <v-dialog persistent width="50%" v-model="showPopUp">
    <template v-slot:activator="{ on, attrs }">
      <v-row v-if="isLogado()">
        <v-col cols="6">
          <v-btn color="primary" class="elevation-0">
            <v-icon class="mr-2"> mdi-account </v-icon>
            <span>Conta</span>
          </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn @click="logOut()" color="primary" class="elevation-0">
            <v-icon> mdi-logout </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-row>
          <v-col>
            <v-btn color="primary" class="elevation-0" v-bind="attrs" v-on="on">
              <v-icon class="mr-2"> mdi-account </v-icon>Login
            </v-btn>
          </v-col>
        </v-row>
      </v-row>
    </template>

    <v-card>
      <v-tabs v-model="actualTab">
        <v-tab v-for="(tab, index) in listOfTab" :key="index">
          {{ tab }}
        </v-tab>
        <v-tab-item>
          <UserLoginComponent v-on:success="showPopUp = false"
        /></v-tab-item>
        <v-tab-item>
          <UserRegistrationComponent v-on:success="showPopUp = false" />
        </v-tab-item>
      </v-tabs>

      <v-card-text class="d-flex justify-end"
        ><v-btn @click="showPopUp = false" color="primary"
          >FECHAR</v-btn
        ></v-card-text
      >
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import UserLoginComponent from "@/components/user/UserLoginComponent.vue";
import UserRegistrationComponent from "@/components/user/UserRegistrationComponent.vue";

@Component({ components: { UserLoginComponent, UserRegistrationComponent } })
export default class UserView extends Vue {
  actualTab = null;

  listOfTab = ["Logar", "Registrar - se"];

  showPopUp = false;

  isLogado(): boolean {
    return this.$store.getters.logado;
  }

  logOut(): void {
    let loader = this.$loading.show();

    setTimeout(() => {
      this.$store.commit("setToken", null);
      this.$notify.success("Deslogado com sucesso!");
      loader.hide();
    }, 500);
  }
}
</script>
