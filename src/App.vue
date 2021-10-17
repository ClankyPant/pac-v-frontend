<template>
  <v-app>
    <raccon-header />
    
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import RacconHeader from "@/components/header/Header.vue";

export default Vue.extend({
  name: "App",

  components: {
    RacconHeader,
  },
  data: () => ({
    //
  }),
});
</script>
