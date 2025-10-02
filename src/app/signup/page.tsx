import Link from 'next/link';
import Image from 'next/image';
import { Mail, Lock, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function SignupPage() {
  const signupImage = PlaceHolderImages.find(p => p.id === 'login-illustration');

  return (
    <div className="w-full h-screen lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[400px] gap-6">
          <Card className="bg-card/60 backdrop-blur-sm border-white/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold font-headline text-center">
                Create an Account
              </CardTitle>
              <CardDescription className="text-center">
                Start your journey with Pastel Ledger today.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="full-name">Full Name</Label>
                   <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="full-name" placeholder="John Doe" required className="pl-10" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                   <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input id="password" type="password" required className="pl-10" />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input id="confirm-password" type="password" required className="pl-10" />
                        </div>
                    </div>
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Sign Up
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Already have an account?{' '}
                <Link href="/login" className="underline">
                  Login
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
       <div className="hidden bg-muted lg:flex items-center justify-center p-8">
        {signupImage && (
            <Image
                src={signupImage.imageUrl}
                alt={signupImage.description}
                width="1920"
                height="1080"
                data-ai-hint={signupImage.imageHint}
                className="h-full w-full object-cover rounded-2xl dark:brightness-[0.2] dark:grayscale"
            />
        )}
      </div>
    </div>
  );
}
