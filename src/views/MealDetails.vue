<template>
  <div class="h-full bg-gray-800">
    <div
      class="w-[900px] mx-auto items-center grid grid-cols-2 text-center p-5 rounded-2xl relative top-36 bg-gray-700 shadow-2xl gap-8"
    >
      <div class="text-left">
        <h1 class="text-4xl text-gray-300 font-bold mb-5">
          {{ meal.strMeal }}
        </h1>
        <p class="p-2 text-ellipsis overflow-hidden text-gray-200">
          <!-- {{ meal.strInstructions }} -->
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quae
          suscipit molestiae facilis officia laudantium modi consectetur
          officiis id! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <router-link
          to="/"
          class="px-3 absolute bottom-4 py-2 text-red-700 text-center transition-all duration-500 hover:shadow-md rounded-md border border-red-400 hover:bg-red-600 hover:text-white"
          >Back to</router-link
        >
      </div>
      <div class="rounded-2xl">
        <img
          :src="meal.strMealThumb"
          class="rounded-e-2xl shadow-xl w-full"
          :alt="meal.strMeal"
        />
      </div>
    </div>
    <!-- <pre> {{ meal }}</pre> -->
  </div>
</template>
<script setup>
// import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";

let route = useRoute();
let meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
