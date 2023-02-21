import React from 'react';
import { Link } from 'react-router-dom';
import './DetailPageSkeleton.scss';

function DetailPageSkeleton() {
  return (
    <div className="detail-skeleton">
      <Link to="/" className="detail-skeleton__back">
        <span className="detail-skeleton__back-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" />
          </svg>
        </span>
        <span className="detail-skeleton__back-text">Back</span>
      </Link>
      <div className="detail-skeleton__body">
        <div className="detail-skeleton__flag" />
        <div className="detail-skeleton__description">
          <div className="detail-skeleton__name" />
          <div className="detail-skeleton__info" />
          <div className="detail-skeleton__borders" />
        </div>
      </div>
    </div>
  );
}

export default DetailPageSkeleton;
