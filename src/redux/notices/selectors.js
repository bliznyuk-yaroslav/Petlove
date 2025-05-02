export const selectorNotices = (state) => state.notices.notices;
export const selectorPageNotices = (state) => state.notices.notices.page;
export const selectorSearchNotices = (state) => state.notices.search;

export const selectorSex = (state) => state.notices.filters.sex;
export const selectorCategories = (state) => state.notices.filters.categories;
export const selectorSpecies = (state) => state.notices.filters.species;

export const selectorSetSex = (state) => state.notices.filters.setSex;
export const selectedSetCategories = (state) =>
  state.notices.filters.setCategory;
export const selectedSetSpecies = (state) => state.notices.filters.setSpecies;
export const selectorCitLoc = (state) => state.cities.selectedLocation;
export const selectorByPopular = (state) => state.notices.filters.byPopularity;
export const selectorByPrice = (state) => state.notices.filters.byPrice;
export const selectorLoadingNotices = (state) => state.notices.isLoading;
