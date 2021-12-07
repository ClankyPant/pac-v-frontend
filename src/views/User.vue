<template>
  <v-dialog persistent width="50%" v-model="showPopUp">
    <template v-slot:activator="{ on, attrs }">
      <div v-if="isLogado() == false">
        <v-btn color="primary" class="elevation-0" v-bind="attrs" v-on="on">
          Login
        </v-btn>
      </div>
      <div v-else>
        <v-btn color="primary" class="elevation-0" >
          Minha Conta
        </v-btn>
      </div>
    </template>

    <v-card>
      <v-tabs v-model="actualTab">
        <v-tab v-for="tab in listOfTab" :key="tab">
          {{ tab }}
        </v-tab>
        <v-tab-item>
          <UserLoginComponent v-on:sucesso="showPopUp = false"
        /></v-tab-item>
        <v-tab-item> UserRegisterComponent </v-tab-item>
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
import { Vue, Component, PropSync } from "vue-property-decorator";
import UserLoginComponent from "@/components/user/UserLoginComponent.vue";

@Component({ components: { UserLoginComponent } })
export default class UserView extends Vue {
  @PropSync("user", { type: String })
  computedUser = "";

  actualTab = null;

  listOfTab = ["Logar", "Registrar - se"];

  showPopUp = false;

  isLogado(): boolean {
    return this.$store.getters.token.length > 1;
  }
}
</script>
