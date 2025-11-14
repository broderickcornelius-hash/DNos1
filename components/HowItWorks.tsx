import { Card, CardContent } from '@/components/ui/card';
import { UserCircle, Globe, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: UserCircle,
    title: 'Build Your Profile',
    description: 'Tell us your skills, experience, and dream destinations. We\'ll personalize your feed and opportunities.',
  },
  {
    number: '02',
    icon: Globe,
    title: 'Explore & Connect',
    description: 'Browse jobs, calculate your budget for new cities, and connect with mentors and peers in the community.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Thrive',
    description: 'Secure your first remote gig, plan your relocation, and start your adventure with our support every step of the way.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#0f766e] mb-4">
          Your Path to Freedom in 3 Simple Steps
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#0f766e] to-[#0f766e]/20" />
                )}

                <Card className="relative z-10 border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl bg-white">
                  <CardContent className="pt-8 pb-8 px-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0f766e] to-[#0d9488] flex items-center justify-center shadow-lg">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[#f97316] flex items-center justify-center text-white font-bold text-sm shadow-md">
                          {step.number}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {step.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
