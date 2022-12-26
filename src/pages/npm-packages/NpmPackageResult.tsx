import React, { ReactElement } from 'react';
import type { Params } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { NpmPackageList } from 'src/features';

function NpmPackageResult(): ReactElement {
  const { name }: Readonly<Params<string>> = useParams();

  return (
    <>
      <h1 className='text-2xl my-6'>Seach article: {name}</h1>
      <section className='pb-8'>
        <NpmPackageList name={`${name}`} />
      </section>
    </>
  );
}

export default NpmPackageResult;
