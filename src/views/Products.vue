<template>
  <div class="body-content">
    <Carousel />
    <ItemFilterComponent />
    <RacconFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RacconFooter from "@/components/footer/Footer.vue";
import Carousel from "@/components/carousel/Carousel.vue";
import ItemFilterComponent from "@/components/Items/ItemCardFilterComponent.vue";

export default Vue.extend({
  name: "Products",

  components: {
    RacconFooter,
    Carousel,
    ItemFilterComponent,
  },
});
</script>

<style>
.body-content {
  background-color: #f6f6f6;
}
</style>
