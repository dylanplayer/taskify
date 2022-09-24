import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage, NotFoundPage } from '../../components';
import { paths } from '../../constants';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={paths.LandingPage}
          element={<LandingPage />}
        />
        <Route
          path={paths.NotFoundPage}
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

