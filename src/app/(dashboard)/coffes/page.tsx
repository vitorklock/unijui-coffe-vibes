


import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react'

function Page() {
  return (
    <div className="flex flex-col">
     {/* Page content */}
     
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border bg-card text-card-foreground shadow-sm p-6"
            >
              <h3 className="font-semibold mb-1">Card {i + 1}</h3>
              <p className="text-sm text-muted-foreground">
                This content area automatically resizes when the sidebar expands
                or collapses.
              </p>
            </div>
          ))}
        </div>
  
    </div>
  );
}

export default Page
