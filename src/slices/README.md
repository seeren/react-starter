# Slices

Redux toolkit slices location.

Slices are used by [Store](./../stores/), [Slices](./../slices/) and [Hooks](./../hooks/).

* * *

## 📏 Usage

Slices are used to manage store data and determine server state.

```ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { npmPackageApi } from 'src/services';
import { NpmPackageSliceType } from 'src/types';

const initialState: NpmPackageSliceType = { fetch: false };
const [search] = npmPackageApi();

export const searchNpmPakage = createAsyncThunk('npmPackage/search', search);

const npmPackagesSlice = createSlice({
  name: 'npmPackage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchNpmPakage.pending, (state: NpmPackageSliceType) => {
      state.fetch = true;
    });
    builder.addCase(searchNpmPakage.fulfilled, (state, action) => {
      state.fetch = false;
      state.search = action.payload;
    });
  },
});

export default npmPackagesSlice;
```

With **reducers** you can trigger action for the state, in this example **extraReducers** are used to handle server state.

To go further, use [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) to manage server state for REST and GraphQL.

* * *

## 🔗 References

-   <https://redux-toolkit.js.org/api/createslice>
-   <https://redux-toolkit.js.org/rtk-query/overview>
