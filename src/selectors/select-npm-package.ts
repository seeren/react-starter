import { NpmPackageSliceType } from 'src/types';

export const selectNpmPackage = (state: { npmPackage: NpmPackageSliceType }) =>
  state.npmPackage;
