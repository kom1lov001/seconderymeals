<template >
    <div class="flex p-8 justify-center flex-col">
      <div>
       <input type="text" @change="searchmeal" placeholder="Search for Meals" 
       class="w-full pl-4 text-lg border-2 bg-gray-100 border-gray-700 border-none rounded-md outline-none placeholder:text-lg">
      </div>
      <div class="flex justify-center gap-2 mt-5">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
  <pre>{{ ingredients }}</pre>
    </div>
</template>
<script setup>
import { computed, onMounted,ref } from "vue"
import store from "../store";
import axiosClient from '../axiosClient'

// let meals = computed(() => store.state.meals)
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let ingredients = ref([])
onMounted(async () => {
 let response = await axiosClient.get('/list.php?i=list')
  console.log(response.data);
  ingredients.value = response.data
})



</script>
<style>
    
</style>