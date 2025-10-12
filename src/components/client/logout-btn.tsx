'use client';
import { logoutUser } from '@/actions/authFormActions';
import { Button } from '../ui/button';
import { LogOut } from 'lucide-react';

export default function LogoutBtn() {
  return (
    <form action={logoutUser}>
      <Button variant="outline">
        <LogOut className="w-4 h-4 mr-1" />
        Sign Out
      </Button>
    </form>
  );
}
