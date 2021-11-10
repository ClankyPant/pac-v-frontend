<template>
  <div>
    <carousel />
    <Items />
    <raccon-footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RacconFooter from "@/components/footer/Footer.vue";
import Carousel from "@/components/carousel/Carousel.vue";
import Items from "@/components/Items/Items.vue";

export default Vue.extend({
  name: "Products",

  components: {
    RacconFooter,
    Carousel,
    Items,
  },
});
</script>
