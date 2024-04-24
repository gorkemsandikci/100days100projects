<template>
  <div id="app">
    <MobileAppCard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MobileAppCard from "./components/MobileAppCard.vue";

export default defineComponent({
  name: "App",
  components: {
    MobileAppCard,
  },
});
</script>
