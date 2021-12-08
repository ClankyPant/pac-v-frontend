<template>
  <v-card class="mx-auto" max-width="1500">
    <v-row>
      <v-col sm="5" md="6">
        <template>
          <v-card class="mx-auto" max-width="800">
            <v-list two-line>
              <v-list-item-group
                v-model="selected"
                active-class="pink--text"
                multiple
              >
                <template v-for="(item, index) in items">
                  <v-list-item :key="item.title">
                    <template v-slot:default="{ active }">
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.title"
                        ></v-list-item-title>

                        <v-img
                          v-bind:lazy-src="item.src"
                          v-bind:src="item.src"
                          max-width="150"
                        ></v-img>

                        <v-list-item-subtitle
                          v-text="item.subtitle"
                        ></v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-icon v-if="!active" color="grey lighten-1">
                          mdi-delete-outline
                        </v-icon>

                        <v-icon v-else color="yellow darken-3">
                          mdi-delete
                        </v-icon>
                        <v-text-field
                          v-model="blue"
                          class="mt-0 pt-0"
                          type="number"
                          style="width: 60px"
                          :key="index"
                        ></v-text-field>
                      </v-list-item-action>
                    </template>
                  </v-list-item>

                  <v-divider
                    v-if="index < items.length - 1"
                    :key="index"
                  ></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CheckoutComponent extends Vue {
  selected: Array<number> = [];
  items = [
    {
      action: "15 min",
      headline: "Brunch this weekend?",
      subtitle: `Esta é Yara, um paraíso tropical congelado no tempo. Far Cry 6 leva os jogadores a um mundo cheio de adrenalina durante uma revolução de guerrilha moderna.`,
      title: "Far Cry 6",
      src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
    },
    {
      action: "2 hr",
      headline: "Summer BBQ",
      subtitle: `Vivencie o horror de sobrevivência como nunca na 8ª grande série da franquia Resident Evil - Resident Evil Village.`,
      title: "Resident Evil Village",
      src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
    },
    {
      action: "6 hr",
      headline: "Oui oui",
      subtitle:
        "Battlefield™ 2042 é um jogo de tiro em primeira pessoa que marca o retorno à emblemática guerra total da franquia. Em um mundo num futuro próximo, transformado ...",
      title: "Battlefield 2042",
      src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
    },
    {
      action: "12 hr",
      headline: "Birthday gift",
      subtitle:
        "Sua maior aventura Horizon te espera! Lidere impressionantes expedições pelo mundo aberto vibrante e em constante evolução nas terras mexicanas.",
      title: "Forza Horizon 5",
      src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
    },
    {
      action: "18hr",
      headline: "Recipe to try",
      subtitle:
        "A nova aventura de Kratos e Atreus, ambientada anos após o título de 2018, é uma tragédia premeditada.",
      title: "God of War: Ragnarök",
      src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
    },
  ];
}
</script>
