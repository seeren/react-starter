import React, {
  ReactElement,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Input({
  id,
  state,
  dispatch,
}: {
  id: string;
  state: string;
  dispatch: Dispatch<SetStateAction<string>>;
}): ReactElement {
  return (
    <div className='flex'>
      <input
        className='shadow border rounded py-2 px-3 mr-2 text-gray-700 leading-tight focus:shadow-outline'
        id={id}
        type='search'
        value={state}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          dispatch(event.target.value)
        }
      ></input>
      <button type='submit'>
        <MagnifyingGlassIcon className='w-6 cursor-pointer' />
      </button>
    </div>
  );
}

export default Input;
