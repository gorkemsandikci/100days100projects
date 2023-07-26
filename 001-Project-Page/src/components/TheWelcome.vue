<script setup lang="ts">
import WelcomeItem from './ListItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
</script>

<template>
  
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>001-Challange-Projects-Page</template>
    All projects will be add 
    <a href="#" target="_blank" rel="noopener">this</a>
     list
  </WelcomeItem>

  
</template>
