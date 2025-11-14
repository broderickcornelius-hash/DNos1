import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f766e] to-[#0d9488] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Unlock Your Freedom?
        </h2>

        <p className="text-xl text-white/90 mb-10 leading-relaxed">
          Join thousands of digital nomads who are already living their best lives.
        </p>

        <Button
          size="lg"
          className="bg-[#f97316] hover:bg-[#ea580c] text-white px-10 py-7 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
        >
          Create Your Free Account
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}
