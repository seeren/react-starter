import React, { ReactElement } from 'react';

import { InputSearch, Label } from 'src/components';
import useArticleSearch from './useArticleSearch';

function ArticleSearchInput(): ReactElement {
  const [search, setSearch, onSearch] = useArticleSearch();

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

export default ArticleSearchInput;
