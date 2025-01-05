"use client"
import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from 'next/image';
const SponsorsSection = () => {
  const sponsorTiers = [
    {
      name: "Platinum Sponsors",
      color: "#1a6cad",
      sponsors: [
        { name: "", description: "Leading provider of underwater robotics components", img : "/imgs/sponsors/veolia.png" },
      ]
    },
    {
      name: "Gold Sponsors",
      color: "#1a6cad",
      sponsors: [
        { name: "", description: "Providing technology to make our sucses happen", img : "/imgs/sponsors/solidWorks.jpg"}
      ]
    },
    // {
    //   name: "Silver Sponsors",
    //   color: "#C0C0C0",
    //   sponsors: [
    //     { name: "SubComp Electronics", description: "Specialized electronic components" },
    //     { name: "WaterProof Systems", description: "Waterproofing solutions and consulting" },
    //     { name: "RoboNav Software", description: "Navigation software development" }
    //   ]
    // }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#1b1149] py-20 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Sponsors</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We are grateful for the support of our sponsors who make our innovative underwater robotics projects possible. Their contributions drive our success and enable technological advancement.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <Card className="bg-[#125d99] border-none text-center">
            <CardContent className="pt-6">
              <h3 className="text-3xl font-bold text-[#53cbec] mb-2">2+</h3>
              <p className="text-white">Active Sponsors</p>
            </CardContent>
          </Card>
          <Card className="bg-[#125d99] border-none text-center">
            <CardContent className="pt-6">
              <h3 className="text-3xl font-bold text-[#53cbec] mb-2">$50K+</h3>
              <p className="text-white">Annual Support</p>
            </CardContent>
          </Card>
          <Card className="bg-[#125d99] border-none text-center">
            <CardContent className="pt-6">
              <h3 className="text-3xl font-bold text-[#53cbec] mb-2">5+ Years</h3>
              <p className="text-white">Average Partnership</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sponsor Tiers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {sponsorTiers.map((tier, tierIndex) => (
            
            <div key={tierIndex} className="space-y-6">
              <motion.h3 
                variants={cardVariants}
                className={`text-2xl font-bold text-[#1a6cad] mb-6`}
              >
                {tier.name}
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <motion.div
                    key={sponsorIndex}
                    variants={cardVariants}
                  >
                    <Card className="bg-[#125d99] border-none hover:bg-[#1a6cad] transition-all duration-300 h-full">
                      <CardHeader>
                        <Image src={sponsor.img} alt={sponsor.name} width={300} height={200} className='rounded-lg'/>
                        <h4 className="text-xl font-bold text-white">{sponsor.name}</h4>
                        <p className="text-gray-300">{sponsor.description}</p>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-[#125d99] p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Become a Sponsor</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our mission to advance underwater robotics technology. Your support can help shape the future of marine exploration and automation.
          </p>
          <button className="px-8 py-3 bg-[#53cbec] text-[#1b1149] font-bold rounded-full hover:bg-[#7dd7ef] transition-colors duration-300">
            Partner With Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SponsorsSection;