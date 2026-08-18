"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "OwnAChord",
    role: "Full Stack Developer",
    period: "November 2025 – Present",
    type: "Full-time",
    highlights: [
      "Working on WholeNote, a music industry management platform serving artists, bands, labels, and venues.",
      "Developed and maintained frontend features using React, TypeScript, TanStack Query, Zustand, and Tailwind CSS across multi-role layouts (Artist, Label, Venue, Admin).",
      "Built and integrated backend API controllers covering music catalog, royalties, events, promotions, and asset management.",
      "Collaborated on Firebase-based authentication and data flows.",
    ],
    tech: ["React", "TypeScript", "TanStack Query", "Zustand", "Tailwind CSS", "Firebase"],
    accent: "from-violet-500/20 to-purple-500/20",
    dotColor: "bg-violet-500",
  },
  {
    company: "Quantum Technologies Inc.",
    role: "Associate Software Engineer (Backend)",
    period: "May 2025 – October 2025",
    type: "Full-time",
    highlights: [
      "Developed and maintained NestJS-based APIs for a social media platform serving thousands of users.",
      "Implemented Redis caching, reducing server response times by 80% and improving user experience.",
      "Built AI automation workflows that streamlined internal moderation tasks and boosted operational efficiency.",
      "Collaborated cross-functionally in an Agile setup to deploy scalable backend systems.",
    ],
    achievements: [
      "Enhanced API throughput and latency via distributed caching strategies.",
      "Designed robust authentication and session management improving system security.",
    ],
    tech: ["NestJS", "Node.js", "Redis", "PostgreSQL", "JWT", "AI Automation"],
    accent: "from-blue-500/20 to-cyan-500/20",
    dotColor: "bg-blue-500",
  },
  {
    company: "Digital Transformation Corporation",
    role: "Junior Frontend Developer",
    period: "August 2023 – May 2025",
    type: "Full-time",
    highlights: [
      "Contributed to two full-stack projects — a productivity tracker similar to Toggl and a mobile application built with React Native and Expo.",
      "Developed modern, responsive UIs using React.js and Next.js integrated with backend APIs.",
      "Improved user engagement by implementing real-time data synchronization and optimized rendering workflows.",
      "Participated in Agile sprints, code reviews, and debugging to ensure maintainable and scalable codebases.",
    ],
    achievements: [
      "Delivered cross-platform solutions across web and mobile, ensuring design consistency and performance parity.",
      "Strengthened product quality by contributing to end-to-end feature delivery in collaboration with backend teams.",
    ],
    tech: ["React.js", "Next.js", "React Native", "Expo", "TypeScript"],
    accent: "from-emerald-500/20 to-teal-500/20",
    dotColor: "bg-emerald-500",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-primary/8 to-blue-500/8 rounded-full blur-3xl animate-pulse delay-300" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-secondary/8 to-purple-500/8 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Work History
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Professional
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            3+ years building production-grade web and mobile applications across
            frontend, backend, and full-stack roles.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 top-6 w-3 h-3 rounded-full border-2 border-background shadow-md -translate-x-1/2 hidden md:block z-10">
                  <div className={`w-full h-full rounded-full ${exp.dotColor}`} />
                </div>

                {/* Date label (desktop) */}
                <div
                  className={`hidden md:flex items-start justify-end w-1/2 pt-5 ${
                    index % 2 === 0 ? "pr-10 text-right" : "pl-10 flex-row-reverse text-left"
                  }`}
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 shrink-0" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}>
                  <Card className={`border-0 bg-gradient-to-br ${exp.accent} hover:shadow-xl transition-all duration-300`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-background/70 backdrop-blur-sm flex items-center justify-center shadow shrink-0">
                          <Briefcase className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg leading-tight">{exp.role}</h3>
                          <p className="text-primary font-medium text-sm">{exp.company}</p>
                          {/* Date label (mobile) */}
                          <p className="text-xs text-muted-foreground mt-1 md:hidden flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> {exp.period}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary mt-1 shrink-0">▸</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.achievements && (
                        <div className="mb-4 border-l-2 border-primary/40 pl-3">
                          <p className="text-xs font-semibold text-foreground/70 mb-1 uppercase tracking-wide">Key Achievements</p>
                          {exp.achievements.map((a, i) => (
                            <p key={i} className="text-xs text-muted-foreground mb-1">• {a}</p>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <Badge key={t} variant="outline" className="text-xs bg-background/50">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-3">Education</Badge>
            <h3 className="text-2xl font-bold">Academic Background</h3>
          </div>
          <Card className="border-0 bg-gradient-to-br from-amber-500/15 to-orange-500/15 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-background/70 backdrop-blur-sm flex items-center justify-center shadow shrink-0">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Bachelor of Science in Information Technology</h4>
                <p className="text-primary font-medium text-sm">Northwest Samar State University</p>
                <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> Graduated 2023</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Calbayog City, Samar</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
