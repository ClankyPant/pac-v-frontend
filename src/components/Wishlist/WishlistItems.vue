<template>
    <div>
      <v-container>
        <div class="divider">
            <Divider />
        </div>
        <div>
            <h2 class="department">Carrinho</h2>
        </div>
      </v-container>
      <div class="checkout">
        <Checkout />
      </div>
    </div>
</template>

<script>
import Divider from '../divider/Divider.vue'
import Checkout from './Checkout.vue'
export default {
  name:'WishListItems',
  components: { Divider, Checkout },
}
</script>

<style>
.department {
  color: #ff9800;
}

.checkout {
  max-width: 1500px;
  margin: 0 auto;
  padding-bottom: 50px;
}
</style>