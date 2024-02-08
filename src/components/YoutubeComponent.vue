<template>
  <!-- <div>
    <a
      :href="meal.strYoutube"
      target="_blank"
      class="px-3 py-2 rounded border-2"
      >Youtube</a
    >
  </div> -->
  <!-- <div class="container"> -->
  <a :href="href" target="_blank" class="py-2 px-4 bg-red-500 rounded-md">
    <slot></slot>
  </a>
</template>
<script setup>
// let props = defineProps(["href"]);
// let props = defineProps({
//   href: String,
// });
</script>
<style></style>
