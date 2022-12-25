import React, { ReactElement } from 'react';

function NpmPackageItem({ name }: { name: string }): ReactElement {
  return <div>{name}</div>;
}

export default NpmPackageItem;
