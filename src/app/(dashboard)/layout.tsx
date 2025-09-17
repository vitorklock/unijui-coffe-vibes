



import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React, { ReactNode } from 'react'
import AppSidebar from './_components/app-sidebar'
import { MainArea } from './_components/main-area'

function Layout({ children }: {
  children: ReactNode
}) {
  return (
    <SidebarProvider>
      {/* A sidebar deve ser IRMÃ do SidebarInset e NÃO receber position fixed */}
      <AppSidebar />

      {/* SidebarInset cuida do deslocamento do conteúdo com base no estado da sidebar */}
      <SidebarInset>
        <header className="sticky top-0 z-20 flex h-12 items-center gap-2 border-b bg-background/70 backdrop-blur px-3">
          <SidebarTrigger />
          <span className="font-semibold">Coffee App</span>
        </header>


        <main className="p-6">
          {children ?? (
            <div className="rounded-2xl border p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Conteúdo</h2>
              <p className="text-muted-foreground">
                Clique no botão no topo para colapsar/expandir. O conteúdo move junto.
              </p>
            </div>
          )}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Layout
