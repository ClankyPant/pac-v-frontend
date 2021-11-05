<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          
        >
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      
    <v-tabs v-model="tab" background-color="primary" dark>
      <v-tab v-for="item in items" :key="item.tab">
        {{ item.tab }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab">
        <v-card flat>
          <v-card-text>
            <component v-bind:is="item.content"></component>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

    <v-card-actions class="card-actions">
        <v-spacer></v-spacer>
        <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
        >
            Fechar
        </v-btn>
        <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
        >
            Salvar
        </v-btn>
    </v-card-actions>

    </v-dialog>
  </v-row>
</template>


<script>
  import Login from "./Login";
  import Registration from "./Registration";
  export default {
    components: { Login, Registration },
    data: () => ({
      dialog: false,
      tab: null,
      items: [
        { tab: 'Login', content: 'Login' },
        { tab: 'Cadastro', content: 'Registration' }
      ]
    }),
  }
</script>


<style>
.card-actions{
  background-color: #fff;
}
</style>