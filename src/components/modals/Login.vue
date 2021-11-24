<template>
    <div>
        <v-card-title>
        <span class="text-h5">Login</span>
        </v-card-title>
        <v-card-text>
        <v-container>
            <v-row>
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
            </v-row>
        </v-container>
            <small>* Campos obrigatórios</small>
        </v-card-text>

    </div>
</template>

<script>
export default {

}
</script>