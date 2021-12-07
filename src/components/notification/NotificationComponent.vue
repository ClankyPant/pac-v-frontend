<template>
  <div>
    <v-snackbar
      :key="index"
      v-for="(notification, index) in notifications"
      v-model="notification.active"
    >
      {{ notification.text }}
      {{ notification.active }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="notification.active = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import NotificationModel from "@/models/NotificationModel";
import { Vue, Component } from "vue-property-decorator";

@Component
export default class NotificationComponent extends Vue {
  get notifications(): Array<NotificationModel> {
    return this.$notify.notifications();
  }
}
</script>
