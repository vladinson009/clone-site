'use client';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import BreadcrumbNavbarItem from './breadcrumb-navbar-item';

export default function BreadcrumbNavbar() {
  const pathname = usePathname();
  // const queryParams = useSearchParams();
  const parts = pathname.split('/').filter(Boolean);
  const isParts = parts.length > 0;
  console.log(parts);

  return (
    <Breadcrumb className="flex justify-center">
      <BreadcrumbList>
        <BreadcrumbItem>
          {isParts ? (
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          ) : (
            <BreadcrumbPage>Home</BreadcrumbPage>
          )}
        </BreadcrumbItem>
        {isParts && <BreadcrumbSeparator />}
        {parts.map((name, index) => {
          const isLast = parts.length - 1 === index;
          const href = parts.slice(0, index + 1).join('/');
          return (
            <BreadcrumbNavbarItem
              key={name + index}
              isLast={isLast}
              href={href}
              name={name}
            />
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
