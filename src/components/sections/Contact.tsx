'use client';

import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';
import { submitContact } from '@/app/actions/contact';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

const initialState = {
  success: false,
  message: '',
};

export default function Contact(props: React.HTMLAttributes<HTMLElement>) {
  const [state, formAction] = useActionState(submitContact, initialState);
  const { pending } = useFormStatus();

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <section
      className={'section'}
      {...props}>
      <div className='flex w-full justify-center p-6 md:p-10'>
        <Card className='w-full max-w-3xl shadow-lg'>
          <CardHeader>
            <CardTitle className='text-center text-4xl font-bold'>
              Contact
            </CardTitle>

            <CardDescription className='text-center'>
              Contact me to get details
            </CardDescription>
          </CardHeader>

          <form action={formAction}>
            <CardContent>
              <div className='flex flex-col gap-6'>
                <div className='grid gap-2'>
                  <Label htmlFor='name'>Name</Label>
                  <Input
                    id='name'
                    name='name'
                    placeholder='Rafay Khan'
                    required
                  />
                </div>

                <div className='grid gap-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='m@example.com'
                    required
                  />
                </div>

                <div className='grid gap-2'>
                  <Label htmlFor='subject'>Subject</Label>
                  <Input
                    id='subject'
                    name='subject'
                    placeholder='Project Inquiry'
                    required
                  />
                </div>

                <div className='grid gap-2'>
                  <Label htmlFor='details'>Details</Label>
                  <Textarea
                    id='details'
                    name='details'
                    placeholder='Tell me about your project...'
                    rows={5}
                    required
                  />
                </div>
              </div>
            </CardContent>

            <CardFooter>
              <Button
                className='w-full'
                disabled={pending}
                type='submit'>
                {pending ? 'Submitting...' : 'Submit'}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  );
}
