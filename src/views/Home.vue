<template>
  <div>
    <carousel />
    <items />
    <raccon-footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Items from "@/components/Items/Items.vue";
import RacconFooter from "@/components/footer/Footer.vue";
import Carousel from "@/components/carousel/Carousel.vue";

export default Vue.extend({
  name: "Home",

  components: {
    RacconFooter,
    Carousel,
    Items,
  },
});
</script>
