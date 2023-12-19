<!-- <template>
  <div>Search By Ingredients</div>
</template>
<script setup></script>
<style></style> -->
<script setup>
import { ref, computed } from "vue";

const author = ref({
  name: "John Doe",
  books: [
    "Vue 2 - Advanced Guide",
    "Vue 3 - Basic Guide",
    "Vue 4 - The Mystery",
  ],
});

let publishedBooksMessage = computed(() => {
  let res = author.value;
  return res.books.length > 0;
});
</script>

<template>
  <div class="text-gray-400">
    <p>Has published books:</p>

    <span v-if="publishedBooksMessage"> Yes </span>
    <span v-else> No </span>
  </div>
</template>
