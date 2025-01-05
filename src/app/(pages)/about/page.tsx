"use client"
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Anchor, Target, Trophy, Users } from "lucide-react";
import { redirect, useRouter } from 'next/navigation';


const AboutSection = () => {
  
    const router = useRouter();
  
    const highlights = [
    {
      icon: Trophy,
      title: "Competition Ready",
      description: "Participating in international RoboSub competitions, showcasing our innovative solutions"
    },
    {
      icon: Users,
      title: "Student-Led",
      description: "Entirely managed and operated by passionate UTD students across multiple disciplines"
    },
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Focused on advancing autonomous underwater vehicle technology through practical application"
    },
    {
      icon: Anchor,
      title: "Real-World Impact",
      description: "Developing solutions that contribute to marine research and underwater exploration"
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
          className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-[#53cbec] opacity-10 blur-3xl"
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
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">About RoboSub UTD</h2>
          <div className="prose prose-lg text-gray-300 mx-auto space-y-6">
            <p>
              RoboSub UTD is a competitive student organization dedicated to designing, building, and programming autonomous underwater vehicles (AUVs). Our team participates in the annual RoboSub competition, where we showcase our innovative solutions in submarine robotics and autonomous systems.
            </p>
            <p>
              Founded by passionate engineering students, our team brings together diverse talents from computer science, mechanical engineering, electrical engineering, and other disciplines. We work collaboratively to tackle complex challenges in underwater robotics, from advanced computer vision systems to sophisticated mechanical designs.
            </p>
            <p>
              Through hands-on experience and mentorship, our members gain valuable skills in robotics, software development, and systems integration. We're not just building submarines – we're developing the next generation of engineers and problem-solvers.
            </p>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="bg-[#125d99] border-none hover:bg-[#1a6cad] transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-[#1b1149]">
                      <Icon size={24} className="text-[#53cbec]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>
        


        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button onClick={()=>{(router.push('/projects'))}} className="px-8 py-3 bg-[#53cbec] text-[#1b1149] font-bold rounded-full hover:bg-[#7dd7ef] transition-colors duration-300">
            Learn More About Our Projects
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16 mt-10"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Our Awards</h2>
          <div className="prose prose-lg text-gray-300 mx-auto space-y-6 flex flex-col md:flex-row gap-10 justify-center">
            <img alt="award1" src="/imgs/awards/doc.png" className="max-w-[500px]" />
            <img alt="award2" src="/imgs/awards/third.png" className="max-w-[500px]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;