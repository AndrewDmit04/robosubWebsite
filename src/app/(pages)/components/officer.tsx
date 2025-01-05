import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

function Officer({
  img,
  name,
  title,
  id,
}: {
  img: string;
  name: string;
  title: string;
  id: string;
}) {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="w-80 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
      <CardContent className="pt-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-white/20 ring-2 ring-white/10 ring-offset-2 ring-offset-[#2403a8]">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback className="bg-white/10 text-white">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="font-medium text-lg text-white/90">{name}</h3>
            <p className="text-white/70 text-sm">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Officer;