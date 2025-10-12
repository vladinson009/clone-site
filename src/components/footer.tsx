import { Facebook, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';

import { Separator } from '@/components/ui/separator';

import Logo from '@/components/logo-link';

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8">
        <div className="flex items-center gap-3">
          <Logo />
        </div>

        <div className="flex items-center gap-5 whitespace-nowrap">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Works</a>
          <a href="#">Career</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#">
            <Facebook className="size-5" />
          </a>
          <a href="#">
            <InstagramIcon className="size-5" />
          </a>
          <a href="#">
            <TwitterIcon className="size-5" />
          </a>
          <a href="#">
            <YoutubeIcon className="size-5" />
          </a>
        </div>
      </div>

      <Separator />

      <div className="mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6">
        <p className="text-center font-medium text-balance">
          {`©${new Date().getFullYear()}`} <a href="#">Shadcn/studio</a>, Made with
          ❤️ for better web.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
