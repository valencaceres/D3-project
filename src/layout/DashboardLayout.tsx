import DashboardPanel from "~/layout/DashboardPanel"
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex ">
        <DashboardPanel/>
        <main className="flex h-full w-[73.8vw] justify-between items-center">
            {children}
        </main>
    </div>
  )
}
