'use client';
import { useState } from 'react';
import Link from 'next/link';
import { PanelLeftOpen } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export function LeftSheet() {
  const [isOpen, setIsOpen] = useState(false);

  function handleCloseClick() {
    setIsOpen(false);
  }
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button className="ml-4 mt-4 fixed">
          <PanelLeftOpen />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Navigation links for the app</SheetDescription>{' '}
          {/* ✅ Fix */}
        </SheetHeader>
        <div className="flex flex-col gap-3 mt-4">
          <Button variant="ghost">
            <Link onClick={handleCloseClick} href="/">
              Home
            </Link>
          </Button>
          <Button variant="ghost">
            <Link onClick={handleCloseClick} href="/products">
              Products
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
