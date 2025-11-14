import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'NomadGate - Become A Digital Nomad | Live, Work, Invest & Trade on the Go',
  description: 'Your journey to a borderless life starts here. NomadGate provides the tools, community, and opportunities to seamlessly work as you travel.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>{children}</body>
    </html>
  );
}
