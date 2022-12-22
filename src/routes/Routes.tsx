import React, { ReactElement } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import RoutesArticles from 'src/routes/RoutesArticles';

function Routes(): ReactElement | null {
  return useRoutes([
    ...RoutesArticles(),
    {
      path: '*',
      element: <Navigate to='/articles' />,
    },
  ]);
}

export default Routes;
