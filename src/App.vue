<template>
  <v-app>
    <RacconHeader />

    <v-main>
      <router-view />
      <NotificationComponent />
      <PopUpComponent />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import RacconHeader from "@/components/header/Header.vue";
import NotificationComponent from "@/components/notification/NotificationComponent.vue";
import PopUpComponent from "@/components/modals/PopUp.vue";

export default Vue.extend({
  name: "App",

  components: {
    RacconHeader,
    NotificationComponent,
    PopUpComponent,
  },
  data: () => ({
    //
  }),
});
</script>

<style>
.v-toolbar__content {
  margin-top: 30px;
}
</style>
