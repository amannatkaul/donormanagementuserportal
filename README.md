#  Hope Foundation Donor Portal

A donor-only frontend prototype built with React, TypeScript, Vite, React Router, Tailwind CSS, React Hook Form, Zod, Recharts, date-fns, and Lucide icons.

## Development

```bash
npm install
npm run dev
npm run build
```

In Figma Make, the development server is started and supervised automatically.

## Demo mode

- Sign in with the prefilled demo email and password.
- Authentication, registration, password reset, contact submission, and payment processing are simulated.
- No real transaction, email, tax certificate, or support inquiry is created.
- Demo profile preferences and mock donations use browser storage. Payment credentials, real passwords, and secrets are never stored.
- Downloaded receipts are plainly marked as demonstrations and are not tax certificates.

## Production requirements

A production release requires secure server-side authentication, donor-scoped authorization, a PCI-compliant payment provider, recurring payment mandates, transactional email, a receipt/tax compliance service, protected APIs, database persistence, audit logging, privacy and retention controls, rate limiting, monitoring, and approved legal content.
