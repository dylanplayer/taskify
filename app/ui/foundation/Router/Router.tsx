import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { LandingPage } from '../../components';
import { paths } from '../../constants';

export default function Router() {
  const [loggedIn, setLoggedIn] = useState(true);

  if (!loggedIn) {
    window.location.replace(paths.Login);
    return (
      <h1>Please login <a href={paths.Login}>here</a></h1>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={paths.LandingPage}
          element={<LandingPage />}
        />
        <Route
          path={paths.All}
          element={<Navigate to={paths.LandingPage} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

