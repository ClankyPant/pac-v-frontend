<template>
    <v-container>
        <div class="divider">
            <Divider />
        </div>
            <div>
                <h2 class="department">Carrinho</h2>
            </div>
    </v-container>
</template>

<script>
import Divider from '../divider/Divider.vue'
export default {
  components: { Divider },
}
</script>

<style>
.department {
  color: #ff9800;
}
</style>