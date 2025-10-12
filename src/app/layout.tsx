import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/navbar/navbar';
import { LeftSheet } from '@/components/client/left-sheet';
import BreadcrumbNavbar from '@/components/navbar/breadcrumb-navbar';
import { Toaster } from '@/components/ui/sonner';
import Footer from '@/components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NextHub App',
  description: 'Demo project by Vladimir Gulev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header>
            <Navbar />
            <BreadcrumbNavbar />
            <LeftSheet />
          </header>
          <main className="max-w-5xl mx-auto p-4">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
