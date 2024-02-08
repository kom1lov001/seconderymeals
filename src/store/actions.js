import axiosClient from "../axiosClient";
export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("searchedMeals", data.meals);
    console.log(data.value);
  });
}
export function searchedByLetter({ commit }, keyword) {
  axiosClient.get(`search.php?f=${keyword}`).then(({ data }) => {
    commit("searchedByLetter  ", data.meals);
    console.log(data.value);
  });
}
export function searchedByIngredient({ commit }, keyword) {
  axiosClient.get(`search.php?i=${keyword}`).then(({ data }) => {
    commit("searchedByIngredient", data.meals);
    console.log(data.value);
  });
}
