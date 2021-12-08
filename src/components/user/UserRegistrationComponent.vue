<template>
  <div>
    <h2 class="d-flex justify-center my-10">Cadastro</h2>
    <v-card flat>
        <v-row>
          <v-text-field v-model="userModel.login" outlined dense label="Login"></v-text-field>
        </v-row>
      <v-row justify="center" class="mt-0">
        <v-col cols="7">
          <v-btn width="100%" color="primary" @click="logar()">
            Logar
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import UserSerivce from "@/services/usuario.service";
import UserModel from '@/models/UsuarioModel';

@Component({})
export default class UserRegistrationComponent extends Vue {
  userSerivce = new UserSerivce();
  userModel = new UserModel();

}
</script>
