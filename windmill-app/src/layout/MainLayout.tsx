import AppSidebar from "@/components/layout/AppSidebar";
import { Navbar } from "@/components/layout/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen bg-background text-foreground text-[15px]">
        
        <AppSidebar />

        <div className="flex flex-col flex-1">
          <Navbar />
          
          <div className="flex-1 overflow-auto p-4 bg-muted/50">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default MainLayout;