import { AssociateDashboard } from "@/components/dashboard/AssociateDashboard";

export default function AssociateDashboardPage() {
    return (
        <div className="space-y-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Associate Dashboard</h1>
                <p className="text-slate-500">Track team performance, brokerage statistics, and co-listing management.</p>
            </header>
            <AssociateDashboard />
        </div>
    );
}
