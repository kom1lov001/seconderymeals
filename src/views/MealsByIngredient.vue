<!-- <template>
  <div>Search By Ingredients</div>
</template>
<script setup></script>
<style></style> -->
<script setup>
import { ref } from "vue";
// import Ingredient from "../views/Ingredient.vue";

let foodname = ref("Salmon");
let foodcost = ref(500);
let surnamea = ref("Komilov");
</script>

<template>
  <div class="bg-gray-800 h-full">
    <!-- <h1>Here is a child component!</h1>
    <Ingredient
      :foodcost="foodcost"
      :foodname="foodname"
      :foodsurname="surnamea"
    ></Ingredient> -->
    <!-- :foodname="foodname" :food-cost="foodCost"  -->
  </div>
</template>
