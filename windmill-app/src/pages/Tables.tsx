import { useState } from "react";
import PaginatedTable from "@/components/tables/PaginatedTable";
import InfiniteTable from "@/components/tables/InfiniteTable";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function Tables() {
  const [mode, setMode] = useState("pagination");

  return (
    <div className="space-y-4">
      <div className="relative flex items-center">
        <h1 className="text-lg font-semibold">Tables</h1>

        <div className="absolute left-1/2 -translate-x-1/2">
          <ToggleGroup
            type="single"
            value={mode}
            onValueChange={(value) => {
              if (value) setMode(value);
            }}
            className="bg-muted p-1 rounded-full"
          >
            <ToggleGroup
              type="single"
              value={mode}
              onValueChange={(value) => {
                if (value) setMode(value);
              }}
              className="bg-muted p-1 rounded-full"
            >
              <ToggleGroupItem
                value="pagination"
                className="px-4 py-1 text-sm transition-colors 
               data-[state=on]:bg-primary 
               data-[state=on]:text-primary-foreground
               data-[state=on]:rounded-l-full"
              >
                Pagination
              </ToggleGroupItem>

              <ToggleGroupItem
                value="infinite"
                className="px-4 py-1 text-sm transition-colors 
               data-[state=on]:bg-primary 
               data-[state=on]:text-primary-foreground
               data-[state=on]:rounded-r-full"
              >
                Infinite Scroll
              </ToggleGroupItem>
            </ToggleGroup>
          </ToggleGroup>
        </div>
      </div>

      {mode === "pagination" && <PaginatedTable />}
      {mode === "infinite" && <InfiniteTable />}
    </div>
  );
}
