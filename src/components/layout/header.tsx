import { Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full py-4 px-4 sm:px-6 lg:px-8 z-10 bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-foreground"
        >
          <Wallet className="h-6 w-6 text-primary" />
          <span className="font-headline">Pastel Ledger</span>
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
