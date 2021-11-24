<template>
    <div>
        <v-card-title>
          <span class="text-h5">Cadastro</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Nome completo*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="CPF*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Senha*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Confirmar Senha*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="CEP*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Telefone*"
                  required
                ></v-text-field>
              </v-col>
              
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Cidade*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Estado*"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                sm="8"
                md="8"
              >
                <v-text-field
                  label="Rua*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="4"
                md="4"
              >
                <v-text-field
                  label="Número*"
                  required
                ></v-text-field>
              </v-col>

            </v-row>
          </v-container>
          <small>* Campos obrigatórios</small>
        </v-card-text>
    </div>
</template>

<script>
export default {
    data: () => ({
        validarCPF:[]
    }),
}
</script>


