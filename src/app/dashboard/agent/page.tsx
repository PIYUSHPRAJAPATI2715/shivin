import { AgentDashboard } from "@/components/dashboard/AgentDashboard";

export default function AgentDashboardPage() {
    return (
        <div className="space-y-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Agent / Staff Dashboard</h1>
                <p className="text-slate-500">Manage your property listings, leads pipeline, and performance metrics.</p>
            </header>
            <AgentDashboard />
        </div>
    );
}
