<template>
  <div>
    <h2 class="d-flex justify-center my-10">Minha Conta</h2>
    <v-card flat>
      <v-row justify="center">
        <v-col cols="6">
          <v-text-field
            v-model="usuarioModel.login"
            outlined
            dense
            label="Login"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <v-text-field
            v-model="usuarioModel.password"
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
import UserService from "@/services/usuario.service";
import UsuarioModel from "@/models/UsuarioModel";

@Component({})
export default class UserLoginComponent extends Vue {
  userService = new UserService();

  usuarioModel = new UsuarioModel();

  async logar(): Promise<void> {
    let loader = this.$loading.show();

    try {
      let result = await this.userService.login(this.usuarioModel);

      this.$store.commit("setToken", result.token);
      this.$notify.success("Logado com sucesso!");
      this.$emit("success");
    } catch (error) {
      this.$notify.error("Erro ao logar. Tente novamente!");
    } finally {
      loader.hide();
    }
  }
}
</script>
