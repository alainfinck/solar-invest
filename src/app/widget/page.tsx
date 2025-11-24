"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { productionData } from "@/lib/mockData";
import { Leaf, Sun, Zap } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

export default function WidgetPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-transparent p-4">
            <Card className="w-full max-w-sm glass-card border-primary/30 shadow-[0_0_40px_-10px_rgba(0,255,157,0.3)]">
                <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Live Production
                        </CardTitle>
                        <Sun className="h-4 w-4 text-primary animate-[spin_10s_linear_infinite]" />
                    </div>
                    <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-4xl font-bold text-foreground text-glow">420 kW</span>
                        <span className="text-xs text-primary font-medium flex items-center bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                            <Zap className="h-3 w-3 mr-0.5" /> Active
                        </span>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="h-[120px] -mx-2 my-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={productionData}>
                                <defs>
                                    <linearGradient id="widgetGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#00ff9d" stopOpacity={0.4} />
                                        <stop offset="95%" stopColor="#00ff9d" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#00ff9d"
                                    strokeWidth={2}
                                    fill="url(#widgetGradient)"
                                    isAnimationActive={true}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20">
                                <Leaf className="h-4 w-4" />
                            </div>
                            <div>
                                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">CO2 Saved</div>
                                <div className="text-sm font-bold text-foreground">12.5 Tons</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-[10px] text-muted-foreground">Powered by</div>
                            <div className="text-xs font-bold text-primary tracking-wide">SolarInvest</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
