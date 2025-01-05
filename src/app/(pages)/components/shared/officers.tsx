import React from "react";
import Officer from "@/app/(pages)/components/officer";
import { fetchAllOfficers } from "@/app/firebase/firestore/officers";

interface OfficerInfo {
  id: string;
  name: string;
  title: string;
  imageURL: string;
}

export default async function Officers() {
  const officers = await fetchAllOfficers();
  
  if (!officers) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#2403a8] to-[#1b0478] flex items-center justify-center">
        <div className="text-white/70 text-lg">Loading team members...</div>
      </div>
    );
  }

  return (
    <section id="Officers" className="bg-gradient-to-b from-[#2403a8] to-[#1b0478] relative">
      <div className="container mx-auto px-6 py-24">
        <div className="space-y-16">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Meet the Crew
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              The talented individuals behind our success
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-5">
            {officers.map((officer) => (
              <div
                key={officer.id}
                className="transform hover:-translate-y-1 transition-transform duration-300"
              >
                <Officer
                  img={officer.imageURL}
                  name={officer.name}
                  title={officer.title}
                  id={officer.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}