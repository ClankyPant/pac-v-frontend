<template>
  <div>
    <h2 class="d-flex justify-center my-10">Cadastro</h2>
    <v-card flat>
      <v-row justify="center">
        <v-col cols="5">
          <v-text-field
            v-model="userModel.login"
            outlined
            dense
            label="Login"
          ></v-text-field>
        </v-col>
        <v-col cols="5">
          <v-text-field
            v-model="userModel.password"
            outlined
            dense
            type="password"
            label="Senha"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="5">
          <v-text-field
            v-model="userModel.nome"
            outlined
            dense
            label="Nome completo"
          ></v-text-field>
        </v-col>
        <v-col cols="5">
          <v-text-field
            v-model="userModel.email"
            outlined
            dense
            type="email"
            label="Email"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="3">
          <v-text-field
            v-model="userModel.endCep"
            outlined
            dense
            label="CEP"
          ></v-text-field>
        </v-col>
        <v-col cols="5">
          <v-text-field
            v-model="userModel.endereco"
            outlined
            dense
            label="Rua"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field
            v-model="userModel.endNumero"
            outlined
            dense
            type="number"
            label="N°"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="5">
          <v-text-field
            v-model="userModel.endComplemento"
            outlined
            dense
            label="Complemento"
          ></v-text-field>
        </v-col>
        <v-col cols="5">
          <v-text-field
            v-model="userModel.endCidade"
            outlined
            dense
            label="Cidade"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center"> </v-row>
      <v-row justify="center" class="mt-0">
        <v-col cols="7">
          <v-btn width="100%" color="primary" @click="cadastrarUsuario()">
            Registra - se
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import userService from "@/services/usuario.service";
import UserModel from "@/models/UsuarioModel";
import { HttpStatusEnum } from "@/enums/HttpStatus";
import ResponseRequestModel from "@/models/services/ResponseRequestModel";

@Component({})
export default class UserRegistrationComponent extends Vue {
  userService = new userService();
  userModel = new UserModel();

  async cadastrarUsuario(): Promise<void> {
    let loading = this.$loading.show();
    let result = {} as ResponseRequestModel<unknown>;

    try {
      result = await this.userService.cadastrar(this.userModel);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(async (): Promise<void> => {
        loading.hide();
        if (result.status != HttpStatusEnum.CREATED) {
          let errorMessage = "Algo deu errado, tente novamente!";

          if (result.message != null && result.message.length > 0) {
            errorMessage = result.message;
          }

          this.$notify.error(errorMessage);
        } else {
          let resultToken = await this.userService.login(this.userModel);
          this.$store.commit("setToken", resultToken.token);

          this.$notify.success(result.message);
          this.$emit("success");
        }
      }, 1000);
    }
  }
}
</script>
