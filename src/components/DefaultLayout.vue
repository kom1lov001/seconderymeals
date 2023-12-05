<template>
   <div class="bg-gray-200">
    <Navbar></Navbar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script setup>
import Navbar from "../components/Navbar.vue";

</script>
<style>
    
</style>