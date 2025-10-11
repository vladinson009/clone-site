import AuthForm from '@/components/client/auth-form';
import { redirect } from 'next/navigation';

type LoginPageProps = {
  searchParams: {
    mode?: string;
  };
};
export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { mode } = await searchParams;
  console.log(mode);

  if (!mode || (mode !== 'signin' && mode !== 'signup')) {
    redirect('?mode=signin');
  }
  return (
    <div className="flex items-center justify-center p-4">
      <AuthForm mode={mode} className="w-full max-w-md shadow p-6" />
    </div>
  );
}
