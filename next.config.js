module.exports = {
  swcMinify: true,
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    INFURA_API: process.env.INFURA_API,
    GOOGLE_AUTH_CLIENT_ID: process.env.GOOGLE_AUTH_CLIENT_ID,
    GOOGLE_WEB3_VERIFIER: process.env.GOOGLE_WEB3_VERIFIER,
    WEB3AUTH_CLIENT_ID: process.env.WEB3AUTH_CLIENT_ID,
  },
};
