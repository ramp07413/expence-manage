export function Footer() {
  return (
    <footer className="w-full py-6">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Pastel Ledger. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
