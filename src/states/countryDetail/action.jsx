import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getCountryDetailsByFullName, getCountryDetailByCode } from '../../api/restCountries';

export const ActionType = {
  RECEIVE_DETAIL_COUNTRY: 'RECEIVE_DETAIL_COUNTRY',
};

export const receiveDetailCountryActionCreator = (country) => ({
  type: ActionType.RECEIVE_DETAIL_COUNTRY,
  payload: country,
});

export const asyncGetDetailCountryByFullName = (fullName) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const country = await getCountryDetailsByFullName(fullName);
    dispatch(receiveDetailCountryActionCreator(country));
  } catch (error) {
    alert(error.message);
  } finally {
    dispatch(hideLoading());
  }
};

export const asyncGetDetailCountryByCode = (countryCode) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const country = await getCountryDetailByCode(countryCode);
    dispatch(receiveDetailCountryActionCreator(country));
  } catch (error) {
    alert(error.message);
  } finally {
    dispatch(hideLoading());
  }
};
