import { useEffect, useState } from "react";
import axios from "axios";

import DataTable from "./DataTable";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

export default function PaginatedTable() {
  const [data, setData] = useState([]);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const [page, setPage] = useState(1);

  const fetchData = async (url) => {
    const res = await axios.get(url);

    setData(res.data.results);
    setNext(res.data.info.next);
    setPrev(res.data.info.prev);
  };

  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/character");
  }, []);

  const handleNext = () => {
    if (next) {
      fetchData(next);
      setPage((p) => p + 1);
    }
  };

  const handlePrev = () => {
    if (prev) {
      fetchData(prev);
      setPage((p) => p - 1);
    }
  };

  const getPages = () => {
    return [page - 1, page, page + 1].filter((p) => p > 0);
  };

  return (
    <div className="space-y-3">
      
     
      <div className="bg-background p-3 rounded-md border">
        <div className="max-h-120 overflow-auto">
          <DataTable data={data} />
        </div>
      </div>

      
      <div className="flex items-center justify-between">
        
        <Pagination>
          <PaginationContent>

            <PaginationItem>
              <PaginationPrevious
                onClick={handlePrev}
                className={!prev ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>

            {getPages().map((p) => (
              <PaginationItem key={p}>
                <span
                  className={`px-3 py-1 text-sm rounded-md cursor-pointer ${
                    p === page
                      ? "bg-primary text-white"
                      : "hover:bg-muted"
                  }`}
                  onClick={() => {
                    if (p === page) return;
                    fetchData(
                      `https://rickandmortyapi.com/api/character?page=${p}`
                    );
                    setPage(p);
                  }}
                >
                  {p}
                </span>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={handleNext}
                className={!next ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>

          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}