# Stores

Handle global and shared data with stores.

Stores are used by [application entry](./../index.tsx) point as provider.

* * *

## 📏 Usage

Server data, representing domain data usually shared is stored here. To pick up data from store [Selectors](./../selectors/) are used, to manage data [Slices](./../slices/) are used.

_stores/stores.ts_

```jsx
import { configureStore } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

import { npmPackagesSlice } from 'src/slices';

export const store: ToolkitStore = configureStore({
  reducer: {
    npmPackage: npmPackagesSlice.reducer,
  },
});
```

___

## 🔗 References

-   <https://redux-toolkit.js.org/api/configureStore>
