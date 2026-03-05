import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-slate-50 font-sans">
            {/* Desktop Sidebar */}
            <DashboardSidebar />

            {/* Main Content Area */}
            <main className="flex-1 overflow-x-hidden overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
