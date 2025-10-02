'use client';

import { getExpenses } from '@/app/actions';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { PlusCircle, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Expense } from '@/lib/types';
import { format } from 'date-fns';

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    getExpenses().then(setExpenses);
  }, []);

  const convertToCSV = (data: Expense[]) => {
    const headers = ['ID', 'Description', 'Amount', 'Category', 'Date'];
    const rows = data.map((expense) =>
      [
        expense.id,
        `"${expense.description.replace(/"/g, '""')}"`, // Handle quotes
        expense.amount,
        expense.category,
        expense.date,
      ].join(',')
    );
    return [headers.join(','), ...rows].join('\n');
  };

  const handleDownloadCSV = () => {
    const csvData = convertToCSV(expenses);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'expenses.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Card className="neumorphic">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Expenses</CardTitle>
                  <CardDescription>
                    Here is a list of all your recorded expenses.
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-1"
                    onClick={handleDownloadCSV}
                  >
                    <Download className="h-4 w-4" />
                    Download CSV
                  </Button>
                  <Button size="sm" className="gap-1">
                    <PlusCircle className="h-4 w-4" />
                    Add Expense
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Description</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {expenses.map((expense) => (
                    <TableRow key={expense.id}>
                      <TableCell className="font-medium">
                        {expense.description}
                      </TableCell>
                      <TableCell>{expense.category}</TableCell>
                      <TableCell>
                        {format(new Date(expense.date), 'MMMM d, yyyy')}
                      </TableCell>
                      <TableCell className="text-right">
                        ${expense.amount.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
