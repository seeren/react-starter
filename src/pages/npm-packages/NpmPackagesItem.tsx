import React, { ReactElement } from 'react';
import type { Params } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { NpmPackageItem } from 'src/features';

function NpmPackagesItem(): ReactElement {
  const { name }: Readonly<Params<string>> = useParams();

  return (
    <>
      <h1 className='text-2xl my-6'>Seach article: {name}</h1>
      <section className='pb-8'>
        <NpmPackageItem name={`${name}`} />
      </section>
    </>
  );
}

export default NpmPackagesItem;
