"use client"
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
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
          className="absolute bottom-44 right-10 w-96 h-96 rounded-full bg-[#53cbec] opacity-10 blur-3xl"
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
        <h2 className="text-5xl font-bold text-white mb-12 text-center">About RoboSub UTD</h2>
        
        {/* Main Content - Flex Container */}
        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto">
          {/* Photo Section - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <Card className="bg-[#125d99]/20 border-none overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src="/imgs/GroupPhotos/GroupPhoto.jpg"
                    alt="RoboSub UTD Team"
                    className="w-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1b1149] to-transparent h-20" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl leading-relaxed text-gray-300"
            >
              RoboSub UTD is a competitive student organization dedicated to designing, building, and programming autonomous underwater vehicles (AUVs). Our team participates in the annual RoboSub competition, where we showcase our innovative solutions in submarine robotics and autonomous systems.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl leading-relaxed text-gray-300"
            >
              Founded by passionate engineering students, our team brings together diverse talents from computer science, mechanical engineering, electrical engineering, and other disciplines. We work collaboratively to tackle complex challenges in underwater robotics, from advanced computer vision systems to sophisticated mechanical designs.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-xl leading-relaxed text-gray-300"
            >
              Through hands-on experience and mentorship, our members gain valuable skills in robotics, software development, and systems integration. We're not just building submarines – we're developing the next generation of engineers and problem-solvers.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;