import { useEffect, useRef, useState } from "react";
import axios from "axios";

import DataTable from "./DataTable";

export default function InfiniteTable() {
  const [data, setData] = useState([]);
  const [next, setNext] = useState(null);
  const [loading, setLoading] = useState(false);

  const observerRef = useRef(null);

  const fetchData = async (url) => {
    if (!url || loading) return;

    setLoading(true);

    try {
      const res = await axios.get(url);

      setData((prev) => [...prev, ...res.data.results]); 
      setNext(res.data.info.next);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  
  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/character");
  }, []);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && next) {
          fetchData(next);
        }
      },
      {
        root: document.querySelector("#scroll-container"),
        threshold: 1,
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [next]);

  return (
    <div className="bg-background p-3 rounded-md border">
      
      <div
        id="scroll-container"
        className="max-h-120 overflow-auto"
      >
        <DataTable data={data} />

        
        <div ref={observerRef} className="h-10 flex items-center justify-center">
          {loading && <span className="text-sm text-muted-foreground">Loading...</span>}
          {!next && <span className="text-sm text-muted-foreground">No more data</span>}
        </div>
      </div>

    </div>
  );
}