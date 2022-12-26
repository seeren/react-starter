# Services

Services handle domain logic.

They are used when logic is needed.

* * *

## 📏 Usage

A Vanilla example is to handle server response and formating to project models:

_services/apis/npm-package-api.ts_

```jsx
import axios, { AxiosResponse } from 'axios';

import { NpmPackageResult } from 'src/models';

function npmPackageApi(): [(name: string) => Promise<NpmPackageResult>] {
  async function search(name: string): Promise<NpmPackageResult> {
    const response: AxiosResponse = await axios.get(
      `https://api.npms.io/v2/search?q=${name}`,
    );

    return response.data;
  }

  return [search];
}

export default npmPackageApi;
```

* * *

## 🔗 References

-   <https://redux-toolkit.js.org/rtk-query/api/createApi>
