import React, { ReactElement } from 'react';

function Label({ id, text }: Record<string, string>): ReactElement {
  return (
    <label className='text-gray-800 font-light' htmlFor={id}>
      {text}
    </label>
  );
}

export default Label;
