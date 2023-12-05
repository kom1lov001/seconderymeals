import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import MealList from '../views/MealList.vue'
let routes = [
  {
  path:'/',
  name:'home',
  component: Home
  },
  {
  path:"/letter/:letter",
  name:"byLetter",
  component: MealList
  }
]

let router = createRouter({
    history:createWebHistory(),
    routes,
})
export default router