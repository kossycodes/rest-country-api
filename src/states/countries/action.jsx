import { getAllCountries, getCountryDetailByCode, getCountryDetailsByFullName } from '../../api/restCountries';

export const ActionType = {
  RECEIVE_ALL_COUNTRIES: 'RECEIVE_ALL_COUNTRIES',
  RECEIVE_DETAIL_COUNTRY: 'RECEIVE_DETAIL_COUNTRY',
};

export const receiveAllCountriesActionCreator = (countries) => ({
  type: ActionType.RECEIVE_ALL_COUNTRIES,
  payload: countries,
});

export const receiveDetailCountryActionCreator = (country) => ({
  type: ActionType.RECEIVE_DETAIL_COUNTRY,
  payload: country,
});

export const asyncGetAllCountries = () => async (dispatch) => {
  try {
    const countries = await getAllCountries();
    dispatch(receiveAllCountriesActionCreator(countries));
  } catch (error) {
    alert(error.message);
  }
};

export const asyncGetDetailCountryByFullName = (fullName) => async (dispatch) => {
  try {
    const country = await getCountryDetailsByFullName(fullName);
    dispatch(receiveDetailCountryActionCreator(country));
  } catch (error) {
    alert(error.message);
  }
};

export const asyncGetDetailCountryByCode = (code) => async (dispatch) => {
  try {
    const country = await getCountryDetailByCode(code);
    dispatch(receiveDetailCountryActionCreator(country));
  } catch (error) {
    alert(error.message);
  }
};
