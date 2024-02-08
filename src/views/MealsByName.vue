<template>
  <div class="grid p-8 pb-0 h-full bg-gray-800 relative top-5">
    <input
      type="text"
      v-model="keyword"
      @change="searchMeal"
      placeholder="Search for Meals"
      class="w-full p-4 text-lg text-gray-300 border-2 bg-gray-500 border-gray-700 border-none rounded-md outline-none placeholder:text-lg placeholder:text-gray-300"
    />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      <div
        class="hover:shadow-lg text-gray-200 transition-all duration-500 hover:shadow-white grid p-4 rounded-xl bg-gray-700"
        v-for="meal of meals"
        :key="meal.idMeal"
      >
        <router-link :to="{ name: 'mealbyid', params: { id: meal.idMeal } }">
          <img
            :src="meal.strMealThumb"
            alt=""
            class="rounded-t-2xl w-full h-64 object-cover"
          />
        </router-link>
        <div class="m-3">
          <h3 class="text-lg font-semibold justify-self-start">
            {{ meal.strMeal }}
          </h3>
          <p class="text-ellipsis overflow-hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            quos, amet animi eligendi magnam officiis recusandae!
          </p>
        </div>
        <div class="p-3 flex text-center">
          <a
            class="text-red transition-all duration-500 hover:shadow-md px-3 py-2 rounded-md border border-red-600 hover:bg-red-500 text-red-600 hover:text-white"
            :href="meal.strYoutube"
            target="_blank"
            >YouTube</a
          >
          <router-link
            class="text-blue-700 px-3 py-2 ml-3 transition-all duration-500 hover:shadow-md rounded-md border border-purple-400 hover:bg-purple-600 hover:text-white"
            :to="{ name: 'mealbyid', params: { id: meal.idMeal } }"
            >View</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import store from "../store";
let keyword = ref("");
let meals = computed(() => store.state.searchmeals);
import { useRoute } from "vue-router";

let route = useRoute();

function searchMeal() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeal();
  }
  console.log(meals.idMeal);
});
</script>
