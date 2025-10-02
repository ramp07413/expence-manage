import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Wallet, BarChart, Goal, FileText } from 'lucide-react';
import { ModeToggle } from '../mode-toggle';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export function LandingPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-illustration');
  const avatar1 = PlaceHolderImages.find(p => p.id === 'avatar-1');
  const avatar2 = PlaceHolderImages.find(p => p.id === 'avatar-2');
  const avatar3 = PlaceHolderImages.find(p => p.id === 'avatar-3');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Wallet className="h-6 w-6 text-primary" />
          <span className="sr-only">Pastel Ledger</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button asChild variant="ghost">
            <Link href="/login" prefetch={false}>
              Login
            </Link>
          </Button>
          <Button asChild>
            <Link href="/signup" prefetch={false}>
              Sign Up
            </Link>
          </Button>
          <ModeToggle />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width="600"
                  height="400"
                  data-ai-hint={heroImage.imageHint}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
              )}
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Effortless Expense Tracking
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Pastel Ledger helps you take control of your finances. Track
                    spending, create budgets, and see where your money goes.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/signup" prefetch={false}>
                      Get Started for Free
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm text-accent-foreground">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything You Need to Manage Your Finances
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our app is packed with features to help you stay on top of
                  your spending and achieve your financial goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="neumorphic">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="grid gap-1">
                    <CardTitle>Expense Tracking</CardTitle>
                  </div>
                  <BarChart className="ml-auto h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Easily log all your expenses and categorize them to
                    understand your spending habits.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="neumorphic">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="grid gap-1">
                    <CardTitle>Budget Management</CardTitle>
                  </div>
                  <Goal className="ml-auto h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Create custom budgets for different categories and get
                    notified when you're nearing your limit.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="neumorphic">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="grid gap-1">
                    <CardTitle>Financial Reports</CardTitle>
                  </div>
                  <FileText className="ml-auto h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Generate insightful reports to visualize your financial
                    progress and make informed decisions.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Users Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our happy customers who have taken control of their
                  finances with Pastel Ledger.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="neumorphic">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {avatar1 && (
                      <Avatar>
                        <AvatarImage
                          src={avatar1.imageUrl}
                          alt={avatar1.description}
                          data-ai-hint={avatar1.imageHint}
                        />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    )}
                    <div className="grid gap-2">
                      <p className="text-sm leading-loose text-muted-foreground">
                        "Pastel Ledger has been a game-changer for my finances.
                        I finally feel in control of my spending."
                      </p>
                      <div className="font-semibold">Jane Doe</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="neumorphic">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                     {avatar2 && (
                      <Avatar>
                        <AvatarImage
                          src={avatar2.imageUrl}
                          alt={avatar2.description}
                          data-ai-hint={avatar2.imageHint}
                        />
                        <AvatarFallback>JM</AvatarFallback>
                      </Avatar>
                    )}
                    <div className="grid gap-2">
                      <p className="text-sm leading-loose text-muted-foreground">
                        "The best expense tracker I've ever used. So simple and
                        intuitive!"
                      </p>
                      <div className="font-semibold">John Morrison</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="neumorphic">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {avatar3 && (
                      <Avatar>
                        <AvatarImage
                          src={avatar3.imageUrl}
                          alt={avatar3.description}
                          data-ai-hint={avatar3.imageHint}
                        />
                        <AvatarFallback>SA</AvatarFallback>
                      </Avatar>
                    )}
                    <div className="grid gap-2">
                      <p className="text-sm leading-loose text-muted-foreground">
                        "The reports are incredibly helpful. I can see exactly
                        where my money is going each month."
                      </p>
                      <div className="font-semibold">Sarah Adams</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Pastel Ledger. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
