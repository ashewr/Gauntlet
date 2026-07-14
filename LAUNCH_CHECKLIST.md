# The Gauntlet Launch Checklist

This file tracks the production work completed in the codebase and the remaining external launch tasks.

## Completed in code

- Real backend routes for auth, goals, proofs, wallet funding, shop orders, admin review, and refunds.
- Local production-like runtime on `http://localhost:4000`.
- Same-origin API calls for production domains, with local-file redirect support for development.
- Session-backed authentication with secure HTTP-only cookies.
- Full account snapshot hydration from the backend.
- In-memory API rate limiting for global API traffic and auth routes.
- Trusted-origin checks for API write requests.
- Stronger security headers with Helmet and a baseline CSP.
- No-store caching headers for sensitive auth/admin API responses.
- API readiness endpoint at `/api/ready`.
- Password reset and welcome email wiring through Resend.
- Stripe Checkout wallet funding and Stripe webhook crediting for Stax deposits.
- Duplicate active goals blocked by title on the frontend and backend.
- Public legal/support pages:
  - `terms.html`
  - `privacy.html`
  - `refund.html`
  - `support.html`

## Still required before public launch

- Set `APP_URL` and `API_URL` to `https://gauntletgoals.com`.
- Replace Stripe placeholder secrets with real Stripe test/live secrets.
- Configure Stripe webhook delivery to `https://gauntletgoals.com/api/webhooks/stripe`.
- Verify `gauntletgoals.com` in Resend and set `EMAIL_FROM` to `The Gauntlet <noreply@gauntletgoals.com>`.
- Use hosted production Postgres and run Prisma schema sync/migrations.
- Replace local proof image handling with your planned cloud storage flow.
- Deploy behind HTTPS on your production domain.
- Create your first production admin account safely.
- Perform full end-to-end QA in production-like conditions.

## Recommended deployment order

1. Set production env vars from `.env.production.example`.
2. Switch `DATABASE_URL` to hosted Postgres.
3. Deploy app/API behind HTTPS.
4. Point `gauntletgoals.com` DNS in Cloudflare to the deployed app.
5. Connect Stripe and webhook secrets.
6. Verify Resend sending for `gauntletgoals.com`.
7. Connect proof storage.
8. Verify auth, funding, proof, reward, shop, admin, and refund flows.
