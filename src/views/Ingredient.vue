<script setup>
import { ref } from "vue";
// import Login from "../views/LoginPage.vue";
// <Login />
// let props = defineProps(["foodname", "foodCost", "information", "counter"]);
let props = defineProps({
  foodname: String,
  foodsurname: String,
  foodcost: Number,
});
let counter = ref({
  num: 1,
});
let awesome = ref("");

function counterfunc() {
  counter.value.num++;
}
</script>

<template>
  <div>
    <h1>{{ foodname }}</h1>
    <h2>{{ foodsurname }}</h2>
    <h3>{{ foodcost }}</h3>
    <!-- <h1>{{ foodname }}</h1>
    <h1>{{ foodCost }}</h1> -->
    <button class="px-5 py-2 bg-gray-800" @click="counterfunc">
      {{ counter.num }}
    </button>
    <button @click="awesome = !awesome">Toggle</button>

    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
  </div>
</template>
