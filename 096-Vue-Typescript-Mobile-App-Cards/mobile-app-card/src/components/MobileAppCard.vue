<template>
  <div class="background-container">
    <img
      src="@/assets/Frame.png"
      alt="Background Image"
      class="background-image"
    />
    <div class="content-container">
      <h1>Download Our App</h1>
      <p>Stay updated with our mobile app!</p>
      <button class="transparent-button">View in App Store</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MobileAppCard",
});
</script>

<style scoped src="@/assets/style.css"></style>
