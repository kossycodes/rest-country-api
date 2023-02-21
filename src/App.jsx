import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { Home, HomeMain, Detail } from './pages';
import { changeThemeLocalStorage, getCurrentThemeLocalStorage } from './api/localStorage';
import { changeTheme } from './utils';
import { changeThemeActionCreator } from './states/theme/action';
import './styles/main.scss';

function App() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state);
  const currentThemeLocalStorage = getCurrentThemeLocalStorage();

  useEffect(() => {
    if (currentThemeLocalStorage !== null) {
      dispatch(changeThemeActionCreator(currentThemeLocalStorage));
      changeTheme(currentThemeLocalStorage);
      return;
    }
    changeThemeLocalStorage(theme);
  }, []);

  useEffect(() => {
    changeTheme(theme);
    changeThemeLocalStorage(theme);
  }, [theme]);

  return (
    <>
      <LoadingBar
        className="tes"
        style={{
          backgroundColor: 'var(--text)',
          height: '3px',
          position: 'absolute',
          zIndex: 999,
        }}
      />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<HomeMain />} />
          <Route path="/detail/:countryCode" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
