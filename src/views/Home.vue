<template>
  <div class="body-content">
    <Carousel />
    <PopUp />
    <ItemFilterComponent />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Footer from "@/components/footer/Footer.vue";
import Carousel from "@/components/carousel/Carousel.vue";
import ItemFilterComponent from "@/components/Items/ItemCardFilterComponent.vue";
import PopUp from "@/components/modals/PopUp.vue";

export default Vue.extend({
  name: "Home",

  components: {
    Footer,
    Carousel,
    ItemFilterComponent,
    PopUp,
  },
});
</script>

<style>
.body-content {
  background-color: #f6f6f6;
}
</style>
