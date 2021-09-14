<template>
  <div>
    <Button />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "../components/Button.vue";

export default Vue.extend({
  name: "Home",

  components: {
    Button,
  },
});
</script>
