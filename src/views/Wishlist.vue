<template>
  <div class="body-content">
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

<style>
.body-content {
  background-color: #f6f6f6;
}
</style>
