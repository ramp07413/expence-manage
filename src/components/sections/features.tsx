import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wallet, PieChart, BarChart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Wallet,
    title: 'Track Expenses',
    description:
      'Easily log your daily expenses and categorize them for a clear overview of your spending.',
  },
  {
    icon: PieChart,
    title: 'Manage Budgets',
    description:
      'Set monthly or weekly budgets for different categories and stay on top of your financial goals.',
  },
  {
    icon: BarChart,
    title: 'Generate Reports',
    description:
      'Visualize your spending habits with insightful charts and reports to make smarter financial decisions.',
  },
];

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Features to Empower Your Finances
          </h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Everything you need to manage your money, all in one place.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card/60 backdrop-blur-sm border-white/20 shadow-[8px_8px_16px_rgba(180,200,220,0.4),-8px_-8px_16px_rgba(255,255,255,0.8)] hover:shadow-[10px_10px_20px_rgba(180,200,220,0.6),-10px_-10px_20px_rgba(255,255,255,1)] transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="flex flex-col items-center text-center">
                <div className="p-4 bg-accent/50 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
