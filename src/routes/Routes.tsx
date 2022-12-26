import React, { ReactElement } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import RoutesNpmPackages from 'src/routes/RoutesNpmPackage';

function Routes(): ReactElement | null {
  return useRoutes([
    ...RoutesNpmPackages(),
    {
      path: '*',
      element: <Navigate to='/npm/package' />,
    },
  ]);
}

export default Routes;
