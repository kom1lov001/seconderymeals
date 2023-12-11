import axiosClient from "../axiosClient";

export function searchMeals({ commit }) {
  axiosClient.get(`/search.php?s=${keywords.value}`).then(({ date }) => {
    commit("setSearchedMeals", date.meals);
  });
}
