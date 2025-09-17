"use client"
import { SidebarInset, SidebarTrigger, useSidebar } from "@/components/ui/sidebar"

export function MainArea({ children }: { children?: React.ReactNode }) {
  const { state } = useSidebar()
  const pad = state === "collapsed" ? "var(--sidebar-width-icon)" : "var(--sidebar-width)"

  return (
    <div
      className="h-full"
      style={{ paddingLeft: pad, transition: "padding-left 200ms ease" }}
    >
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-2 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
          <SidebarTrigger className="mr-1" />
          <h1 className="text-lg font-semibold tracking-tight">Minha página</h1>
        </header>
      </SidebarInset>

      <main className="p-6">
        {children ?? (
          <div className="grid gap-6">
            <div className="rounded-2xl border p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Exemplo de conteúdo</h2>
              <p className="text-muted-foreground">
                A sidebar à esquerda é constante e não sobrepõe o conteúdo. Quando colapsa,
                vira um rail só com ícones; ao expandir, aparece o texto.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}