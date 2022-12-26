# Components

Components are independent and reusable bits of code, group them by types.

Components are used by [Components](./../components/), [Pages](./../pages/), [Layouts](./../layouts/) and [Features](./../features/).

* * *

## 📏 Usage

Declare shared components used by pages, layouts and features. **They are not dependant on <ins>project</ins> [Hooks](./../hooks/), [Selectors](./../selectors/), [Slices](./../slices/) or other state, event handler**.

_components/inputs/InputSearch.tsx_

```ts
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
        className='shadow border rounded py-2 px-3 text-gray-700 leading-tight'
        id={id}
        type='search'
        value={state}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          dispatch(event.target.value)
        }
      ></input>
      <button type='submit'>
        <MagnifyingGlassIcon className='ml-2 w-6 cursor-pointer' />
      </button>
    </div>
  );
}

export default Input;
```

They are fully reusable and use props, events and variants for domain logic integration.

* * *

## 🔗 References

-   <https://joyofcode.xyz/react-project-structure#components>
