import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, LogIn, Plus, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from './client/theme-toggle';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b bg-background px-4 md:px-8 py-2 shadow-sm">
      {/* Left: Logo + name */}
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/globe.svg" // your logo path
            alt="Logo"
            width={32}
            height={32}
            className="rounded-sm"
          />
          <span className="hidden md:inline text-xl font-bold">
            Next<span className="text-orange-500">Hub</span>
          </span>
        </Link>
      </div>

      {/* Middle: Search bar */}
      <div className="hidden md:flex flex-1 max-w-lg mx-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search NextHub..."
            className="pl-9 bg-muted/50 border-muted-foreground/20 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>

      {/* Right: buttons */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Plus className="w-5 h-5" />
        </Button>

        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5" />
        </Button>

        <ThemeToggle />

        {/* Auth button (replace with avatar if logged in) */}
        <Button variant="outline" asChild>
          <Link href="/authentication">
            <LogIn className="w-4 h-4 mr-1" /> Login
          </Link>
        </Button>
      </div>
    </nav>
  );
}
