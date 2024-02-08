<template>
  <div class="flex p-8 justify-center flex-col">home</div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

let ingredients = ref([]);
onMounted(async () => {
  let response = await axiosClient.get("/list.php?i=list");
  console.log(response.data);
  ingredients.value = response.data;
});
</script>
<style></style>
