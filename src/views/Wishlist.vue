<template>
  <div>
    <carousel />
    <raccon-footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RacconFooter from "@/components/footer/Footer.vue";
import Carousel from "@/components/carousel/Carousel.vue";

export default Vue.extend({
  name: "Wishlist",

  components: {
    RacconFooter,
    Carousel,
  },
});
</script>
