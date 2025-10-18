"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

export function LoadingSpinner({ size = "md", text, className = "" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6", 
    lg: "h-8 w-8"
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center space-y-2">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Loader2 className={sizeClasses[size]} />
        </motion.div>
        {text && (
          <p className="text-sm text-muted-foreground">{text}</p>
        )}
      </div>
    </div>
  );
}

interface LoadingPageProps {
  text?: string;
}

export function LoadingPage({ text = "Loading..." }: LoadingPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <LoadingSpinner size="lg" text={text} />
      </div>
    </div>
  );
}

interface LoadingCardProps {
  text?: string;
}

export function LoadingCard({ text = "Loading..." }: LoadingCardProps) {
  return (
    <div className="min-h-[200px] flex items-center justify-center">
      <LoadingSpinner text={text} />
    </div>
  );
}

// Skeleton loading components
export function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="bg-muted rounded-lg h-48 mb-4"></div>
      <div className="space-y-2">
        <div className="bg-muted rounded h-4 w-3/4"></div>
        <div className="bg-muted rounded h-4 w-1/2"></div>
        <div className="bg-muted rounded h-4 w-2/3"></div>
      </div>
    </div>
  );
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="animate-pulse space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div 
          key={i}
          className={`bg-muted rounded h-4 ${
            i === lines - 1 ? 'w-2/3' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
}
