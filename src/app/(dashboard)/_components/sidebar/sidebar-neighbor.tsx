"use client"

import { useSidebar } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import React from 'react'

interface Props extends React.ComponentPropsWithoutRef<'div'> {

}

export function SidebarNeighbor({ className, children, ...rest }: Props) {

  const { open } = useSidebar();

  return (
    <div
      {...rest}
      className={
        cn(
          "w-full",
          rest,
          open ?
            "pl-[calc(var(--sidebar-width)/2)]"
            : "pl-[calc(var(--sidebar-width)/4)]"
        )
      }
    >
      {children}
    </div>
  )
}


