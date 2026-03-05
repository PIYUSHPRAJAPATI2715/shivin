import { ServiceProviderDashboard } from "@/components/dashboard/ServiceProviderDashboard";

export default function ProviderDashboardPage() {
    return (
        <div className="space-y-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Provider Dashboard</h1>
                <p className="text-slate-500">Manage your active service requests, analytics, and revenue.</p>
            </header>
            <ServiceProviderDashboard />
        </div>
    );
}
