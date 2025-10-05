"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-muted rounded-full"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm text-muted-foreground">Available for new opportunities</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              Sonny Boy Fuenteblanca
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary leading-tight"
            >
              Full-Stack Developer
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              Building scalable web and mobile applications with expertise in React.js, Next.js, 
            NestJS, and AI automation. Passionate about creating impactful solutions that blend 
            functionality, performance, and innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="bg-primary cursor-pointer text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="border-2 cursor-pointer border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <ArrowDown className="h-5 w-5" />
                View Projects
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex space-x-6 pt-5"
            >
              <motion.a
                href="https://github.com/fsonnyboy"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                <Github className="h-6 w-6 text-muted-foreground" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sonny-boy-fuenteblanca"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                <Linkedin className="h-6 w-6 text-muted-foreground" />
              </motion.a>
              <motion.a
                href="mailto:fuenteblancasonny@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                <Mail className="h-6 w-6 text-muted-foreground" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Profile Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-96 h-[28rem] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/Gemini_Generated_Image_5q04xj5q04xj5q04.png"
                  alt="Sonny Boy Fuenteblanca"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Overlay Icons */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="absolute -top-4 -left-4 w-12 h-12 bg-background rounded-lg shadow-lg flex items-center justify-center border border-border"
              >
                <div className="text-primary font-bold text-lg">⚡</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary rounded-lg shadow-lg flex items-center justify-center"
              >
                <div className="text-primary-foreground font-bold text-lg">&gt;_</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
