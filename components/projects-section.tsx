"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "StayWise",
    description: "A comprehensive property management platform that revolutionizes how homeowners manage rentals and tenants find homes. Features automated rent collection, tenant screening, performance analytics, and seamless communication tools.",
    images: [
      "/staywise.png",
      "/api/placeholder/800/450",
      "/api/placeholder/800/450",
      "/api/placeholder/800/450",
      "/api/placeholder/800/450"
    ],
    technologies: ["React Router 7", "TypeScript", "React", "PostgreSQL", "Prisma", "Tailwind CSS"],
    liveUrl: "https://staywise-ten.vercel.app/",
    githubUrl: "https://github.com/fsonnyboy/staywise",
    featured: true,
  },
  {
    title: "Church Management System",
    description: "A modern church management platform designed to streamline administrative tasks, member management, and community engagement for religious organizations.",
    images: [
      "/church.png",
      "/api/placeholder/800/450",
      "/api/placeholder/800/450",
      "/api/placeholder/800/450",
      "/api/placeholder/800/450"
    ],
    technologies: ["Next.js", "TypeScript", "React", "PostgreSQL", "Prisma", "Tailwind CSS", "Mapbox"],
    liveUrl: "https://church-management-beta.vercel.app/",
    githubUrl: "https://github.com/fsonnyboy/church-management",
    featured: true,
  },
  {
    title: "Caremeds",
    description: "A comprehensive React Native mobile application built with Expo that provides a complete healthcare medicine management platform. The app enables users to browse, search, and request medicines through an intuitive interface with robust user authentication and permission management.",
    images: [
      "/caremeds-home.png", // You'll need to add these screenshots
      "/caremeds-medicine-browse.png",
      "/caremeds-search.png",
      "/caremeds-request.png",
      "/caremeds-profile.png"
    ],
    technologies: ["React Native", "TypeScript", "Expo", "NativeWind", "React Query", "Context API"],
    liveUrl: null, // No live URL since not deployed to stores
    githubUrl: "https://github.com/fsonnyboy/medcare",
    apkUrl: "https://drive.google.com/file/d/1muJLrFVD_kePnMMQ2A4BLZsLqvyp_ncJ/view?usp=drive_link", // Google Drive link
    projectType: "mobile",
    featured: true,
  },
];

export default function ProjectsSection() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  const [currentImageIndices, setCurrentImageIndices] = useState<Record<string, number>>({});

  const nextImage = (projectTitle: string, totalImages: number) => {
    setCurrentImageIndices(prev => ({
      ...prev,
      [projectTitle]: ((prev[projectTitle] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectTitle: string, totalImages: number) => {
    setCurrentImageIndices(prev => ({
      ...prev,
      [projectTitle]: ((prev[projectTitle] || 0) - 1 + totalImages) % totalImages
    }));
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-muted/10 via-background to-muted/20 relative overflow-hidden">
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
            Here are some of my recent projects that showcase my skills and expertise 
            in modern web development technologies.
          </p>
        </motion.div>

        {/* Featured Projects with Individual Carousels */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => {
            const currentImageIndex = currentImageIndices[project.title] || 0;
            const projectImages = project.images;
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20 hover:from-muted/10 hover:to-background group">
                  {/* Project Image Carousel */}
                  <div className="relative">
                    {/* Main Image Display */}
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative aspect-video overflow-hidden"
                    >
                      <Image
                        src={projectImages[currentImageIndex]}
                        alt={`${project.title} - Image ${currentImageIndex + 1}`}
                        fill
                        className="object-cover"
                        priority
                      />
                    </motion.div>

                    {/* Navigation Controls */}
                    <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
                      {/* Previous Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => prevImage(project.title, projectImages.length)}
                        className="pointer-events-auto w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 border-2 border-primary ml-4"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>

                      {/* Next Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => nextImage(project.title, projectImages.length)}
                        className="pointer-events-auto w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 border-2 border-primary mr-4"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="flex gap-2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                        {projectImages.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={() => setCurrentImageIndices(prev => ({
                              ...prev,
                              [project.title]: imgIndex
                            }))}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              imgIndex === currentImageIndex 
                                ? "bg-primary scale-125" 
                                : "bg-muted hover:bg-muted-foreground/50"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      {project.projectType === "mobile" && (
                        <Badge variant="secondary" className="text-xs">
                          📱 Mobile App
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.liveUrl ? (
                        <Button size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      ) : project.apkUrl ? (
                        <Button size="sm" asChild>
                          <a href={project.apkUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Download APK
                          </a>
                        </Button>
                      ) : (
                        <Button size="sm" disabled>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {project.projectType === "mobile" ? "Mobile App" : "Demo Unavailable"}
                        </Button>
                      )}
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
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

        {/* Other Projects */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {project.title.split(' ')[0]}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Project Preview
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">{project.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to take on new challenges and create amazing digital experiences. 
                Let's discuss your next project!
              </p>
              <Button size="lg" asChild>
                <a href="#contact">
                  Get In Touch
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </section>
  );
}
