# 🚀 Pull Request

### 📄 Description

<!-- Briefly describe what this PR does and why it’s needed -->

---

### ✅ Clean Architecture Checklist

- [ ] Use case created in `domain/usecases`
- [ ] Input + output DTOs defined in `domain/dtos`
- [ ] Repository interface defined in `domain/repositories`
- [ ] Concrete implementation added in `infrastructure/repositories`
- [ ] Repositories selected dynamically via `infrastructure/repositories/index.ts`
- [ ] Server action acts as controller (`app/.../actions.ts`)
- [ ] Infra tools used only in infra (no leaks into domain)
- [ ] UI built with `shadcn/ui` components
- [ ] React hooks live in `components/states/`
- [ ] Analytics, Sentry, or side effects only called from controller (not domain)
- [ ] Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/)

---

### 🧪 Testing

<!-- Mention how the feature was tested manually or with tests -->

---

### 📸 Screenshots (if UI-related)

<!-- Optional: before/after screenshots -->
