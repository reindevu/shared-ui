import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FC, useEffect, useState } from "react";
import { useGenericTableFilter } from "../../model/use-generic-table-filter";
import { Input } from "../../../input";
import { Button } from "../../../button";

export const GenericTableSearch:FC = () => {
  const { filter, setFilter } = useGenericTableFilter({ keys: ["q"] });

  const [query, setQuery] = useState<string>("");

  const handleSearch = () => {
    setFilter({ ...filter, q: query });
  };

  useEffect(() => {
    setQuery(filter.q ?? "");
  }, [filter.q]);

  return (
    <div className="relative w-full md:w-fit mb-4">
      <Input
        type="text"
        className="w-full md:w-96"
        value={query}
        placeholder="Введите текст для поиска"
        onChange={(e) => setQuery(e.currentTarget.value)}
      />

      <div className="absolute top-1/2 -translate-y-2/4 right-1">
        <Button className="h-6 w-6 p-0 text-xs" onClick={handleSearch}>
          <MagnifyingGlassIcon className="text-violet-700 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
