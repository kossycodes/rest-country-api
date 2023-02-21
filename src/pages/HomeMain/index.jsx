import React, { useEffect } from 'react';
import { SearchBar, SelectRegion, CountryList } from '../../components';
import './HomeMain.scss';

function HomeMain() {
  useEffect(() => {
    document.title = 'Rest Countries';
  });

  return (
    <main className="home-main">
      <div className="home-main__action">
        <SearchBar />
        <SelectRegion />
      </div>
      <CountryList />
    </main>
  );
}

export default HomeMain;
