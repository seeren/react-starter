import React, { ReactElement } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import RoutesNpmPackages from 'src/routes/RoutesNpmPackages';

function Routes(): ReactElement | null {
  return useRoutes([
    ...RoutesNpmPackages(),
    {
      path: '*',
      element: <Navigate to='/npm/packages' />,
    },
  ]);
}

export default Routes;
