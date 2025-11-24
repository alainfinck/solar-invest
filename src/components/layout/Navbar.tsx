import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Sun } from "lucide-react";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
                    <Sun className="h-6 w-6 text-primary animate-pulse" />
                    <span>Solar<span className="text-primary">Invest</span></span>
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
                    <Link href="#impact" className="hover:text-foreground transition-colors">Impact</Link>
                    <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/dashboard">
                        <Button variant="ghost" size="sm">Log in</Button>
                    </Link>
                    <Link href="/dashboard">
                        <Button size="sm">Get Started</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
