import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { OneColumn } from 'src/layouts';

function Articles(): ReactElement {
  return (
    <>
      <OneColumn>
        <Outlet />
      </OneColumn>
    </>
  );
}

export default Articles;
