<template>
  <v-container>
    <div>
        <Divider />
        <div>
            <h2 class="department">PRODUTOS</h2>
        </div>
    </div>
    <div class="products">
      <v-layout row wrap>
        <template v-for="(product, index) in products">
          <v-flex xs4 pa-2 :key="index">
            <v-hover>
              <v-card slot-scope="{hover}" class="mx-auto" color="gray lighten-4" max-width="600" height="500">
                <v-img :src="product.src" :aspect-ratio="16/9">
                  <v-expand-transition>
                    <div v-if="hover" class="d-flex transition-fast-in-fast-out orange draken-2 display-3 v-card--reveal display3 black--text" style="height: 100%;">
                      ${{product.price}}
                    </div>
                  </v-expand-transition>
                </v-img>

                <v-card-text class="pt-2" style="position: relative;">
                  <v-btn absolute color="orange" class="white--text" fab medium right top>
                    <v-icon x-large>mdi-cart</v-icon>
                  </v-btn>

                  <div class="font-weight-light grey--text title mb-2">{{product.category}}</div>
                  <h3 class="display-1 font-weight-light orange--text mb-2">{{product.title}}</h3>

                  <div class="font-weight-light mb-2">{{product.description}}</div>
                </v-card-text>
                
              </v-card>
            </v-hover>
          </v-flex>
        </template>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
import Divider from '../divider/Divider.vue'
  export default {
  components: { Divider },
    data: () => ({
      products: [{
        price: 14.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'For the perfect meal',
        title: 'QW cooking utensils',
        description: 'Our vintage kitchen utenils delight any chef. Made of bamboo by hand'
      },{
        price: 24.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'For the perfect meal',
        title: 'QW cooking utensils',
        description: 'Our vintage kitchen utenils delight any chef. Made of bamboo by hand'
      },{
        price: 34.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'For the perfect meal',
        title: 'QW cooking utensils',
        description: 'Our vintage kitchen utenils delight any chef. Made of bamboo by hand'
      },{
        price: 44.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'For the perfect meal',
        title: 'QW cooking utensils',
        description: 'Our vintage kitchen utenils delight any chef. Made of bamboo by hand'
      },{
        price: 54.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'For the perfect meal',
        title: 'QW cooking utensils',
        description: 'Our vintage kitchen utenils delight any chef. Made of bamboo by hand'
      },{
        price: 64.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'For the perfect meal',
        title: 'QW cooking utensils',
        description: 'Our vintage kitchen utenils delight any chef. Made of bamboo by hand'
      }]
    })
  }
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%; 
}
.v-card h3.display-1 {
  font-size: 24px !important;
}
.department {
  color: #ff9800;
}

.department-content,
.products {
  margin: 50px 0;
}
</style>