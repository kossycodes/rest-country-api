import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeThemeActionCreator } from '../../states/theme/action';
import './Navbar.scss';

function Navbar() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state);
  const changeThemeHandler = () => (theme === 'light' ? dispatch(changeThemeActionCreator('dark')) : dispatch(changeThemeActionCreator('light')));
  const [isGoingOut, setIsGoingOut] = React.useState(true) 
  
   function changeMind() {
    setIsGoingOut(prevState => !prevState)
  }

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/"><p className="navbar__title">Where in the world?</p></Link>
        <button onClick={() => {
          changeMind();
          changeThemeHandler();
        }}  type="button" className="navbar__toggle-theme">
          <span className="navbar__toggle-theme__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z" />
            </svg>
          </span>
          <p  className="navbar__toggle-theme__text">{isGoingOut ? "Dark Mode" : "Light Mode"}</p>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
