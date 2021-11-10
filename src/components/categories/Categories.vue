<template>
    <v-container>
        <v-row>
            <v-col
                v-for="n in 4"
                :key="n"
                cols="6"
            >
                <v-card
                class="pa-10"
                outlined
                tile
                >
                .col-6
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  name: "Items"
};
</script>