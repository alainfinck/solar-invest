"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ArrowRight, BarChart3, Leaf, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-40 md:pt-48">
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-30 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/10 rounded-full blur-[100px] -z-10 opacity-20" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8 backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse shadow-[0_0_10px_#4ade80]"></span>
              Now accepting new investors
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-5xl text-6xl font-bold tracking-tight md:text-8xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50"
            >
              Invest in the <br />
              <span className="text-primary text-glow">Future of Energy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed"
            >
              Join the green revolution. Invest in solar plants, track your real-time production, and showcase your environmental impact to the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
            >
              <Link href="/dashboard">
                <Button size="lg" className="h-16 px-10 text-lg rounded-full shadow-[0_0_30px_-5px_var(--primary)] hover:shadow-[0_0_50px_-5px_var(--primary)] transition-all duration-300">
                  Start Investing <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="h-16 px-10 text-lg rounded-full border-white/10 hover:bg-white/5 hover:border-primary/50 transition-all duration-300">
                View Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-4 border-y border-white/5 py-12 bg-black/20 backdrop-blur-md"
            >
              {[
                { label: "Solar Plants", value: "125+" },
                { label: "Total Capacity", value: "45MW" },
                { label: "Invested", value: "$12M+" },
                { label: "Avg. APY", value: "8.5%" },
              ].map((stat, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-primary/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 relative">
          <div className="container mx-auto px-4">
            <div className="mb-20 text-center">
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">
                Why Invest with <span className="text-primary">SolarInvest</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We make it easy to grow your wealth while saving the planet.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: BarChart3,
                  title: "Real-time Analytics",
                  desc: "Monitor your energy production and earnings in real-time with our advanced dashboard.",
                  color: "text-primary"
                },
                {
                  icon: Zap,
                  title: "Embeddable Widget",
                  desc: "Showcase your commitment to sustainability by embedding a live production widget on your website.",
                  color: "text-secondary"
                },
                {
                  icon: Leaf,
                  title: "Tangible Impact",
                  desc: "See exactly how many tons of CO2 you've offset and trees you've planted with your investment.",
                  color: "text-accent"
                }
              ].map((feature, i) => (
                <Card key={i} className="glass-card border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 group">
                  <CardHeader>
                    <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 ${feature.color} group-hover:scale-110 transition-transform duration-500`}>
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 bg-black/40 backdrop-blur-xl">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 Solar Invest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
