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
