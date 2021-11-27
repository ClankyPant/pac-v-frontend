<template>
  <div class="body-content">
    <WishlistItems />
    <RacconFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RacconFooter from "@/components/footer/Footer.vue";
import WishlistItems from "@/components/wishlist/WishlistItems.vue";

export default Vue.extend({
  name: "Wishlist",

  components: {
    RacconFooter,
    WishlistItems,
  },
});
</script>

<style>
.body-content {
  background-color: #f6f6f6;
}
</style>
