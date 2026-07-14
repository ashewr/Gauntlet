# The Gauntlet Production Migration

This repository now contains two layers:

- The current static prototype in the root HTML files.
- A production backend scaffold in `src/` with a real database schema in `prisma/schema.prisma`.

## What is now implemented

- Secure account registration and login with hashed passwords and server-side sessions.
- PostgreSQL-ready data model for users, wallets, goals, proof submissions, deposits, orders, and wallet ledger entries.
- Goal creation that locks Stax in the database instead of trusting browser storage.
- Shop order creation that deducts Stax on the server.
- Stripe Checkout Sessions scaffold for wallet funding.
- Stripe webhook handling scaffold to credit Stax after successful payment.
- Admin read endpoints for users and orders.
- Browser-side `api-client.js` helpers for migrating the current frontend to real APIs.

## What should be migrated next

1. Replace `localStorage` auth in `script.js` with `window.GauntletApi.register/login/me/logout`.
2. Replace local Bank funding with `/api/wallet/checkout-session` and redirect to Stripe Checkout.
3. Replace local goal save/launch with `/api/goals`.
4. Replace local shop checkout with `/api/shop/orders`.
5. Move proof uploads to server storage such as S3 or Cloudinary.
6. Add email verification, password reset, and audit logging.

## Important production notes

- `Stax` should be treated as platform credit, not a cash equivalent, unless legal counsel approves otherwise.
- Stripe webhooks must be reachable from the public internet in production.
- File uploads should not be stored in browser storage or directly in the database as base64 strings.
- Admin actions should be logged and eventually require stronger authorization controls.
