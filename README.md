# 🧭 Project Overview

This project is a modern Next.js 15 starter template designed using **Clean Architecture principles**, with a strong emphasis on maintainability, scalability, and separation of concerns.

It combines the best of today's frontend tooling — like Tailwind CSS, shadcn/ui, and TypeScript — with a clean, opinionated folder structure and clear boundaries between domain logic, UI, infrastructure, and routing.

It also includes out-of-the-box integrations with:
- **Supabase** (as backend provider: database, auth, storage)
- **trigger.dev** (for background jobs and automation)
- **OpenPanel** (for product analytics)
- **Sentry** (for error tracking)

---

## 💡 Why this structure?

Modern frontend apps — especially SaaS products — grow fast. This structure ensures:

- You can evolve your business logic independently of your UI or backend tools.
- Testing is easier: domain logic doesn’t rely on any framework.
- Infrastructure concerns (e.g. Supabase, Sentry) are isolated.
- Components are decoupled from application logic, so UI can evolve freely.

This structure is inspired by Clean Architecture, adapted pragmatically to work seamlessly with Next.js 15 and App Router.

---

## ✅ Main Advantages

- **Clear separation of concerns**
- **Improved testability**
- **Easier collaboration across dev teams**
- **Smooth integration of tools like Supabase, trigger.dev, and analytics without polluting core logic**
- **A real-world pattern for scaling SaaS frontends**

---

## 🧱 Best suited for

This starter is ideal if you're building:

- A SaaS product with long-term ambitions
- An open-source project where structure and clarity matter
- A team-based project where multiple devs touch different parts of the app
- A product where infrastructure (Supabase, Sentry, analytics, etc.) may evolve

If you value architecture and want a scalable base that won't collapse under its own weight as you grow — this is for you.

---

# 🏘️ Final folder structure for a modern Next.js project using Clean Architecture and modern tooling

src/
├── app/                                 # App Router (routing + server components + server actions)
│   └── dashboard/
│       └── courses/
│           ├── page.tsx                # Courses main page
│           ├── actions.ts              # Server Actions (Controller)
│           └── components/             # UI components specific to this route
│               ├── CoursePage.tsx
│               └── CreateButton.tsx
├── components/                          # Global UI components
│   ├── ui/                              # Atomic components (Button, Input...)
│   ├── modules/                         # Feature-level components (forms, cards, lists...)
│   │   ├── course/
│   │   │   ├── CourseForm.tsx
│   │   │   ├── CourseCard.tsx
│   │   │   └── index.ts
│   │   └── auth/
│   │       ├── AuthForm.tsx
│   │       └── LoginForm.tsx
│   └── states/                          # Hooks and logic per feature (state, actions, queries...)
│       ├── course/
│       │   └── useCourseForm.ts
│       └── auth/
│           └── useAuthForm.ts
├── domain/                              # Pure business logic (core of the app)
│   ├── course/
│   │   ├── Course.ts                    # Entity
│   │   ├── CourseRepository.ts          # Repository interface
│   │   ├── dtos/
│   │   │   ├── CreateCourseDTO.ts
│   │   │   └── CreateCourseResponseDTO.ts
│   │   └── usecases/
│   │       └── CreateCourseUseCase.ts
│   └── shared/
│       └── ValueObject.ts (if needed)
├── infrastructure/                      # Concrete implementations of repositories, services, jobs
│   ├── repositories/
│   │   └── SupabaseCourseRepository.ts
│   ├── services/
│   │   ├── AnalyticsService.ts          # OpenPanel integration
│   │   └── ErrorTrackerService.ts       # Sentry integration
│   ├── jobs/
│   │   └── trigger/
│   │       └── OnUserCreated.job.ts
│   └── supabase/
│       ├── client.ts
│       └── auth.ts
├── lib/                                  # Helpers, mappers, validators, etc.
│   ├── mappers/
│   │   └── courseMapper.ts
│   └── runWithErrorTracker.ts
├── styles/
│   └── globals.css
└── public/
    └── ...


# 🧰 Applied architecture: Clean Architecture adapted to Next.js 15

### Layers:

1. **Domain (`domain/`)**
   - Entities, repository interfaces, use cases, DTOs.
   - No dependency on React, Next.js, Supabase or any external tool.

2. **Application** (implicitly within `domain/usecases`)
   - Application-level logic orchestration.

3. **Infrastructure (`infrastructure/`)**
   - Implements concrete repositories (Supabase), external services (Sentry, OpenPanel), and jobs (trigger.dev).
   - Depends on tools, but implements domain-defined contracts.

4. **Presentation (`components/` + `app/`)**
   - Divided into:
     - `ui/`: atomic, reusable UI elements
     - `modules/`: composed components by business context
     - `states/`: hooks and logic that coordinate state, queries, and actions
   - Server actions are considered controllers and live co-located in `app/.../actions.ts`.

---

# ✅ Benefits

- Clear separation of concerns (domain, UI, infrastructure, controllers).
- Easy to test: each layer can be tested in isolation.
- Flexible to scale: switch Supabase out without touching business logic.
- UI components are reusable (great for working with designers or Storybook).
- External tools like server actions, trigger.dev, OpenPanel and Sentry are integrated cleanly.

---

# ⚠️ Potential drawbacks

- More folders and boilerplate up front: might feel like overhead in small projects.
- Slight learning curve if you're not familiar with Clean Architecture.
- Requires discipline with dependency direction (UI shouldn't import domain logic directly unless exposed).
- Even simple actions (e.g. create course) may involve 3–4 files (DTO, use case, repo, action).

---

# 🚀 Ideal for
- SaaS projects that aim to scale.
- Open source projects where other developers will contribute.
- Teams that value maintainability, clarity, and testability.
- Projects where you want to replace infra/tools without rewriting the app.

---