<template>
  <div
    class="hover:shadow-lg text-gray-200 transition-all duration-500 hover:shadow-white grid p-4 rounded-xl bg-gray-700"
  >
    <router-link :to="{ name: 'mealbyid', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.str.Meal"
        class="rounded-t-2xl w-full h-64 object-cover"
      />
    </router-link>
    <div class="m-3">
      <h3 class="text-lg font-semibold justify-self-start">
        {{ meal.strMeal }}
      </h3>
      <p class="text-ellipsis overflow-hidden">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quos,
        amet animi eligendi magnam officiis recusandae!
      </p>
    </div>
    <div class="p-3 flex text-center">
      <!-- <YoutubeComponent
        class="text-red transition-all duration-500 hover:shadow-md px-3 py-2 rounded-md border border-red-600 hover:bg-red-500 text-red-600 hover:text-white"
      >
        <a class="" :href="meal.strYoutube" target="_blank">YouTube</a>
      </YoutubeComponent> -->
      <router-link
        class="text-blue-700 px-3 py-2 ml-3 transition-all duration-500 hover:shadow-md rounded-md border border-purple-400 hover:bg-purple-600 hover:text-white"
        :to="{ name: 'mealbyid', params: { id: meal.strMeal } }"
        >View</router-link
      >
    </div>
  </div>
</template>
<script setup>
// import YoutubeComponent from "../components/YoutubeComponent.vue";

let { meal } = defineProps({
  meal: Object,
});
</script>
<style></style>
