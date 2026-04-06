// import React, { useState } from 'react';
// import { FixedSizeList } from 'react-window';
// import { GoArrowUp, GoArrowDown } from 'react-icons/go';

// function VirtualizedSortableTable({ data, config, keyFn }) {
//   const [sortOrder, setSortOrder] = useState(null);
//   const [sortBy, setSortBy] = useState(null);

//   const handleClick = (label) => {
//     if (sortBy && label !== sortBy) {
//       setSortOrder('asc');
//       setSortBy(label);
//       return;
//     }

//     if (sortOrder === null) {
//       setSortOrder('asc');
//       setSortBy(label);
//     } else if (sortOrder === 'asc') {
//       setSortOrder('desc');
//     } else {
//       setSortOrder(null);
//       setSortBy(null);
//     }
//   };

//   const updatedConfig = config.map((column) => {
//     if (!column.sortValue) return column;

//     return {
//       ...column,
//       header: () => (
//         <div
//           className="cursor-pointer hover:bg-gray-100 flex items-center gap-1 p-2"
//           onClick={() => handleClick(column.label)}
//         >
//           {getIcons(column.label, sortBy, sortOrder)}
//           {column.label}
//         </div>
//       ),
//     };
//   });

//   let sortedData = data;

//   if (sortBy && sortOrder) {
//     const column = config.find((col) => col.label === sortBy);

//     sortedData = [...data].sort((a, b) => {
//       const valueA = column.sortValue(a);
//       const valueB = column.sortValue(b);

//       const reverse = sortOrder === 'asc' ? 1 : -1;

//       if (typeof valueA === 'string') {
//         return valueA.localeCompare(valueB) * reverse;
//       }

//       return (valueA - valueB) * reverse;
//     });
//   }

 
//   const Row = ({ index, style }) => {
//     const rowData = sortedData[index];

//     return (
//       <div style={style} className="flex border-b">
//         {updatedConfig.map((column) => (
//           <div key={column.label} className="p-2 flex-1">
//             {column.render(rowData)}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div>
      
//       <div className="flex border-b-2">
//         {updatedConfig.map((column) => (
//           <div key={column.label} className="flex-1">
//             {column.header ? column.header() : column.label}
//           </div>
//         ))}
//       </div>

      
//       <FixedSizeList
//         height={400}
//         itemCount={sortedData.length}
//         itemSize={50}
//         width="100%"
//       >
//         {Row}
//       </FixedSizeList>
//     </div>
//   );
// }

// function getIcons(label, sortBy, sortOrder) {
//   if (label !== sortBy || sortOrder === null) {
//     return (
//       <>
//         <GoArrowUp />
//         <GoArrowDown />
//       </>
//     );
//   }

//   if (sortOrder === 'asc') return <GoArrowUp />;
//   return <GoArrowDown />;
// }

// export default VirtualizedSortableTable;