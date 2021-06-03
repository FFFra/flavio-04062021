import { createSelector } from 'reselect';

export const citiesSelector = (state) => state.cities;
export const citiesListSelector = createSelector(
  (state) => citiesSelector(state),
  (cities) => {
    const citiesList = cities.list;
    if (citiesList)
      return citiesList.map((id) => {
        if (cities.items[id]) {
          const { cityName, country } = cities.items[id];
          return {
            cityName,
            country,
          };
        }
      });
  }
);
