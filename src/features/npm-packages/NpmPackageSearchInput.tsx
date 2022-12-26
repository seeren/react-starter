import React, { ReactElement } from 'react';

import { InputSearch, Label } from 'src/components';
import { useNpmPackageSearch } from 'src/features/npm-packages';

function NpmPackageSearchInput(): ReactElement {
  const [search, setSearch, onSearch] = useNpmPackageSearch();

  return (
    <form onSubmit={onSearch} className='gap-4 flex flex-col'>
      <Label id='article-search' text='Enter article keyword'></Label>
      <InputSearch
        id='article-search'
        state={search}
        dispatch={setSearch}
      ></InputSearch>
    </form>
  );
}

export default NpmPackageSearchInput;
