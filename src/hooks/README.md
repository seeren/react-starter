# Hooks

Hooks handle components lifecycle hooks, local states and events and execute globals actions.

Hooks are used by other hooks, [Pages](./../pages/), [Layouts](./../layouts/) and [Features](./../features/).

* * *

## 📏 Usage

Shared states goes in the hook folder otherwise they are local

Example using [redux-tookit](https://redux-toolkit.js.org/):

_features/npm-packages/use-npm-package-list.ts_

```jsx
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type {} from 'redux-thunk/extend-redux';

import { searchNpmPakage } from 'src/slices/npm-package-slice';
import { selectNpmPackage } from 'src/selectors';
import { NpmPackageResult } from 'src/models';

function useNpmPackageList(
  name: string,
): [boolean, NpmPackageResult | undefined] {
  const dispatch = useDispatch();
  const { fetch, search } = useSelector(selectNpmPackage);

  useEffect(() => {
    dispatch(searchNpmPakage(name));
  }, [name, dispatch]);

  return [fetch, search];
}
export default useNpmPackageList;
```

Example using local component state:

_features/npm-packages/use-npm-package-search.ts_

```tsx
import { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useNpmPackageSearch(): [
  string,
  Dispatch<SetStateAction<string>>,
  () => boolean,
] {
  const navigate = useNavigate();
  const [search, setSearch] = useState(String);
  const onSearch = (): boolean => Boolean(navigate(`/npm/package/${search}`));

  return [search, setSearch, onSearch];
}

export default useNpmPackageSearch;
```

* * *

## 🔗 References

-   <hhttps://fr.reactjs.org/docs/hooks-custom.html>