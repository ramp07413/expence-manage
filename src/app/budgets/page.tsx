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
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const budgets = [
  {
    name: 'Groceries',
    budget: 500,
    spent: 350,
  },
  {
    name: 'Entertainment',
    budget: 200,
    spent: 180,
  },
  {
    name: 'Transport',
    budget: 150,
    spent: 90,
  },
  {
    name: 'Utilities',
    budget: 300,
    spent: 275,
  },
    {
    name: 'Health',
    budget: 250,
    spent: 100,
  },
];


export default function BudgetsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Budgets</h1>
              <p className="text-muted-foreground">
                Manage your budgets to stay on track with your financial goals.
              </p>
            </div>
             <Button size="sm" className="gap-1">
                <PlusCircle className="h-4 w-4" />
                Add Budget
            </Button>
          </div>
           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {budgets.map((item) => (
              <Card key={item.name} className="neumorphic">
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Spent</span>
                    <span className="text-sm font-medium">
                      ${item.spent.toFixed(2)} / ${item.budget.toFixed(2)}
                    </span>
                  </div>
                  <Progress value={(item.spent / item.budget) * 100} className="h-2" />
                   <p className="text-xs text-muted-foreground mt-2">
                    ${(item.budget - item.spent).toFixed(2)} remaining
                </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
