// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }
require('dotenv').config();
const devConfig = {
  MONGO_URL: process.env.DEV_MONGO_URL,
  GOOGLE_STRATEGY: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.DEV_APP_URL}auth/google/oauth2callback`,
    passReqToCallback: true,
  },
};

const prodConfig = {
  MONGO_URL: process.env.PROD_MONGO_URL,
  GOOGLE_STRATEGY: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.PROD_APP_URL}auth/google/oauth2callback`,
    passReqToCallback: true,
  },
};

const defaultConfig = {
  PORT: process.env.SERVER_PORT || 3001,
  LOCAL_STRATEGY: {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
};

const envConfig = env => (env === 'development' ? devConfig : prodConfig);

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};