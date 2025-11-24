import Link from "next/link";
import { BarChart3, Home, LayoutDashboard, LogOut, PieChart, Settings, Sun } from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-background">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card/30 backdrop-blur-xl">
                <div className="flex h-16 items-center border-b border-border px-6">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
                        <Sun className="h-6 w-6 text-primary" />
                        <span>Solar<span className="text-primary">Invest</span></span>
                    </Link>
                </div>

                <nav className="space-y-1 p-4">
                    <Link href="/dashboard" className="flex items-center gap-3 rounded-lg bg-primary/10 px-4 py-3 text-sm font-medium text-primary">
                        <LayoutDashboard className="h-5 w-5" />
                        Overview
                    </Link>
                    <Link href="#" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground transition-colors">
                        <PieChart className="h-5 w-5" />
                        My Investments
                    </Link>
                    <Link href="#" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground transition-colors">
                        <BarChart3 className="h-5 w-5" />
                        Analytics
                    </Link>
                    <Link href="#" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground transition-colors">
                        <Settings className="h-5 w-5" />
                        Settings
                    </Link>
                </nav>

                <div className="absolute bottom-4 left-0 w-full px-4">
                    <Link href="/" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-400/10 transition-colors">
                        <LogOut className="h-5 w-5" />
                        Log Out
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="ml-64 flex-1 p-8">
                <div className="mx-auto max-w-6xl">
                    {children}
                </div>
            </main>
        </div>
    );
}
