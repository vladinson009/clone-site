import Image from 'next/image';
import Link from 'next/link';

export default function LogoLink() {
  return (
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
          Next<span className="bg-[#FF9000] text-black px-1 rounded">Hub</span>
        </span>
      </Link>
    </div>
  );
}
