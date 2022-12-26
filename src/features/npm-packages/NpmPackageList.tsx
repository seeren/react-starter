import React, { ReactElement } from 'react';

import NpmPackage from 'src/models/npm-package';
import { useNpmPackageList } from 'src/features/npm-packages';

function NpmPackageList({ name }: { name: string }): ReactElement {
  const [fetch, search] = useNpmPackageList(name);

  return (
    <div>
      {fetch ? (
        <>Loading</>
      ) : !search?.results.length ? (
        <h2>No results</h2>
      ) : (
        search?.results.map((result: NpmPackage, index: number) => (
          <div key={index}>
            <ul>
              <li>
                Name: <b>{result.package.name}</b>
              </li>
              <li>
                Description: <em>{result.package.description}</em>
              </li>
              <li>Version: {result.package.version}</li>
            </ul>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default NpmPackageList;
