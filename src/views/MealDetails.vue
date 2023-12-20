<template>
  <!-- <div class="h-full bg-gray-800 flex items-center justify-center"> -->

  <div class="">
    <div
      class="mx-auto grid grid-cols-1 md:grid-cols-3 p-4 gap-2 relative top-8 rounded-xl"
    >
      <div>
        <img
          :src="meal.strMealThumb"
          class="rounded-md min-w-96 w-auto"
          alt="str Meal Thumb"
        />
      </div>
      <div class="relative col-span-2">
        <h1 class="font-bold text-[36px] text-gray-300">
          {{ meal.strMeal }}
        </h1>
        <p class="leading-none text-gray-300">
          {{ meal.strInstructions }}
        </p>
        <div class="box-border">
          <div class="grid grid-cols-3">
            <h1><b>Category</b>:{{ meal.strCategory }}</h1>
            <h1><b>Area</b>:{{ meal.strArea }}</h1>
            <h1 class="flex relative right-6">
              <b>Tags</b>:{{ meal.strTags }}
            </h1>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div>
              <h2 class="font-semibold text-2xl">Ingredient</h2>
              <ul>
                <template v-for="(el, ind) of new Array(20)">
                  <li v-if="meal[`strIngredient${ind + 1}`]">
                    {{ ind + 1 }} {{ meal[`strIngredient${ind + 1}`] }}
                  </li>
                </template>
              </ul>
            </div>
            <div>
              <h2 class="font-semibold text-2xl">Measures</h2>
              <ul>
                <template v-for="(el, ind) of new Array(20)">
                  <li>{{ meal[`strMeasure${ind + 1}`] }}</li>
                </template>
              </ul>
            </div>
          </div>
          <!-- <pre>{{ meal }}</pre> -->
          <div class="mt-5 flex flex-row">
            <YoutubeComponent :href="meal.strYoutube" class=""
              >Youtube</YoutubeComponent
            >
            <a
              :href="meal.strSource"
              target="_blank"
              class="rounded-md py-2 px-4 bg-red-400"
              >View Original Source
            </a>
          </div>
        </div>
        <!-- <pre>{{ meal }}</pre> -->
        <!-- <router-link to="/by-name" class="px-3 py-2 bg-blue-500 rounded">
        By Name
      </router-link> -->
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script setup>
// import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
// import YoutubeComponent from "../components/YoutubeComponent.vue";

let route = useRoute();
let meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
    console.log(meal);
  });
});
</script>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
