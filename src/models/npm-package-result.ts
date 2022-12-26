import NpmPackage from 'src/models/npm-package';

interface NpmPackageResult {
  totals: number;
  results: NpmPackage[];
}

export default NpmPackageResult;
