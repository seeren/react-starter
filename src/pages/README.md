# Pages

Create a folder to each parent route with their children.

Page components are used by [Routes.jsx](./../routes/Routes.tsx).

* * *

## 📏 Usage

Parent page is responsible to declare [Layout](./../layouts/) and embeed routed child components inside, they can eather use [Feature Components](./../features/).

_pages/npm-packages/NpmPackage.tsx_

```jsx
import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { OneColumn } from 'src/layouts';

function NpmPackage(): ReactElement {
  return (
    <>
      <OneColumn>
        <Outlet />
      </OneColumn>
    </>
  );
}

export default NpmPackage;
```

Children are responsible to declare feature components and provide arguments.

_pages/npm-packages/NpmPackageResult.tsx_

```tsx
import React, { ReactElement } from 'react';
import type { Params } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { NpmPackageList } from 'src/features';

function NpmPackageResult(): ReactElement {
  const { name }: Readonly<Params<string>> = useParams();

  return (
    <>
      <h1 className='text-2xl my-6'>
        Seach article: {name}
      </h1>
      <section>
        <NpmPackageList name={`${name}`} />
      </section>
    </>
  );
}

export default NpmPackageResult;
```

* * *

## 🔗 References

-   <https://www.taniarascia.com/react-architecture-directory-structure/#views>
