import { CustomerDashboard } from "@/components/dashboard/CustomerDashboard";

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Customer Dashboard</h1>
                <p className="text-slate-500">Manage your saved properties, recent searches, and account settings.</p>
            </header>
            <CustomerDashboard />
        </div>
    );
}
