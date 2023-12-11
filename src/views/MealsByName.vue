<template>
   <div class="flex flex-col p-8">
       <input type="text" v-model="keywords" @change="searchMeals" placeholder="Search for Meals" 
       class="w-full pl-4 text-lg border-2 bg-gray-100 border-gray-700 border-none rounded-md outline-none placeholder:text-lg">

  </div>
</template>
<script setup>
import { ref } from 'vue'
import axiosClient from '../axiosClient'


let keywords = ref('')

function searchMeals(){

}

</script>
<style>
  
</style>