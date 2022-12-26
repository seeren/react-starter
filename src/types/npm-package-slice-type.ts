import { NpmPackageResult } from 'src/models';

type NpmPackageSliceType = {
  search?: NpmPackageResult;
  fetch: boolean;
};

export default NpmPackageSliceType;
