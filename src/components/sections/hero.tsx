import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-illustration');

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground leading-tight font-headline">
              Effortless expense tracking for a brighter financial future.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
              Take control of your finances with Pastel Ledger. Track, manage,
              and analyze your spending with ease.
            </p>
            <Button size="lg">Get Started Today</Button>
          </div>
          <div className="relative aspect-video w-full">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                className="object-cover rounded-2xl shadow-lg border"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
