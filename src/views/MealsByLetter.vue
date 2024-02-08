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
      <pre>{{ meals }}</pre>
    </div>
  </div>
</template>
<script setup>
// import store from "../store";
// import { useRoute } from "vue-router";
import { onMounted, computed } from "vue";

let route = useRoute();
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// const meals = computed(() => store.state.mealsByLetter);
// onMounted(() => {
// store.dispatch("searchMealsByLetter".route.params.letter)
// }),
</script>
<style></style>
<!--<template>
  <div>
    <h1 class="text-gray-400">
      Lorem ipsum dolor sit amet consectetur adipisicing.
    </h1>
    <div class="text-gray-400">Employees Present: {{ employer }}</div> 
    <div :class="{ classObject }" class="text-gray-400">
      Employe present: {{ employerFunction }}
    </div>
  </div>
</template>
<script setup>
import { reactive, computed, ref } from "vue";
let employees = reactive(["Avaz", "Shaxzod", "islam", "Islom", "Nusrat"]);
let employerFunction = computed(() => {
  return employees.length > 0 ? "Yess" : "NO";
});
let isActive = ref(true);
// let employe = reactive(["emp1", "emp2", "emp3", "emp4"]);
// let employer = computed(() => {
//   return employe.length > 0 ? "Yes" : "No";
// });
let classObject = reactive({
  active: true,
  "text-danger": true,
});
</script>
<style scoped>
.active {
  font-size: 36px;
  color: blue;
}
</style>
-->
