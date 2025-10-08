import { LoginForm } from '@/components/login-form';
import { GalleryVerticalEnd } from 'lucide-react';

export default function LoginPage() {
  return (
    // <div className="flex items-center justify-center min-h-screen bg-muted p-4">
    // <LoginForm className="w-full max-w-md bg-background rounded-xl shadow p-6" />
    // </div>
    // flex items-center justify-center min-h-screen
    // <div className="min-w-">
    //   <LoginForm className="max-w-xl" />
    //   </div>
    <div className="flex items-center justify-center p-4">
      <LoginForm className="w-full max-w-md shadow p-6" />
    </div>

    // <div className="grid min-h-svh lg:grid-cols-2">
    //   <div className="flex flex-col gap-4 p-6 md:p-10">
    //     <div className="flex justify-center gap-2 md:justify-start">
    //       <a href="#" className="flex items-center gap-2 font-medium">
    //         <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
    //           <GalleryVerticalEnd className="size-4" />
    //         </div>
    //         Acme Inc.
    //       </a>
    //     </div>
    //     <div className="flex flex-1 items-center justify-center">
    //       <div className="w-full max-w-xs">

    //       </div>
    //     </div>
    //   </div>
    //   <div className="bg-muted relative hidden lg:block">
    //     <img
    //       src="/placeholder.svg"
    //       alt="Image"
    //       className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
    //     />
    //   </div>
    // </div>
  );
}
