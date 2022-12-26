import { configureStore } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

import { npmPackagesSlice } from 'src/slices';

export const store: ToolkitStore = configureStore({
  reducer: {
    npmPackage: npmPackagesSlice.reducer,
  },
});
