<template>
  <div class="flex justify-center text-xl gap-5 mt-5 text-gray-400">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
    <div>
      <!-- <div v-for="meal of meals">
        <img src="" alt="" />
        <h1>{{ meal.strMeal }}</h1>
        <p></p>
      </div> -->
      <!-- <pre>{{ meals }}</pre> -->
    </div>
  </div>
</template>
<script setup>
// import store from "../store";
import { useRoute } from "vue-router";
// import { onMounted, computed } from "vue";

let route = useRoute();
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
</script>
<style></style>
