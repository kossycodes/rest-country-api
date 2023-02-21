/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import { loadingBarReducer } from 'react-redux-loading-bar';
import countriesReducer from './countries/reducer';
import preLoadingReducer from './preLoading/reducer';
import filtersReducer from './filters/reducer';
import countryDetailReducer from './countryDetail/reducer';
import themeReducer from './theme/reducer';

const store = configureStore({
  reducer: {
    preLoading: preLoadingReducer,
    countries: countriesReducer,
    filters: filtersReducer,
    countryDetail: countryDetailReducer,
    theme: themeReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
