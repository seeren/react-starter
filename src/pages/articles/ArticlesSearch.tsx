import React, { ReactElement } from 'react';

import { ArticleSearchInput } from 'src/features';

function ArticlesSearch(): ReactElement {
  return (
    <>
      <h1 className='text-2xl my-6'>Seach article</h1>
      <section className='flex flex-col pb-8 flex-grow items-center justify-center'>
        <ArticleSearchInput />
      </section>
    </>
  );
}

export default ArticlesSearch;
