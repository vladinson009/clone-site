import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import GitHubLoginButton from './client/github-login-button';

interface AuthFormProps extends React.ComponentProps<'form'> {
  mode: string;
}

export default function AuthForm({ className, ...props }: AuthFormProps) {
  const mode = props.mode;
  const signInMode = mode === 'signin';

  return (
    <form className={cn('flex flex-col gap-6', className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">
            {signInMode ? 'Sign in to your account' : 'Sign up now'}
          </h1>
          <p className="text-muted-foreground text-sm text-balance">
            {signInMode
              ? 'Enter your email below to login to your account'
              : 'Create your new profile with us'}
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            {signInMode && (
              <a
                href="#"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            )}
          </div>
          <Input id="password" type="password" required />
        </Field>
        {!signInMode && (
          <Field>
            <div className="flex items-center">
              <FieldLabel htmlFor="repass">Repeat password</FieldLabel>
            </div>
            <Input id="repass" type="password" required />
          </Field>
        )}
        <Field>
          <Button type="submit">{signInMode ? 'Sign In' : 'Sign Up'}</Button>
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <GitHubLoginButton />
          <FieldDescription className="text-center">
            {signInMode ? "Don't have an account? " : 'Already have an account? '}
            <Link
              href={`?mode=${signInMode ? 'signup' : 'signin'}`}
              className="underline underline-offset-4"
            >
              {signInMode ? 'Sign Up' : 'Sign In'}
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
