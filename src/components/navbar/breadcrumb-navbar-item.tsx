import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';
import Link from 'next/link';

interface Props {
  isLast: boolean;
  href: string;
  name: string;
}

export default function BreadcrumbNavbarItem({ isLast, href, name }: Props) {
  const formattedName = name.charAt(0).toLocaleUpperCase() + name.slice(1);
  return (
    <>
      <BreadcrumbItem>
        {!isLast ? (
          <BreadcrumbLink asChild>
            <Link href={`/${href}`}>{formattedName}</Link>
          </BreadcrumbLink>
        ) : (
          <BreadcrumbPage>{formattedName}</BreadcrumbPage>
        )}
      </BreadcrumbItem>
      {!isLast && <BreadcrumbSeparator />}
    </>
  );
}
