# Routes

Keep a flat folder as possible using composition to scale routes with hook syntax.

Routes are used by [App.txs](./../App.tsx).

* * *

## 📏 Usage

A solution to scale and maintain easily a growing app is to compose routes using [react-router](https://reactrouter.com/en/main) hooks.

_App.tsx_

```tsx
import React, { ReactElement } from 'react';

import { Routes } from 'src/routes';
import 'src/assets/scss/index.scss';

function App(): ReactElement {
  return <Routes />;
}

export default App;
```

Routes are aggregated in routes entry point.

_routes/Routes.tsx_

```tsx
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
```

Declare one route file per [Page Component](./../pages/) entry point.

_routes/RoutesArticles.tsx_

```tsx
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
```

A best practice is to make module discoverable in en entry point, this solution apply to every folders.

_routes/index.ts_

```ts
import Routes from 'src/routes/Routes';
import RoutesNpmPackage from 'src/routes/RoutesNpmPackage';

export { Routes, RoutesNpmPackage };
```

* * *

## 🔗 References

-   <https://ui.dev/react-router-tutorial#route-config>
-   <https://betterprogramming.pub/consolidate-your-typescript-imports-with-index-ts-files-cee934c665a7>
