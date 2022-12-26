import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type {} from 'redux-thunk/extend-redux';

import { searchNpmPakage } from 'src/slices/npm-package-slice';
import { selectNpmPackage } from 'src/selectors';
import { NpmPackageResult } from 'src/models';

function useNpmPackageList(
  name: string,
): [boolean, NpmPackageResult | undefined] {
  const dispatch = useDispatch();
  const { fetch, search } = useSelector(selectNpmPackage);

  useEffect(() => {
    dispatch(searchNpmPakage(name));
  }, [name, dispatch]);

  return [fetch, search];
}

export default useNpmPackageList;
