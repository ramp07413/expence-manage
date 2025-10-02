'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function BudgetsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Card className="neumorphic">
            <CardHeader>
              <CardTitle>Budgets</CardTitle>
              <CardDescription>
                Manage your budgets to stay on track with your financial goals.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center text-muted-foreground py-12">
                <p>Budgeting features are coming soon!</p>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
