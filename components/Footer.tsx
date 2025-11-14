import { Separator } from '@/components/ui/separator';
import { Twitter, Linkedin, Instagram, Youtube, Compass } from 'lucide-react';

const footerLinks = {
  Jobs: '#jobs',
  Destinations: '#destinations',
  Resources: '#resources',
  Community: '#community',
  About: '#about',
  Blog: '#blog',
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Compass className="w-8 h-8 text-[#f97316]" />
              <span className="text-2xl font-bold font-poppins">NomadGate</span>
            </div>
            <p className="text-white/70 text-lg mb-6">
              Work from Anywhere. Live Everywhere.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#f97316] flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-3">
              {Object.entries(footerLinks).slice(0, 3).map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/70 hover:text-[#f97316] transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 font-poppins">Explore</h3>
            <ul className="space-y-3">
              {Object.entries(footerLinks).slice(3).map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/70 hover:text-[#f97316] transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-white/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© 2024 NomadGate. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-[#f97316] transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-[#f97316] transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
