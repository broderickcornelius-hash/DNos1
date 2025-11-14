import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/7651933/pexels-photo-7651933.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f766e]/90 via-[#0f766e]/70 to-[#0f766e]/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Become A Digital Nomad
        </h1>

        <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/95 mb-8">
          Live, Work, Invest & Trade on the Go!
        </p>

        <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
          Your journey to a borderless life starts here. NomadGate provides the tools, community,
          and opportunities to seamlessly work as you travel. Live locally, work remotely, and
          invest in your future—from anywhere.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Your Journey
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="text-white hover:bg-white/20 px-8 py-6 text-lg rounded-full transition-all duration-300 group"
          >
            <PlayCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch the Video
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
