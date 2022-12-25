import React, { ReactElement } from 'react';

function Toolbar({ children }: Record<string, ReactElement>): ReactElement {
  return (
    <div className='bg-gray-800'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='flex flex-1 items-stretch justify-start'>
            <div className='flex space-x-4'>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
