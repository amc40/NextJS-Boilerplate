# NextJS Boilerplate

A template for Next JS projects.

It uses:

- Prisma for schema management
- Devcontainer for development
- Eslint and prettier for linting
- Azure for oauth authentication
- Github actions
- Vercel for deploying the site

## TODO

- [ ] Determine why there is a server error when deploying to vercel
- [ ] Integrate prisma workflow with planetscale
- [ ] Use terraform to create github repo with sensible configuration
- [ ] Use terraform to create Azure App Registration
- [ ] Figure out how to allow authentication for preview deployments (shouldn't use wildcards for oath redirects)
- [ ] Add e2e testing (using playwright?)
