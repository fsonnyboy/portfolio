"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Smartphone,
  Server,
  Wrench,
  Zap,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    skills: [
      { name: "React 19", level: 95 },
      { name: "Next.js 15", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "React Router", level: 88 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "NestJS", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Prisma ORM", level: 90 },
      { name: "PostgreSQL", level: 90 },
      { name: "Redis", level: 85 },
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    skills: [
      { name: "React Native", level: 88 },
      { name: "Expo", level: 88 },
      { name: "Recoil", level: 82 },
      { name: "React Query", level: 88 },
      { name: "NativeWind", level: 85 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    skills: [
      { name: "Git", level: 92 },
      { name: "Vercel", level: 88 },
      { name: "REST APIs", level: 92 },
      { name: "JWT", level: 88 },
      { name: "bcrypt", level: 85 },
      { name: "Expo Secure Store", level: 82 },
    ],
  },
  {
    title: "Database & Storage",
    icon: Database,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "Redis", level: 85 },
      { name: "Prisma", level: 90 },
      { name: "AsyncStorage", level: 82 },
      { name: "Expo Secure Store", level: 82 },
    ],
  },
  {
    title: "Other",
    icon: Zap,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    skills: [
      { name: "Agile", level: 90 },
      { name: "CI/CD", level: 82 },
      { name: "AI Automation", level: 85 },
      { name: "Performance Optimization", level: 90 },
    ],
  },
];

const technologies = [
  "React 19", "Next.js 15", "TypeScript", "NestJS", "Express.js", "Node.js",
  "PostgreSQL", "Redis", "Prisma ORM", "React Native", "Expo", "Recoil",
  "React Query", "NativeWind", "Tailwind CSS", "Framer Motion", "JWT", "bcrypt",
  "REST APIs", "Vercel", "Git", "AI Automation",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-primary/8 to-blue-500/8 rounded-full blur-3xl animate-pulse delay-400" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-secondary/8 to-purple-500/8 rounded-full blur-3xl animate-pulse delay-800" />
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
            Skills & Technologies
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Technical
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the technologies 
            I work with to build exceptional digital experiences.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20 hover:from-muted/10 hover:to-background">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${category.bgColor} mr-3`}
                    >
                      <category.icon className={`h-5 w-5 ${category.color}`} />
                    </motion.div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            className={`h-2 rounded-full ${category.bgColor}`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-6">
                Additional Skills & Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-primary" />
                    Soft Skills
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Agile/Scrum Methodology</li>
                    <li>• Team Leadership</li>
                    <li>• Code Review & Mentoring</li>
                    <li>• Project Management</li>
                    <li>• Problem Solving</li>
                    <li>• Communication</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-primary" />
                    Certifications
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• AWS Certified Developer</li>
                    <li>• Google Cloud Professional</li>
                    <li>• React Developer Certification</li>
                    <li>• TypeScript Fundamentals</li>
                    <li>• Agile Project Management</li>
                    <li>• Accessibility Compliance</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </section>
  );
}
