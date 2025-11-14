import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, MapPin, TrendingUp, Users } from 'lucide-react';

const benefits = [
  {
    icon: Briefcase,
    title: 'Find Your Dream Remote Role',
    description: 'Access a global marketplace of vetted remote jobs, freelance gigs, and projects tailored to your skills. From coding to content creation, find work that fuels your journey.',
  },
  {
    icon: MapPin,
    title: 'Plan Your Next Destination',
    description: 'Get data-driven insights on cost of living, internet speed, co-working spaces, and visa requirements. Our community reviews help you pick the perfect spot.',
  },
  {
    icon: TrendingUp,
    title: 'Invest & Manage on the Move',
    description: 'Tools and resources to manage your finances across borders. Compare international banking, explore investment strategies, and use our salary vs. cost-of-living calculator.',
  },
  {
    icon: Users,
    title: 'Join a Global Community',
    description: 'Learn from those who are already living the life. Get answers, share stories, and find your tribe in our exclusive forums and local meetup groups.',
  },
];

export default function Benefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#0f766e] mb-4">
          Your All-Access Pass to the Nomad Life
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-[#0f766e] transition-all duration-300 hover:shadow-xl rounded-2xl group"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-[#0f766e]/10 flex items-center justify-center mb-4 group-hover:bg-[#0f766e] transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#0f766e] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
