# NextJS Boilerplate

A template for Next JS projects.

It uses:

- Prisma for schema management
- Devcontainer for development
- Eslint and prettier for linting
- Azure for oauth authentication
- Github actions
- Vercel for deploying the site

## Manual Setup Steps

1. Create [`.env`](./.env) file
   1. Generate planetscale login
   1. Fill in `DATABASE_URL`
   1. Generate `NEXTAUTH_SECRET` and fill in
   1. Fill in Azure Environment variables
1. Configure Vercel project environment variables
   1. Generate new planetscale login
   1. Fill in `DATABASE_URL`
   1. Generate `NEXTAUTH_SECRET` and fill in
   1. Set `NEXTAUTH_URL` to the one allocated by Vercel

## TODO

- [-] Determine why there is a server error when deploying to vercel
- [ ] Integrate prisma workflow with planetscale
- [ ] Use terraform to create github repo with sensible configuration
- [ ] Use terraform to create Azure App Registration
- [ ] Figure out how to allow authentication for preview deployments (shouldn't use wildcards for oath redirects)
- [ ] Add e2e testing (using playwright?)
