



import { SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

export function Header() {
  return (
    <header className='border-b flex justify-between h-[var(--navbar-height)] shrink-0 items-center gap-2'>
      <div className='flex items-center gap-2 px-4'>
          <SidebarTrigger className='-ml-1' />
      </div>
    </header>
  )
}

