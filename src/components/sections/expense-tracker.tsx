'use client';

import { useState, useTransition, useRef, useEffect } from 'react';
import { useFormState } from 'react-dom';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { addExpense, getExpenses, suggestCategory } from '@/app/actions';
import { Loader2, Wand2 } from 'lucide-react';
import type { Expense } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  error: null,
  success: false,
};

function SubmitButton() {
  const [pending] = useTransition();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="animate-spin mr-2" /> : null}
      Add Expense
    </Button>
  );
}

export function ExpenseTracker() {
  const [state, formAction] = useFormState(addExpense, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [suggestedCategory, setSuggestedCategory] = useState<string | null>(
    null
  );
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    getExpenses().then(setExpenses);
  }, []);

  useEffect(() => {
    if (state.success) {
      toast({
        title: 'Expense Added',
        description: 'Your expense has been successfully logged.',
      });
      formRef.current?.reset();
      setDescription('');
      setCategory('');
      setSuggestedCategory(null);
      getExpenses().then(setExpenses);
    }
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: state.error,
      });
    }
  }, [state, toast]);

  useEffect(() => {
    if (description.trim().length < 5) {
      setSuggestedCategory(null);
      return;
    }

    const handler = setTimeout(() => {
      setIsSuggesting(true);
      suggestCategory({ description })
        .then((result) => {
          if (result.category) {
            setSuggestedCategory(result.category);
            setCategory(result.category);
          }
        })
        .finally(() => setIsSuggesting(false));
    }, 500); // Debounce time

    return () => {
      clearTimeout(handler);
    };
  }, [description]);

  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Smart Expense Tracking
          </h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Log your expenses and let our AI suggest the right category for you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="bg-card/60 backdrop-blur-sm border-white/20 shadow-[8px_8px_16px_rgba(180,200,220,0.4),-8px_-8px_16px_rgba(255,255,255,0.8)]">
            <CardHeader>
              <CardTitle>Add a New Expense</CardTitle>
              <CardDescription>
                Fill out the form below to log a transaction.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={formAction} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    name="description"
                    placeholder="e.g., Lunch with colleagues"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      name="amount"
                      type="number"
                      step="0.01"
                      placeholder="25.50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <div className="relative">
                      <Input
                        id="category"
                        name="category"
                        placeholder="AI will suggest one..."
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      />
                      {isSuggesting && (
                        <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
          <Card className="bg-card/60 backdrop-blur-sm border-white/20 shadow-[8px_8px_16px_rgba(180,200,220,0.4),-8px_-8px_16px_rgba(255,255,255,0.8)]">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {expenses.length > 0 ? (
                  expenses
                    .slice(0, 5)
                    .map((expense) => (
                      <li
                        key={expense.id}
                        className="flex justify-between items-center"
                      >
                        <div>
                          <p className="font-medium">{expense.description}</p>
                          <p className="text-sm text-muted-foreground">
                            {expense.category}
                          </p>
                        </div>
                        <p className="font-bold text-lg">
                          ${expense.amount.toFixed(2)}
                        </p>
                      </li>
                    ))
                ) : (
                  <p className="text-muted-foreground text-center py-8">
                    No expenses logged yet.
                  </p>
                )}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
