/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components';
import { asyncPreLoad } from '../../states/preLoading/action';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreLoad());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Home;
