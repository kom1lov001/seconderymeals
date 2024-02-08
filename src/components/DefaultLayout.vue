<template>
  <div class="w-full !fullHeight bg-gray-800">
    <header>
      <Navbar></Navbar>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <!-- <footer>
      <Footer></Footer>
    </footer> -->
  </div>
</template>
<script setup>
import Navbar from "../components/Navbar.vue";
// import { Footer } from "";
</script>
<style>
.fullHeight {
  height: 100vh !important;
}
</style>
