<template>
  <div>
    <raccon-header />
    <menu-tabs />
    <carousel />
    <items />
    <raccon-footer />
  </div>
</template>

<script lang="ts">
import RacconHeader from "@/components/header/Header.vue";
import RacconFooter from "@/components/footer/Footer.vue";
import Vue from "vue";
import Carousel from "@/components/carousel/Carousel.vue";
import MenuTabs from "@/components/header/MenuTabs.vue";
import Items from "@/components/Items/Items.vue";

export default Vue.extend({
  name: "Home",

  components: {
    RacconHeader, 
    RacconFooter, 
    Carousel, 
    MenuTabs,
    Items
    },
});
</script>


