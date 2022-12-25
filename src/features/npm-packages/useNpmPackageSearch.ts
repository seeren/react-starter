import { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useNpmPackageSearch(): [
  string,
  Dispatch<SetStateAction<string>>,
  () => boolean,
] {
  const navigate = useNavigate();
  const [search, setSearch] = useState(String);
  const onSearch = (): boolean => Boolean(navigate(`/npm/packages/${search}`));

  return [search, setSearch, onSearch];
}

export default useNpmPackageSearch;
