import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

import { PiCards, PiCardsThreeBold, PiChartPieSliceThin } from "react-icons/pi";
import { LuBlocks, LuNotepadText } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineCursorClick } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", icon: AiOutlineHome, path: "/" },
  { label: "Form", icon: LuNotepadText, path: "/form" },
  { label: "Cards", icon: PiCardsThreeBold, path: "/cards" },
  { label: "Charts", icon: PiChartPieSliceThin, path: "/charts" },
  { label: "Buttons", icon: HiOutlineCursorClick, path: "/buttons" },
  { label: "Modal", icon: PiCards, path: "/modal" },
  { label: "Tables", icon: GiHamburgerMenu, path: "/tables" },
];

function AppSidebar() {
  const location = useLocation();
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar className="h-screen border-none bg-background">
      <SidebarHeader className="text-lg font-semibold px-4 py-3">
        My App
      </SidebarHeader>

      <SidebarContent className="flex flex-col h-full py-4">
        <div className="flex-1 flex ">
          <SidebarMenu className="flex flex-col gap-3 px-3 w-full">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild isActive={isActive}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-3 py-2 ${isActive ? "font-bold scale-110" : ""}
                      `}
                      onClick={() => setOpenMobile(false)}
                    >
                      <Icon className="text-base text-primary" />
                      <span className="text-base font-medium">
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}

            <SidebarMenuItem>
              <Accordion type="single" collapsible className="w-full space-y-0">
                <AccordionItem value="pages" className="border-none p-0 m-0">
                  <AccordionTrigger className="px-3 py-1.5 min-h-0 h-auto hover:no-underline">
                    <div className="flex items-center gap-3 w-full">
                      <LuBlocks className="text-base text-primary" />
                      <span className="text-base font-medium">Pages</span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="mt-1 ml-3 mr-2 p-0 bg-transparent">
                    <div className="px-2 py-1 bg-muted/50 rounded-md flex flex-col gap-1">
                      <Link
                        to="/login"
                        className="text-sm px-2 py-1 no-underline! hover:no-underline! hover:bg-muted rounded-sm"
                      >
                        Login
                      </Link>

                      <Link
                        to="/create-account"
                        className="text-sm px-2 py-1 no-underline! hover:no-underline! hover:bg-muted rounded-sm"
                      >
                        Create Account
                      </Link>

                      <Link
                        to="/reset-password"
                        className="text-sm px-2 py-1 no-underline! hover:no-underline! hover:bg-muted rounded-sm"
                      >
                        Reset Password
                      </Link>

                      <Link
                        to="/*"
                        className="text-sm px-2 py-1 no-underline! hover:no-underline! hover:bg-muted rounded-sm"
                        onClick={() => setOpenMobile(false)}
                      >
                        404 Page
                      </Link>

                      <Link
                        to="/blank"
                        className="text-sm px-2 py-1 no-underline! hover:no-underline! hover:bg-muted rounded-sm"
                        onClick={() => setOpenMobile(false)}
                      >
                        Blank Page
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SidebarMenuItem>

            <div className="px-3 mt-2">
              <Button asChild className="w-full text-sm">
                <Link to="/create-account">Create Account</Link>
              </Button>
            </div>
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
