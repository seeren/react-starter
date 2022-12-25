import { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useArticleSearch(): [
  string,
  Dispatch<SetStateAction<string>>,
  () => boolean,
] {
  const navigate = useNavigate();
  const [search, setSearch] = useState(String);
  const onSearch = (): boolean => Boolean(navigate(`/articles/${search}`));

  return [search, setSearch, onSearch];
}

export default useArticleSearch;
