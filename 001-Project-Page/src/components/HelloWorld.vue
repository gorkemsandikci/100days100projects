<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      
    <i> 
      <a href="https://github.com/gorkemsandikci/100days100projects" target="_blank" rel="noopener">Github Repository</a>
    </i> has all the projects created in this challenge.
    </h3>

    <h4>
      <a href="https://www.javascript.com" target="_blank" rel="noopener">JavaScript</a> +
      <a href="https://www.typescriptlang.org" target="_blank" rel="noopener">TypeScript</a> +
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>
    </h4>

    <i>For back to website click 
      <a href="https://gorkemnet.com/" target="_blank" rel="noopener">Here</a>
    </i>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
