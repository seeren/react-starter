import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { OneColumn } from 'src/layouts';

function NpmPackage(): ReactElement {
  return (
    <>
      <OneColumn>
        <Outlet />
      </OneColumn>
    </>
  );
}

export default NpmPackage;
