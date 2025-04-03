import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      {/* Hero Section */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <h1 className="text-6xl font-bold tracking-tight text-foreground">
            Next.js 15 Starter Template
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed">
            A modern Next.js starter designed with Clean Architecture principles, perfect for building scalable SaaS products.
          </p>
          <div className="flex items-center justify-center gap-6 pt-4">
            <Link 
              href="https://github.com/yourusername/nextjs-starter"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get Started
            </Link>
            <Link 
              href="#features"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose This Template?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Clean Architecture</CardTitle>
                <CardDescription>Domain-driven design with clear boundaries</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Business logic stays pure and framework-agnostic, making it easy to test and maintain.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Modern Stack</CardTitle>
                <CardDescription>Built with the latest tools</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui for a beautiful, type-safe UI.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Production Ready</CardTitle>
                <CardDescription>Enterprise-grade integrations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Supabase, trigger.dev, OpenPanel, and Sentry integration out of the box.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Project Structure</h2>
          <div className="mx-auto max-w-3xl">
            <pre className="rounded-lg bg-card p-6 overflow-x-auto border font-mono text-sm leading-relaxed">
              <code>
{`src/
├── app/                    # App Router + Server Actions
├── components/            # UI Components
│   ├── ui/               # Atomic components
│   ├── modules/          # Feature components
│   └── states/           # State management
├── domain/               # Business logic
│   ├── entities/         # Domain entities
│   ├── usecases/        # Use cases
│   └── repositories/     # Repository interfaces
└── infrastructure/       # External integrations
    ├── repositories/     # Repository implementations
    ├── services/         # External services
    └── jobs/             # Background jobs`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Get Started</h2>
          <div className="mx-auto max-w-2xl">
            <ol className="space-y-6">
              <li className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-medium">
                  1
                </span>
                <p className="text-lg">Clone the repository and install dependencies</p>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-medium">
                  2
                </span>
                <p className="text-lg">Set up your environment variables</p>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-medium">
                  3
                </span>
                <p className="text-lg">Start building your application</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              Built with Next.js and Clean Architecture
            </p>
            <nav className="flex gap-8">
              <Link 
                href="https://github.com/yourusername/nextjs-starter" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </Link>
              <Link 
                href="https://nextjs.org/docs" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Documentation
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
} 