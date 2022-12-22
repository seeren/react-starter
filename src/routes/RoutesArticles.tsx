import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { Articles, ArticlesItem, ArticlesSearch } from 'src/pages/articles';

function RoutesArticles(): RouteObject[] {
  return [
    {
      path: 'articles/*',
      element: <Articles />,
      children: [
        {
          path: 'search',
          element: <ArticlesSearch />,
        },
        {
          path: ':id',
          element: <ArticlesItem />,
        },
        {
          path: '*',
          element: <Navigate to='search' />,
        },
      ],
    },
  ];
}

export default RoutesArticles;
