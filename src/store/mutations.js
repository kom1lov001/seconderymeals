//
export function searchedMeals(state, keyword) {
  state.searchmeals = keyword || [];
}
export function searchedByLetter(state, keyword) {
  state.searchbyletter = keyword || [];
}
export function searchedByIngredient(state, keyword) {
  state.searchbyingredient = keyword || [];
}
