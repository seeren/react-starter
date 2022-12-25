import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import {
  NpmPackages,
  NpmPackagesItem,
  NpmPackagesSearch,
} from 'src/pages/npm-packages';

function RoutesNpmPackages(): RouteObject[] {
  return [
    {
      path: 'npm/packages/*',
      element: <NpmPackages />,
      children: [
        {
          path: 'search',
          element: <NpmPackagesSearch />,
        },
        {
          path: ':name',
          element: <NpmPackagesItem />,
        },
        {
          path: '*',
          element: <Navigate to='search' />,
        },
      ],
    },
  ];
}

export default RoutesNpmPackages;
