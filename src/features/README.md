# Features components

Feature components are responsible to achieve a domain logic target.

Feature Components are used by [Layouts](./../layouts/) and [Pages](./../pages/).

* * *

## 📏 Usage

Group by domain these components with all they need to work including [Hooks](./../hooks/), [Types](./../types/) or others.

```tsx
import React, { ReactElement } from 'react';

import { InputSearch, Label } from 'src/components';
import { useNpmPackageSearch } from 'src/features/npm-packages';

function NpmPackageSearchInput(): ReactElement {
  const [search, setSearch, onSearch] = useNpmPackageSearch();

  return (
    <form onSubmit={onSearch} className='gap-4 flex flex-col'>
      <Label id='article-search' text='Enter article keyword'></Label>
      <InputSearch
        id='article-search'
        state={search}
        dispatch={setSearch}
      ></InputSearch>
    </form>
  );
}

export default NpmPackageSearchInput;
```

Be light and testable with low coupling.

* * *

## 🔗 References

-   <https://www.robinwieruch.de/react-folder-structure/#feature-folders>
-   <https://reboot.studio/blog/folder-structures-to-organize-react-project/#modular-structure-or-feature-based>
