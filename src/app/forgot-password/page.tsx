import Link from 'next/link';
import Image from 'next/image';
import { Mail, ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ForgotPasswordPage() {
  const loginImage = PlaceHolderImages.find(p => p.id === 'login-illustration');

  return (
    <div className="w-full h-screen lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
             <Link href="/login" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground justify-center mb-4">
                <ArrowLeft className="h-4 w-4" />
                Back to login
            </Link>
            <h1 className="text-3xl font-bold font-headline">Forgot Password</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email to receive a password reset link.
            </p>
          </div>
          <Card className="bg-card/60 backdrop-blur-sm border-white/20 shadow-2xl">
            <CardContent className="pt-6">
              <div className="grid gap-4">
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
                <Button type="submit" className="w-full" size="lg">
                  Send Reset Link
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="hidden bg-muted lg:flex items-center justify-center p-8">
        {loginImage && (
            <Image
                src={loginImage.imageUrl}
                alt={loginImage.description}
                width="1920"
                height="1080"
                data-ai-hint={loginImage.imageHint}
                className="h-full w-full object-cover rounded-2xl dark:brightness-[0.2] dark:grayscale"
            />
        )}
      </div>
    </div>
  );
}
