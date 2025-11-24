"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { productionData, weeklyData } from "@/lib/mockData";
import { ArrowUpRight, Battery, Coins, Leaf, Sun } from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart, Bar } from "recharts";

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-glow">Dashboard</h1>
                    <p className="text-muted-foreground mt-2">Welcome back, <span className="text-primary">Green Energy Corp</span>.</p>
                </div>
                <div className="flex items-center gap-3 text-sm text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20 shadow-[0_0_15px_-5px_var(--primary)]">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                    </span>
                    System Operational
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                    { title: "Total Production", value: "45.2 MWh", icon: Sun, color: "text-primary", change: "+12%" },
                    { title: "CO2 Saved", value: "12.5 Tons", icon: Leaf, color: "text-green-400", sub: "450 trees planted" },
                    { title: "Total Earnings", value: "$12,450", icon: Coins, color: "text-yellow-400", change: "+8.2% ROI" },
                    { title: "Active Plants", value: "3 / 5", icon: Battery, color: "text-blue-400", sub: "2 under construction" },
                ].map((stat, i) => (
                    <Card key={i} className="glass-card hover:border-primary/30 transition-colors duration-300">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                            <stat.icon className={`h-4 w-4 ${stat.color}`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                            {(stat.change || stat.sub) && (
                                <p className="text-xs text-muted-foreground flex items-center mt-1">
                                    {stat.change && <ArrowUpRight className="h-3 w-3 text-primary mr-1" />}
                                    {stat.change || stat.sub}
                                </p>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Charts */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 glass-card">
                    <CardHeader>
                        <CardTitle>Live Production (kW)</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[350px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={productionData}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#00ff9d" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#00ff9d" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                    <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}kW`} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#010a05', border: '1px solid rgba(0, 255, 157, 0.3)', borderRadius: '12px', boxShadow: '0 0 20px rgba(0,0,0,0.5)' }}
                                        itemStyle={{ color: '#e2e8f0' }}
                                    />
                                    <Area type="monotone" dataKey="value" stroke="#00ff9d" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3 glass-card">
                    <CardHeader>
                        <CardTitle>Weekly Output (kWh)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[350px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={weeklyData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                    <XAxis dataKey="day" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip
                                        cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                        contentStyle={{ backgroundColor: '#010a05', border: '1px solid rgba(0, 255, 157, 0.3)', borderRadius: '12px', boxShadow: '0 0 20px rgba(0,0,0,0.5)' }}
                                        itemStyle={{ color: '#e2e8f0' }}
                                    />
                                    <Bar dataKey="value" fill="#0ea5e9" radius={[6, 6, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
