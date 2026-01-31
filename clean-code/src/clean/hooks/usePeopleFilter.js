import { useMemo } from "react";

export function usePeopleFilter(people, search, sortKey) {
  return useMemo(() => {
    let result = [...people];

    if (search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortKey === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortKey === "height") {
      result.sort(
        (a, b) => parseInt(a.height) - parseInt(b.height)
      );
    }

    return result;
  }, [people, search, sortKey]);
}
