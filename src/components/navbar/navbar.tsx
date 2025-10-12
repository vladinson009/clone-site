import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, LogIn, Plus, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from '../client/theme-toggle';
import { getAuthUser } from '@/lib/authCookie';
import LogoutBtn from '../client/logout-btn';
import LogoLink from '../logo-link';

export default async function Navbar() {
  const user = await getAuthUser();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b bg-background px-4 md:px-8 py-2 shadow-sm">
      {/* Left: Logo + name */}
      <LogoLink />
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
        {user && (
          <>
            <span>Welcome, {user.email}</span>
            <LogoutBtn />
          </>
        )}
        {!user && (
          <Button variant="outline" asChild>
            <Link href="/authentication?mode=signin">
              <LogIn className="w-4 h-4 mr-1" /> Sign in
            </Link>
          </Button>
        )}
      </div>
    </nav>
  );
}
