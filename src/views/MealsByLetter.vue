<template>
  <div class="flex justify-center text-xl gap-5 mt-5 text-gray-400">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
</template>
<script setup>
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
</script>
<style></style>
