import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { ModeToggle } from "@/components/extra/ModeToggle";

import {
  FiBell,
  FiLogOut,
  FiSearch,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const Navbar = () => {
  return (
    <div className="flex items-center px-4 py-3 bg-background text-foreground border-b">
      
      <div className="md:hidden mr-2">
        <SidebarTrigger  className="text-primary"/>
      </div>
      
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-md">
          
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-primary text-base" />

          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-md pl-10 pr-3 py-2 text-sm bg-background border"
          />
        </div>
      </div>

      
      <div className="flex items-center gap-3">
        
        <ModeToggle />

        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="w-9 h-9 flex items-center justify-center rounded-md cursor-pointer">
              <FiBell className="text-lg text-primary" />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem>Message</DropdownMenuItem>
            <DropdownMenuItem>Sales</DropdownMenuItem>
            <DropdownMenuItem>Alerts</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

    
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="w-9 h-9 flex items-center justify-center cursor-pointer">
              <img
                src="https://i.pravatar.cc/30"
                className="w-7 h-7 rounded-full"
              />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <FiUser /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FiSettings /> Setting
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FiLogOut /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </div>
  );
};