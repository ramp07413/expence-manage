'use server';

import {
  suggestExpenseCategory as suggestExpenseCategoryFlow,
  type SuggestExpenseCategoryInput,
} from '@/ai/flows/suggest-expense-category';
import { revalidatePath } from 'next/cache';
import type { Expense } from '@/lib/types';

// In-memory store for demo purposes. Replace with a database.
const expenses: Expense[] = [
  {
    id: '1',
    description: 'Coffee with a friend',
    amount: 4.5,
    category: 'Social',
    date: new Date('2024-07-22T10:00:00Z').toISOString(),
  },
  {
    id: '2',
    description: 'Monthly train ticket',
    amount: 85.0,
    category: 'Transport',
    date: new Date('2024-07-01T08:00:00Z').toISOString(),
  },
];

export async function getExpenses(): Promise<Expense[]> {
  return Promise.resolve(
    expenses.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  );
}

export async function addExpense(prevState: any, formData: FormData) {
  const newExpense = {
    id: Date.now().toString(),
    description: formData.get('description') as string,
    amount: parseFloat(formData.get('amount') as string),
    category: formData.get('category') as string,
    date: new Date().toISOString(),
  };

  if (
    !newExpense.description ||
    !newExpense.amount ||
    isNaN(newExpense.amount) ||
    !newExpense.category
  ) {
    return { error: 'Missing or invalid fields' };
  }

  expenses.unshift(newExpense);
  revalidatePath('/');
  return { success: true };
}

export async function suggestCategory(
  input: SuggestExpenseCategoryInput
): Promise<{ category: string | null; error?: string }> {
  try {
    if (!input.description) {
      return { category: null };
    }
    const result = await suggestExpenseCategoryFlow(input);
    return { category: result.category };
  } catch (e) {
    console.error(e);
    return { category: null, error: 'Failed to suggest category.' };
  }
}
