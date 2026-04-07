import { useState }  from 'react'

function useSort( data , config) {
  const [sortOrder, setSortOrder] = useState(null); // 'asc' | 'desc' | null
    const [sortBy, setSortBy] = useState(null);


    const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  let sortedData = data;

  if (sortBy && sortOrder) {
    const column = config.find((col) => col.label === sortBy);

    sortedData = [...data].sort((a, b) => {
      const valueA = column.sortValue(a);
      const valueB = column.sortValue(b);

      const reverse = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverse;
      }

      return (valueA - valueB) * reverse;
    });
  }


  return{
    sortOrder,
    sortBy,
    sortedData,
    handleClick
  };
}

export default useSort;