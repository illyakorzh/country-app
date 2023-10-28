import { createBrowserRouter } from 'react-router-dom';
import * as React from 'react';
import CountriesPage from '../pages/countriesPage/CountriesPage';
import { ErrorPage } from '../pages/errorPage/ErrorPage';
import { DescriptionPage } from '../pages/descriptionPage/DescriptionPage';

export const router = createBrowserRouter([
  { path: "/", element: <CountriesPage /> },
  { path: "/:name", element: <DescriptionPage/> },
  { path: "*",  element: <ErrorPage />
},]);
