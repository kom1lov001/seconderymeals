<!-- <template>
  <div>Search By Ingredients</div>
</template>
<script setup></script>
<style></style> -->
<script setup>
import { ref, reactive } from "vue";
import Ingredient from "../views/Ingredient.vue";
let foodname = ref("Defender");
let foodCost = ref(500);
</script>

<template>
  <div class="bg-gray-800 h-full">
    <h1>Here is a child component!</h1>
    <Ingredient
      :foodname="foodname"
      :food-cost="foodCost"
      counter="0"
    ></Ingredient>
  </div>
</template>
