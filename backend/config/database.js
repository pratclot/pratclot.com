module.exports = ({ env }) => ({
  connection: {
    client: env("DATABASE_CLIENT", "sqlite"),
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "example"),
      user: env("DATABASE_USERNAME", "example"),
      password: env("DATABASE_PASSWORD", "example"),
    },
  },
});
