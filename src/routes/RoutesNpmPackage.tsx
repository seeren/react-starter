import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import {
  NpmPackage,
  NpmPackageResult,
  NpmPackageSearch,
} from 'src/pages/npm-packages';

function RoutesNpmPackage(): RouteObject[] {
  return [
    {
      path: 'npm/package/*',
      element: <NpmPackage />,
      children: [
        {
          path: '',
          element: <NpmPackageSearch />,
        },
        {
          path: ':name',
          element: <NpmPackageResult />,
        },
        {
          path: '*',
          element: <Navigate to='search' />,
        },
      ],
    },
  ];
}

export default RoutesNpmPackage;
