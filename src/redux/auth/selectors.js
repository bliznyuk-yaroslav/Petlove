export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectToken = (state) => state.auth.token;
export const selectorFav = (state) => state.favorites.favorites;
export const selectorFullInfoUsers = (state) => state.auth.fullUserInfo;
export const selectorAuthLoading = (state) => state.auth.isLoading;
export const selectorLoadingFav = (state) => state.favorites.isLoading;
