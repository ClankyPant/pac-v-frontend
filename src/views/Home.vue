<template>
  <div class="body-content">
    <Carousel />
    <ItemFilterComponent />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Footer from "@/components/footer/Footer.vue";
import Carousel from "@/components/carousel/Carousel.vue";
import ItemFilterComponent from "@/components/Items/ItemCardFilterComponent.vue";

export default Vue.extend({
  name: "Home",

  components: {
    Footer,
    Carousel,
    ItemFilterComponent
  },
});
</script>

<style>
.body-content {
  background-color: #f6f6f6;
}
</style>
