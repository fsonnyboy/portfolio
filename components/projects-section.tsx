"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Heart, Store, Home, Pill } from "lucide-react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

type Project = {
  title: string;
  tagline: string;
  description: string;
  image?: string;
  icon: LucideIcon;
  accent: string;
  technologies: string[];
  liveUrl?: string | null;
  githubUrl: string;
  apkUrl?: string;
  projectType?: "web" | "mobile";
  featured: boolean;
};

const projects: Project[] = [
  {
    title: "Kalooban",
    tagline: "Filipino Mental Health Platform",
    description:
      "A multi-app Filipino mental health platform spanning user web app, therapist dashboard, admin dashboard, and a React Native mobile app. Features an anonymous community feed (Share/Vent/Confession), SOS crisis modal, Tiptap-powered journal with AI-generated bilingual prompts, breathing exercises, mood tracking with trend charts, topic support rooms, AI buddy matching, therapist booking lifecycle, admin moderation, payouts, audit logging, and 2FA login.",
    icon: Heart,
    accent: "from-rose-500/30 to-pink-500/30",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Anthropic Claude AI",
      "TanStack Query",
      "Tiptap",
      "Recharts",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/fsonnyboy",
    projectType: "web",
    featured: true,
  },
  {
    title: "City Marketplace",
    tagline: "City-Scoped Buy & Sell Platform",
    description:
      "A city-scoped buy-and-sell marketplace platform where users are geo-tied to their city. Includes bcrypt-secured auth with role-based access (User, Moderator, Admin), category-filtered listings with image carousels, negotiable pricing, in-app buyer-seller messaging, listing boosts (Basic/Standard/Premium), user subscriptions, GCash/Maya payment processing, ratings, report/moderation system, and a seller dashboard. Dark mode via next-themes.",
    icon: Store,
    accent: "from-emerald-500/30 to-teal-500/30",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Tailwind CSS",
      "Radix UI",
      "TanStack Query",
      "Framer Motion",
      "Zod",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/fsonnyboy",
    projectType: "web",
    featured: true,
  },
  {
    title: "StayWise",
    tagline: "Property Management System",
    description:
      "A dual-role property management platform for homeowners and tenants. Multi-role JWT auth with session management, bcrypt password hashing, and protected route guards. Homeowner features include property/unit CRUD with amenities and image galleries, rent payment tracking, expense management, document storage, utility tracking with meter readings, tenant application screening, and analytics. Tenants get property search, maintenance requests with photo uploads, in-app messaging with reply threading, and notifications.",
    image: "/staywise.png",
    icon: Home,
    accent: "from-blue-500/30 to-indigo-500/30",
    technologies: [
      "React Router v7",
      "React 19",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "JWT",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "https://staywise-ten.vercel.app/",
    githubUrl: "https://github.com/fsonnyboy/staywise",
    projectType: "web",
    featured: true,
  },
  {
    title: "Medicare Mobile",
    tagline: "Healthcare Mobile App",
    description:
      "A healthcare mobile app for browsing OTC and prescription medicines by category, viewing medicine details, and submitting order requests. Implements account status polling (Pending/Approved/Rejected) with real-time alerts, age-aware prescription validation, cart management, order history, and a concerns/feedback system with Formik + Yup validation. Authentication via Google Sign-In with Expo Secure Store for token persistence and AsyncStorage for offline data.",
    icon: Pill,
    accent: "from-cyan-500/30 to-sky-500/30",
    technologies: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "Recoil",
      "TanStack Query",
      "NativeWind",
      "Formik",
      "Yup",
      "Expo Secure Store",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/fsonnyboy",
    projectType: "mobile",
    featured: true,
  },
];

export default function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-muted/10 via-background to-muted/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-300" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-secondary/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            My Work
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A selection of full-stack web and mobile applications I&apos;ve built — from
            mental health platforms to property management systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20 hover:from-muted/10 hover:to-background group flex flex-col">
                  {/* Project Visual */}
                  <div className="relative aspect-video overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority
                      />
                    ) : (
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.accent} flex items-center justify-center`}
                      >
                        <div className="absolute inset-0 bg-grid-white/[0.03]" />
                        <div className="relative flex flex-col items-center gap-3 text-center px-6">
                          <div className="w-16 h-16 rounded-2xl bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <div className="text-2xl font-bold text-foreground/90">
                            {project.title}
                          </div>
                          <div className="text-sm text-muted-foreground max-w-xs">
                            {project.tagline}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      {project.projectType === "mobile" && (
                        <Badge variant="secondary" className="text-xs">
                          📱 Mobile App
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-primary/80 font-medium mb-2">
                      {project.tagline}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {project.liveUrl ? (
                        <Button size="sm" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      ) : project.apkUrl ? (
                        <Button size="sm" asChild>
                          <a
                            href={project.apkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Download APK
                          </a>
                        </Button>
                      ) : (
                        <Button size="sm" variant="secondary" disabled>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {project.projectType === "mobile"
                            ? "Mobile App"
                            : "Private Repo"}
                        </Button>
                      )}
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
