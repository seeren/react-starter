import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { npmPackageApi } from 'src/services';
import { NpmPackageSliceType } from 'src/types';

const [search] = npmPackageApi();
const initialState: NpmPackageSliceType = { fetch: false };

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
