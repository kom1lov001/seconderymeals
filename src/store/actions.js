// import axiosClient from "../axiosClient";

// export function searchMeals({ commit }, keywords) {
//   axiosClient.get(`search.php?s=${keywords}`).then(({ data }) => {
//     commit("setSearchedMeals", data.meals);
//   });
// }
//
import axiosClient from "../axiosClient";
export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("searchedMeals", data.meals);
    console.log(data.value);
  });
}
