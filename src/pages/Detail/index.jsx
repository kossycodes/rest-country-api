/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { asyncGetDetailCountryByFullName, asyncGetDetailCountryByCode, receiveDetailCountryActionCreator } from '../../states/countryDetail/action';
import { asyncGetAllCountries } from '../../states/countries/action';
import { DetailPageSkeleton } from '../../components';
import { joinArrayWithCommas, populationFormatter, getFullCountryNameByCodeFromCountries } from '../../utils';
import './Detail.scss';

function Detail() {
  const { countryCode } = useParams();
  const dispatch = useDispatch();
  const { countryDetail, countries } = useSelector((state) => state);
  const {
    flags, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies,
    languages, borders,
  } = countryDetail;

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(asyncGetAllCountries());
    }
    dispatch(asyncGetDetailCountryByCode(countryCode));
    return () => {
      dispatch(receiveDetailCountryActionCreator([]));
    };
  }, [dispatch]);

  useEffect(() => {
    document.title = `${countryDetail.name || ''} Details`;
  });

  if (Object.keys(countryDetail).length === 0) {
    return (
      <DetailPageSkeleton />
    );
  }

  return (
    <div className="detail">
      <Link to="/" className="detail__back">
        <span className="detail__back-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" />
          </svg>
        </span>
        <span className="detail__back-text">Back</span>
      </Link>

      <div className="detail__body">
        <div className="detail__flag">
          <img className="detail__flag-image" src={flags.svg} alt="" />
        </div>
        <div className="detail__description">
          <h1 className="detail__name">{name}</h1>

          <div className="detail__info">
            <div className="detail__details">
              <div className="detail__property">
                <p className="detail__key">Native Name:</p>
                <p className="detail__value">{nativeName || 'unknown'}</p>
              </div>
              <div className="detail__property">
                <p className="detail__key">Population:</p>
                <p className="detail__value">{populationFormatter(population) || 'unknown'}</p>
              </div>
              <div className="detail__property">
                <p className="detail__key">Region:</p>
                <p className="detail__value">{region || 'unknown'}</p>
              </div>
              <div className="detail__property">
                <p className="detail__key">Sub Region:</p>
                <p className="detail__value">{subregion || 'unknown'}</p>
              </div>
              <div className="detail__property">
                <p className="detail__key">Capital:</p>
                <p className="detail__value">{capital || 'unknown'}</p>
              </div>
            </div>

            <div className="detail__details">
              <div className="detail__property">
                <p className="detail__key">Top Level Domain:</p>
                { topLevelDomain.map((tld) => <p key={tld} className="detail__value">{tld}</p>) }
              </div>

              <div className="detail__property">
                <p className="detail__key">Currencies:</p>
                { currencies !== undefined && currencies.map((currency) => <p key={currency.name} className="detail__value">{currency.name}</p>) }
              </div>
              <div className="detail__property">
                <p className="detail__key">Languanges:</p>
                <p className="detail__value">{joinArrayWithCommas(languages) || 'unknown'}</p>
              </div>
            </div>
          </div>

          { borders !== undefined && (
          <div className="detail__border">
            <h2 className="detail__border-title">Border Countries:</h2>
            <ul className="detail__border-list">
              { borders.map((border) => <li key={border} onClick={() => dispatch(asyncGetDetailCountryByFullName(getFullCountryNameByCodeFromCountries(countries, border)))} className="detail__border-item">{getFullCountryNameByCodeFromCountries(countries, border)}</li>) }
            </ul>
          </div>
          ) }
        </div>
      </div>
    </div>
  );
}

export default Detail;
