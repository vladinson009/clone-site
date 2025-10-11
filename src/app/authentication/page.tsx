import AuthForm from '@/components/auth-form';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Authentication',
  description: 'Login to explore more from our web site',
};

type LoginPageProps = {
  searchParams: {
    mode?: string;
  };
};
export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { mode } = await searchParams;

  if (!mode || (mode !== 'signin' && mode !== 'signup')) {
    redirect('?mode=signin');
  }
  return (
    <div className="flex items-center justify-center p-4">
      <AuthForm mode={mode} className="w-full max-w-md shadow p-6" />
    </div>
  );
}
