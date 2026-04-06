import React, { useState , useRef , useEffect } from "react";
import Table from "./Table";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

function SortableTable({ data, config, keyFn }) {
  const [sortOrder, setSortOrder] = useState(null); // 'asc' | 'desc' | null
  const [sortBy, setSortBy] = useState(null);
  const [visibleCount, setVisibleCount] = useState(20);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) =>{
        if(entries[0].isIntersecting ){
            setVisibleCount((prev) => prev +20);
        };
    });

    if(loaderRef.current){
        observer.observe(loaderRef.current);
    }

    return () => {
        if(loaderRef.current){
            observer.unobserve(loaderRef.current);
        }
    };

  }, []);


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

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center gap-1">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

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

  const visibleData = sortedData.slice(0, visibleCount);

  return (
    <>
      <Table data={visibleData} config={updatedConfig} keyFn={keyFn} />
      <div ref={loaderRef} className="h-10"></div>
      {/* <button
        className="mt-4 p-2 bg-blue-500 text-white"
        onClick={() => setVisibleCount((prev) => prev + 20)}
      >
        Load More
      </button> */}
    </>
  );
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy || sortOrder === null) {
    return (
      <>
        <GoArrowUp />
        <GoArrowDown />
      </>
    );
  }

  if (sortOrder === "asc") {
    return <GoArrowUp />;
  }

  return <GoArrowDown />;
}

export default SortableTable;
