<template>
   <div>
    <header class="flex justify-around text-center items-stretch bg-white shadow-xl h-16">
          <router-link class="items-center inline-flex" :to="{name:'home'}">Home</router-link>
<nav class="items-center inline-flex">
          <router-link class="hover:bg-purple-100 items-center inline-flex px-3 h-full" :to="{name:'byLetter'}">Search By Letter</router-link>
          <router-link class="hover:bg-purple-100 items-center inline-flex px-3 h-full" :to="{name:'byName'}">Meals By Name</router-link>
          <router-link class="hover:bg-purple-100 items-center inline-flex px-3 h-full" :to="{name:'byIngredient'}">Meals By Ingredients</router-link>
          <router-link class="hover:bg-purple-100 items-center inline-flex px-3 h-full" :to="{name:'/'}">Guest</router-link>
</nav>
    </header>
   </div>
</template>
<script setup>

</script>
<style>
    
</style>