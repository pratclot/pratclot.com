# pratclot.com

This is a `strapi` + `gatsby` monorepo. Provided `docker-compose.yml` file will build and start backend according to
`.env.backend`.

Frontend should be built with this:
```bash
nvm use 18
yarn ci:frontend
```

There are also run configurations for vscode provided. For convenience, it uses the same env files as docker-compose.

To reset backend password do this:
```bash
yarn strapi admin:reset-user-password --email="YOUR_EMAIL" --password="YOUR_NEW_PASSWORD"
```
