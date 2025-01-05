"use client"
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "MateROV",
      image: "/api/placeholder/800/500",
      description: "Advanced navigation system for underwater autonomous operation",
      points: [
        "Real-time obstacle detection and avoidance using computer vision",
        "Multi-sensor fusion for precise localization",
        "Dynamic path planning algorithms",
        "Autonomous mission execution capabilities"
      ]
    },
    {
      title: "Float",
      image: "/api/placeholder/800/500",
      description: "Computer vision system for underwater object detection and tracking",
      points: [
        "Deep learning-based object detection",
        "Real-time image processing pipeline",
        "Underwater color correction algorithms",
        "Multi-camera synchronization system"
      ]
    },
    {
      title: "RoboBoat",
      image: "/api/placeholder/800/500",
      description: "Custom-designed submarine hull and mechanical systems",
      points: [
        "Hydrodynamic hull optimization",
        "Modular component design for easy maintenance",
        "Custom thruster configuration",
        "Waterproof electronics housing"
      ]
    },
    {
      title: "Mini ROV",
      image: "/api/placeholder/800/500",
      description: "Advanced control systems for precise submarine movement",
      points: [
        "PID control implementation",
        "Depth and orientation stabilization",
        "Thruster mapping and optimization",
        "Real-time performance monitoring"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#1b1149] py-20 px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#125d99] opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#53cbec] opacity-10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">Our Projects</h2>
          <p className="text-xl text-gray-300">
            Exploring the frontiers of underwater robotics through innovative engineering solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#125d99]/20 border-none overflow-hidden hover:bg-[#125d99]/30 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1b1149] to-transparent h-20" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <ul className="space-y-2">
                      {project.points.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * pointIndex }}
                          viewport={{ once: true }}
                          className="flex items-start text-gray-300"
                        >
                          <ChevronRight className="h-6 w-6 text-[#53cbec] shrink-0 mt-0.5" />
                          <span className="ml-2">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;