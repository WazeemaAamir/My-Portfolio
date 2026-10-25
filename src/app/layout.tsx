import type { Metadata } from 'next';
import Header from '@/components/layouts/header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Full-Stack Software Engineer Portfolio',
  description: 'Portfolio of Wazeem Aamir - Full-Stack Software Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}