'use client';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until client-side hydration is complete
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Prevent SSR/Client mismatch by not rendering until mounted
    return (
      <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
        <Sun className="w-5 h-5" />
      </button>
    );
  }
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-md hover:bg-accent transition"
    >
      {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
