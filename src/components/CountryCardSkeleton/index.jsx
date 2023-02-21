import React from 'react';
import './CountryCardSkeleton.scss';

function CountryCardSkeleton() {
  return (
    <div className="country-card-skeleton">
      <div className="country-card-skeleton__flag-wrapper">
        <div className="country-card-skeleton__flag-image" />
      </div>
      <div className="country-card-skeleton__body">
        <div className="country-card-skeleton__description" />
        <div className="country-card-skeleton__description" />
        <div className="country-card-skeleton__description" />
        <div className="country-card-skeleton__description" />
      </div>
    </div>
  );
}

export default CountryCardSkeleton;
