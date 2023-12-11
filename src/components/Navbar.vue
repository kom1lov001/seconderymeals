<template>
   <div>
    <header class="flex justify-around text-center items-stretch bg-white shadow-lg h-16">
          <div>
            <router-link class="items-center inline-flex px-3 h-full" :to="{ name:'home' }">Home</router-link>
          </div>
         <div>
          <router-link class="hover:bg-purple-100 items-center inline-flex px-3 h-full" :to="{ name:'byLetter' }">Search By Letter</router-link>
          <router-link class="hover:bg-purple-100 items-center inline-flex px-3 h-full" :to="{ name:'byName' }">Meals By Name</router-link>
          <router-link class="hover:bg-purple-100 items-center inline-flex px-3 h-full" :to="{ name:'byIngredient' }">Meals By Ingredients</router-link>
          <router-link class="hover:bg-purple-100 items-center inline-flex px-3 h-full" to="/guest">Guest</router-link>
          <router-link class="hover:bg-purple-100 items-center inline-flex px-3 h-full" to="/login">Login</router-link>
         </div>
    </header>
   </div>
</template>
<script setup>

</script>
<style>
    
</style>