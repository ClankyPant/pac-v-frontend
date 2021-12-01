<template>
    <v-container>
        <div>
            <Divider />
            <div>
                <h2 class="departments">DEPARTAMENTOS</h2>
            </div>
        </div>
        <div class="departments-content">
            <v-row
        >
            <v-col
                v-for="department in departments"
                :key="department"
                cols="6"
            >
                    <div class="legend-content">
                        <span class="legend-department" />
                        <p>{{department.type}}</p>
                    </div>
                <v-card
                outlined
                style="border: 5px solid #ff9800; border-radius: 80px; cursor: pointer"
                >
                    <v-img
                    v-bind:lazy-src=department.src
                    v-bind:src=department.src
                    ></v-img>
                </v-card>
            </v-col>
        </v-row>
        </div>
    </v-container>
</template>

<script>
import Divider from '../divider/Divider.vue';
export default {
  components: { Divider },
  name: "Categories",
  data: () => ({
    departments: [{
        type: "Console",
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
    },
    {
        type: "Acessórios",
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
    },
    {
        type: "Games",
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
    },
    {
        type: "Funkos",
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
    }]
  })
};
</script>

<style>
.departments {
    color: #ff9800;
}

.departments-content {
    margin: 25px 0;
}

.legend-content {
    display: flex;
    margin: 25px 0;
}

.legend-department {
    width: 20px;
    height: 20px;
    background-color: #ff9800;
    margin-right: 10px;
    margin-bottom: 0;
}

</style>