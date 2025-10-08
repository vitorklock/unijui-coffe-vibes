"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { HomeIcon, HeartIcon, BellIcon, DoorOpenIcon } from "lucide-react";
import React, { } from "react";
import Image from "next/image";

interface SidebarProps extends React.ComponentProps<typeof Sidebar> {

}

interface SidebarItem {
  title: string
  url: string
  icon: any
}

const items: SidebarItem[] = [
  {
    title: "Home",
    url: "#",
    icon: HomeIcon,
  },
  {
    title: "Favorites",
    url: "#",
    icon: HeartIcon,
  },
  {
    title: "Inbox",
    url: "#",
    icon: BellIcon,
  },
]

export function AppSidebar({ ...props }: SidebarProps) {
  return (
    <Sidebar
      {...props}
      collapsible="icon"
    >
      <SidebarHeader
        className="h-[var(--navbar-height)] px-2 py-1.5 flex flex-row items-center border-b relative border-b-zinc-600">
        <Image
          alt="Logo do Leadstaker"
          src="/logo/logo.svg"
          className="object-contain p-1.5"
          fill
        />
      </SidebarHeader>

      <SidebarContent
        className="px-2 flex flex-col justify-between *:list-none"
      >
        <SidebarGroup className="w-full">
          <SidebarGroupContent>
            {items.map((item) => (
              <SidebarMenuItem
                key={item.title}
              >
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/welcome">
                  <DoorOpenIcon />
                  <span>Exit</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}