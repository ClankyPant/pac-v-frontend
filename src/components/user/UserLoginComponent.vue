<template>
  <div>
    <h2 class="d-flex justify-center my-10">Minha Conta</h2>
    <v-card flat>
      <v-row justify="center">
        <v-col cols="6">
          <v-text-field v-model="login" outlined dense label="Login">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <v-text-field
            v-model="password"
            type="password"
            outlined
            dense
            label="Senha"
          >
          </v-text-field>
        </v-col>
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
import UsuarioModel from "@/models/UsuarioModel";

@Component({})
export default class UserLoginComponent extends Vue {
  userSerivce = new UserSerivce();

  login = "";
  password = "";

  async logar(): Promise<void> {
    try {
      let result = await this.userSerivce.login(
        new UsuarioModel(this.login, this.password)
      );

      this.$store.commit("setToken", result.token);
      this.$notify.info("Logado com sucesso!");
      this.$emit("sucesso");
    } catch (error) {
      this.$notify.info("Erro ao logar. Tente novamente!");
    }
  }
}
</script>
