'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Maria S.',
    profession: 'Former Office Manager, Now Virtual Assistant',
    quote: 'NomadGate didn\'t just help me find a remote job; it gave me the confidence to make the leap. I\'m now writing this from Medellín, earning more than I did in my old job.',
    initials: 'MS',
    color: 'bg-[#f97316]',
  },
  {
    name: 'Ben K.',
    profession: 'Software Developer',
    quote: 'The salary calculator and visa guides are game-changers. I optimized my contract rate for Lisbon and found my apartment through the community feed before I even landed.',
    initials: 'BK',
    color: 'bg-[#0f766e]',
  },
  {
    name: 'Chloe & Sam',
    profession: 'Online Course Creators',
    quote: 'As a couple running an online business, NomadGate is our command center. From networking in Bangkok to finding reliable internet in the Azores, this app has it all.',
    initials: 'CS',
    color: 'bg-[#0d9488]',
  },
];

export default function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#0f766e] mb-4">
          Lives Transformed, Globally
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 hover:border-[#0f766e] transition-all duration-300 hover:shadow-xl rounded-2xl overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent className="pt-8 pb-8 px-6 relative">
                <Quote
                  className={`absolute top-4 right-4 w-8 h-8 transition-all duration-300 ${
                    hoveredIndex === index ? 'text-[#f97316] opacity-100' : 'text-[#0f766e] opacity-30'
                  }`}
                />

                <div className="flex flex-col items-center text-center">
                  <Avatar className={`w-16 h-16 mb-4 ${testimonial.color}`}>
                    <AvatarFallback className="text-white text-lg font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-[#f97316] font-medium mb-6">
                    {testimonial.profession}
                  </p>

                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
