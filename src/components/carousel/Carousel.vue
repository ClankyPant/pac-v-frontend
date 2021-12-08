<template>
  <div class="carousel">
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CarouselComponent extends Vue {
  items = [
    {
      src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
    },
    {
      src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
    },
    {
      src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
    },
    {
      src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    },
  ];
}
</script>

<style>
.carousel {
  margin-top: 50px;
}

.v-application p {
  margin-bottom: 16px;
}

.category-menu {
  margin: 0;
}
</style>
