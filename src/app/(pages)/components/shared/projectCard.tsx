"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc: string;
  url: string;
}

export default function ProjectCard({ title, description, imgSrc, url }: ProjectCardProps) {
  const router = useRouter();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card className="w-full max-w-[300px] bg-blue-900/90 hover:bg-blue-800/90 transition-all duration-300 group">
            <CardHeader className="p-0">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={imgSrc} 
                  alt={title} 
                  className="w-full h-[400px] object-contain transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </CardHeader>
            
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold tracking-tight mb-2 text-white group-hover:text-blue-200 transition-colors">
                {title}
              </h3>
              <p className="text-blue-100/90 text-sm leading-relaxed">
                {description}
              </p>
            </CardContent>

            <CardFooter className="p-6 pt-0">
              <Button 
                variant="ghost" 
                className="w-full text-blue-100 hover:text-white hover:bg-blue-700/50"
                onClick={() => router.push(url)}
              >
                Learn More
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </TooltipTrigger>
        <TooltipContent>
          <p>Click to view project details</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}