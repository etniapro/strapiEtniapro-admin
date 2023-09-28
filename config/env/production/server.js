module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});

// module.exports = ({ env }) => ({
//   proxy: true,
//   host: "0.0.0.0",
//   port: process.env.PORT,
//   url: env("DATABASE_URL"),
//   app: {
//     keys: env.array("APP_KEYS"),
//   },
//   admin: {
//     auth: {
//       secret: env("ADMIN_JWT_SECRET"),
//     },
//   },
// });
