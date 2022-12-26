# Selectors

Store getters are selectors.

Selectors are used by [Feature components](./../features/) or [Hooks](./../hooks/).

* * *

## 📏 Usage

When selector is specific to a feature and non shared, declare it in the component folder.

_selectors/select-npm-package.ts_

```ts
import { NpmPackageSliceType } from 'src/types';

export const selectNpmPackage = (
    state: { npmPackage: NpmPackageSliceType }
) => state.npmPackage;
```

Selectors are store getters but are also powerfull feature to memorise computed property like.

* * *

## 🔗 References

-   <https://redux.js.org/usage/deriving-data-selectors>
