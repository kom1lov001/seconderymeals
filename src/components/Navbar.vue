<template>
  <div>
    <header
      class="flex justify-around text-center items-stretch text-gray-400 hidden shadow-lg h-16 md:flex"
    >
      <div>
        <router-link
          class="items-center inline-flex px-3 h-full"
          :to="{ name: 'home' }"
          >Home</router-link
        >
      </div>
      <div>
        <router-link
          class="hover:bg-gray-700 items-center inline-flex px-3 h-full"
          :to="{ name: 'byLetter' }"
          >Search By Letter</router-link
        >
        <router-link
          class="hover:bg-gray-700 items-center inline-flex px-3 h-full"
          :to="{ name: 'byName' }"
          >Meals By Name</router-link
        >
        <router-link
          class="hover:bg-gray-700 items-center inline-flex px-3 h-full"
          :to="{ name: 'byIngredient' }"
          >Meals By Ingredients</router-link
        >
        <router-link
          class="hover:bg-gray-700 items-center inline-flex px-3 h-full"
          to="/guest"
          >Guest</router-link
        >
        <router-link
          class="hover:bg-gray-700 items-center inline-flex px-3 h-full"
          to="/login"
          >Login</router-link
        >
      </div>
    </header>
  </div>
</template>
<script setup></script>
<style></style>
