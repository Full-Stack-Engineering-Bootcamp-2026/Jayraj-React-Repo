import React from "react";
import { useReactTable, getCoreRowModel, flexRender, } from "@tanstack/react-table";

function Table() {
  const data = [
    { id: 1, task: "Learn React", status: "Pending", priority: "High" },
    { id: 2, task: "Build Project", status: "In Progress", priority: "Medium" },
    { id: 3, task: "Revise Java", status: "Completed", priority: "Low" },
  ];

  const columns = [
    {
      header: "Task",
      accessorKey: "task",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "Priority",
      accessorKey: "priority",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table border="1">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(
                  cell.column.columnDef.cell ?? cell.getValue(),
                  cell.getContext(),
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
