import React from 'react';
import SortableTable from './SortableTable';
//import VirtualizedSortableTable from './VirtualizedSortableTable';

function TablePages() {
  const data = Array.from({ length: 100 }, (_, index) => {
  const fruits = ['Apple', 'Orange', 'Banana', 'Mango', 'Grapes'];
  const colors = [
    'bg-red-500',
    'bg-orange-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-purple-500',
  ];

  return {
    name: `${fruits[index % fruits.length]} ${index + 1}`,
    color: colors[index % colors.length],
    score: Math.floor(Math.random() * 10) + 1,
  };
});

  const config = [
    {
      label: 'Name',
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: 'Color',
      render: (fruit) => (
        <div className={`p-3 m-2 ${fruit.color}`} />
      ),
    },
    {
      label: 'Score',
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => fruit.name;

  return (
    <div className="p-4">
      <SortableTable data={data} config={config} keyFn={keyFn} />
      {/* <VirtualizedSortableTable data={data} config={config} keyFn={keyFn} /> */}
    </div>
  );
}

export default TablePages;