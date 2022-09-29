import { Container, CircularProgress } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { LandingPage } from '../../components';
import { paths } from '../../constants';

export default function Router() {
  const [loggedIn, setLoggedIn] = useState(true);

  if (!loggedIn) {
    window.location.replace(paths.Login);
    return (
      <Container maxWidth='lg'>
        <Stack alignItems='center' justifyContent='center' height='400px'>
          <CircularProgress size={50}/>
        </Stack>
      </Container>
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

