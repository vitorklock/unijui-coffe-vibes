import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/sidebar/app-sidebar";
import { Header } from "./_components/header";
import { SidebarNeighbor } from "./_components/sidebar/sidebar-neighbor";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="h-full">
      <AppSidebar />
      <SidebarInset className="h-full">
        <SidebarNeighbor
          className="flex justify-center h-full"
        >
          <Header />
          <div className="h-[calc(100%-var(--navbar-height))] w-full max-w-[1600px] overflow-y-auto px-6 py-6">
            {children}
          </div>
        </SidebarNeighbor>
      </SidebarInset>
    </SidebarProvider>
  );
}