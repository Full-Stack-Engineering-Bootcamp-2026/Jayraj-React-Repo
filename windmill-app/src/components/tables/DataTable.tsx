import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function DataTable({ data }) {
  
  const getStatusStyle = (status) => {
    if (status === "Alive") return "bg-green-500/10 text-green-500";
    if (status === "Dead") return "bg-red-500/10 text-red-500";
    return "bg-gray-500/10 text-gray-500";
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Species</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data?.map((item) => (
          <TableRow key={item.id}>
            
            <TableCell>
              <img
                src={item.image}
                className="w-9 h-9 rounded-full"
              />
            </TableCell>

            <TableCell className="text-sm font-medium">
              {item.name}
            </TableCell>

            <TableCell>
              <span
                className={`px-2 py-1 text-xs rounded-full ${getStatusStyle(
                  item.status
                )}`}
              >
                {item.status}
              </span>
            </TableCell>

            <TableCell className="text-sm">
              {item.species}
            </TableCell>

            
            <TableCell>
              <div className="flex items-center justify-center gap-3">
                
                <button className="text-primary hover:scale-110 transition">
                  <FiEdit size={16} />
                </button>

                <button className="text-red-500 hover:scale-110 transition">
                  <FiTrash2 size={16} />
                </button>

              </div>
            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}