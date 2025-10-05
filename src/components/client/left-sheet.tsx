'use client';

import * as React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { PanelLeftOpen } from 'lucide-react';

export function LeftSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="ml-4 mt-4">
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
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Profile</Button>
          <Button variant="ghost">Settings</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
