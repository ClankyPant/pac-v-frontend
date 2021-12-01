<template>
  <v-dialog persistent width="50%" v-model="showPopUp">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" class="elevation-0" v-bind="attrs" v-on="on">
        Minha Conta
      </v-btn>
    </template>

    <v-card>
      <v-tabs v-model="actualTab">
        <v-tab v-for="tab in listOfTab" :key="tab">
          {{ tab }}
        </v-tab>
        <v-tab-item> <UserLoginComponent /></v-tab-item>
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
}
</script>
