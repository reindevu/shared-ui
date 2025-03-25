import { useEffect, useMemo, useState } from "react";
import { objectToFilterString } from "./object-to-filter-string";
import { GENERIC_PAGINATION_PN, GENERIC_PAGINATION_PS } from "./constants";

type UseGenericTableFilterProps = {
  keys: string[]
};

export const useGenericTableFilter = (props: UseGenericTableFilterProps) => {
  const keys = useMemo(() => Array.from(new Set(props.keys)), [props.keys]);

  type FilterProperty = typeof keys[number];
  type Filter = Record<FilterProperty, string>;

  const defaultFilter: Filter = { ps: GENERIC_PAGINATION_PS, pn: GENERIC_PAGINATION_PN } as Filter;

  const [filter, setFilterState] = useState<Filter>(defaultFilter);
  // const [searchParams] = useSearchParams();
  // const navigate = useNavigate();
  // const location = useLocation();


  const updateFilterFromParams = () => {
    const newFilter = { ...defaultFilter };

    // keys.forEach((key) => {
    //   const value = searchParams.get(key);
    //   if (value !== null) {
    //     newFilter[key] = value;
    //   }
    // });

    setFilterState(newFilter);
  };

  const setFilter = (newFilter: Filter) => {
    objectToFilterString(newFilter);
    // navigate(`?${queryString}`);
  };

  useEffect(() => {
    updateFilterFromParams();
  }, [location.search]);

  return { filter, setFilter}
};