'use client';
import { registerForm } from '@/actions/authFormActions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { PASSWORD_MIN_LENGTH } from '@/constants/user-constants';
import { UserRegister } from '@/types/user';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

type InitialState = UserRegister & { error: null | string };

export default function RegisterForm({
  ...props
}: React.ComponentProps<typeof Card>) {
  const initialState: InitialState = {
    email: '',
    username: '',
    password: '',
    repass: '',
    error: null,
  };

  const [state, formAction, isPending] = useActionState(registerForm, initialState);
  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
  }, [state]);
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input
                name="username"
                id="username"
                type="text"
                placeholder="John Doe"
                required
                defaultValue={state.username}
                disabled={isPending}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                defaultValue={state.email}
                disabled={isPending}
              />
              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email with
                anyone else.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                name="password"
                id="password"
                type="password"
                required
                disabled={isPending}
              />
              <FieldDescription>
                Must be at least {PASSWORD_MIN_LENGTH} characters long.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="repass">Confirm Password</FieldLabel>
              <Input
                name="repass"
                id="repass"
                type="password"
                required
                disabled={isPending}
              />
              <FieldDescription>Please confirm your password.</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button disabled={isPending} type="submit">
                  {isPending ? 'Thinking...' : 'Create Account'}
                </Button>
                <Button disabled={isPending} variant="outline" type="button">
                  Sign up with Google
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <a href="#">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
