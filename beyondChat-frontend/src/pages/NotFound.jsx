import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import Header from "@/components/Header.jsx";

const NotFound = () => {
  return (
    <div className="min-h-screen gradient-warm">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-md text-center">
          <h1 className="font-display text-8xl font-bold text-primary">404</h1>
          <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="mt-4 text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Home className="h-4 w-4" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
