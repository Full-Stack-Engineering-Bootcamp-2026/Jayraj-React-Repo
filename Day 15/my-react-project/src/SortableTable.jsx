import React, { useState , useRef , useEffect } from "react";
import Table from "./Table";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import useSort from "./hooks/use-sort";

function SortableTable({ data, config, keyFn }) {

    const { sortOrder,sortBy, sortedData , handleClick} =useSort( data , config);
  
  const [visibleCount, setVisibleCount] = useState(20);
  const loaderRef = useRef(null);



  useEffect(() => {
    const observer = new IntersectionObserver((entries) =>{
        if(entries[0].isIntersecting ){
            setVisibleCount((prev) => prev +20);
            console.log("called");
        };
    });

    if(loaderRef.current){
        observer.observe(loaderRef.current);
    }

    return () => {
        if(loaderRef.current){
            // eslint-disable-next-line react-hooks/exhaustive-deps
            observer.unobserve(loaderRef.current);
        }
    };

  }, []);


  

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
