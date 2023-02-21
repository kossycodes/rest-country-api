/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import { populationFormatter } from '../../utils';
import './CountryCard.scss';

function CountryCard({ country }) {
  const {
    name, population, region, capital, flags, countryCode,
  } = country;

  return (
    <Link to={`detail/${countryCode}`}>
      <div className="country-card">
        <div className="country-card__flag-wrapper">
          <img className="country-card__flag-image" loading="lazy" src={flags.svg || flags.png} alt={`${name} flags`} />
        </div>
        <div className="country-card__body">
          <h1 className="country-card__country-name">{name}</h1>
          <div className="country-card__description">
            <p className="country-card__property"><span className="country-card__key">Population:</span> <span className="country-card__value">{populationFormatter(population)}</span></p>
            <p className="country-card__property"><span className="country-card__key">Region:</span> <span className="country-card__value">{region}</span></p>
            <p className="country-card__property"><span className="country-card__key">Capital:</span> <span className="country-card__value">{capital}</span></p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
