"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Home,
  Info,
  Users,
  Folder,
  X,
  ChevronRight
} from "lucide-react";

interface SideBarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  scrollToSection: (section: string) => void;
}

const MENU_ITEMS = [
  { id: 'home', label: 'Home', icon: Home, section: 'Home', path: '/' },

];

const PROJECT_ITEMS = [
  { id: 'float-tube', label: 'Float Tube', path: '/projects/float' },
  { id: 'mate-rov', label: 'MateROV', path: '/projects/mate' },
  { id: 'mini-float', label: 'Mini Float', path: '/projects/minifloat' },
];

export default function SideBar({ isSidebarOpen, toggleSidebar, scrollToSection }: SideBarProps) {
  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  return (
    <Sheet open={isSidebarOpen} onOpenChange={toggleSidebar}>
      <SheetContent 
        side="left" 
        className="w-64 p-0 bg-black border-r border-blue-900"
      >
        <SheetHeader className="p-4 border-b border-blue-900">
          <div className="flex items-center justify-between">
            <img
              src="/imgs/logos/robosub.png"
              alt="RoboSub Logo"
              className="w-10 h-10"
            />

          </div>
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-5rem)]">
          <div className="px-2 py-4">
            <nav className="space-y-2">
              {MENU_ITEMS.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className="w-full justify-start text-blue-500 hover:text-blue-400 hover:bg-blue-950/50"
                  onClick={() => {
                    navigateTo(item.path);
                    toggleSidebar();
                  }}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              ))}

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="projects" className="border-none">
                  <AccordionTrigger className="py-2 px-4 text-blue-500 hover:text-blue-400 hover:bg-blue-950/50 rounded-md">
                    <div className="flex items-center">
                      <Folder className="mr-2 h-4 w-4" />
                      Projects
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-2">
                    {PROJECT_ITEMS.map((project) => (
                      <Button
                        key={project.id}
                        variant="ghost"
                        className="w-full justify-start text-sm text-blue-400 hover:text-blue-300 hover:bg-blue-950/50 pl-6"
                        onClick={() => {
                          navigateTo(project.path);
                          toggleSidebar();
                        }}
                      >
                        
                        {project.label}
                      </Button>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </nav>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}