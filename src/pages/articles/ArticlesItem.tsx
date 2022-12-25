import React, { ReactElement } from 'react';
import type { Params } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ArticlesItem(): ReactElement {
  const { id }: Readonly<Params<string>> = useParams();

  return (
    <>
      <h2>Item {id} </h2>
    </>
  );
}

export default ArticlesItem;
