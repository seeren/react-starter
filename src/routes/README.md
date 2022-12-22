# Routes

> Routing use [react-router](https://reactrouter.com/en/main).

This document encourage to keep a flat folder using composition to scale routes using hook syntax.

* * *

## 📏 Usage

A solution to scale and maintain easily a growing app is to compose routes using react-router hooks.

_App.tsx_

```tsx
import React, { ReactElement } from 'react';

import { Routes } from 'src/routes';

function App(): ReactElement {
  return <Routes />;
}

export default App;
```

Routes are aggregated in routes entry point.

_./routes/Routes.tsx_

```tsx
import React, { ReactElement } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import RoutesArticles from 'src/routes/RoutesArticles';

function Routes(): ReactElement | null {
  return useRoutes([

    // Each page entry point is composed
    ...RoutesArticles(),
  
    {
      path: '*',
      element: <Navigate to='/articles' />,
    },
  ]);
}

export default Routes;
```

Declare one route file per page component entry point  with their chidren.

_./routes/RoutesArticles.tsx_

```tsx
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
```

* * *

## 🔗 References

-   <https://ui.dev/react-router-tutorial#route-config>
