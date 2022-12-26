# Layouts

Keep a flat folder of few layouts.

Layouts components are used only by [Pages](./../pages/).

* * *

## 📏 Usage

Theeir responsability is to use [Features Components](./../features/) and [Components](./../components/) to create a layout. 

_layouts/OneColumn.tsx_

```tsx
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Toolbar } from 'src/components';

function OneColumn({ children }: Record<string, ReactElement>): ReactElement {
  return (
    <div className='h-screen flex flex-col'>
      <header>
        <Toolbar>
          <Link
            to='/articles'
            className='bg-gray-900 text-gray-50 px-3 py-2 rounded-md text-sm font-medium'
            aria-current='page'
          >
            Demo
          </Link>
        </Toolbar>
      </header>
      <main className='flex flex-grow bg-gray-50'>
        <div className='flex flex-col flex-grow mx-auto max-w-7xl p-2 sm:p-6 lg:p-8'>
          {children}
        </div>
      </main>
      <footer>
        <Toolbar>
          <p className='text-gray-50 py-2 rounded-md text-sm font-medium'>
            React starter
          </p>
        </Toolbar>
      </footer>
    </div>
  );
}

export default OneColumn;
```

They can handle navigation declaration and logic and do not delegate that to feature component.

* * *

## 🔗 References

-   <https://dev.to/olenadrugalya/layout-component-and-why-we-use-it-in-react-d8b>
