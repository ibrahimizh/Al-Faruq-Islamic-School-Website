import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Al Faruq Islamic School | Excellence in Deen & Dunya',
  description: 'A modern educational institution in Southwest Edmonton, Alberta, offering high academic standards and a strong foundation in Islamic morals and character.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="font-sans bg-white text-slate-900 antialiased selection:bg-blue-500/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
