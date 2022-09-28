import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { LandingPage, LoginPage } from '../../components';
import { paths } from '../../constants';

export default function Router() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path={paths.LandingPage}
            element={<LandingPage />}
          />
          <Route
            path={paths.NotFound}
            element={<Navigate to={paths.LandingPage} />}
          />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={paths.LoginPage}
          element={<LoginPage />}
        />
        <Route
          path={paths.NotFound}
          element={<Navigate to={paths.LoginPage} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

