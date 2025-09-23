"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Home, Inbox, BarChart3, Settings, HelpCircle, HomeIcon, HeartIcon, BellIcon } from "lucide-react";
import Link from "next/link";
import React, { ReactElement, ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
        className="px-2"
      >
        <SidebarGroup className="w-full">
          <SidebarGroupContent>
            {items.map((item) => (
              <SidebarMenuItem
                key={item.title}
                className="list-none"
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
      </SidebarContent>
    </Sidebar>
  );
}