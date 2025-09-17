import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { BellIcon, HeartIcon, CoffeeIcon } from "lucide-react";
import React from "react";

const items = [
  {
    title: "Coffees",
    href: "#",
    icon: CoffeeIcon,
  },
  {
    title: "Favorites",
    href: "#",
    icon: HeartIcon,
  },
  {
    title: "Notifications",
    href: "#",
    icon: BellIcon,
  },
];

function AppSidebar() {
  return (
    <Sidebar collapsible="icon">{/* NENHUM className de position aqui */}
      <SidebarHeader className="px-3 py-3">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-xl border flex items-center justify-center">☕️</div>
          <span className="text-sm font-medium">Coffee App</span>
        </div>
      </SidebarHeader>


      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {/* tooltip ajuda quando estiver colapsada a barra */}
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>


      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar;
