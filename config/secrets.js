/**
 * Application secrets configuration
 *
 * All sensitive values are loaded from environment variables.
 * Never hardcode secrets in this file.
 *
 * Required environment variables:
 * - MONGOHQ_URL or MONGODB: Database connection string
 * - SESSION_SECRET: Secret for session signing
 * - COOKIE_SECRET: Secret for cookie signing
 *
 * See sample.env for all available configuration options.
 */

const requiredEnvVars = ['MONGOHQ_URL', 'MONGODB'];
const missingVars = requiredEnvVars.filter(
  varName => !process.env[varName]
);

if (missingVars.length > 0 && process.env.NODE_ENV !== 'test') {
  console.warn(
    `Warning: Missing required environment variables: ${missingVars.join(', ')}. ` +
    'Database functionality may be limited.'
  );
}

module.exports = {

  db: process.env.MONGODB || process.env.MONGOHQ_URL,

  sessionSecret: process.env.SESSION_SECRET || (
    process.env.NODE_ENV === 'development'
      ? 'development-secret-change-in-production'
      : undefined
  ),

  facebook: {
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: '/auth/facebook/callback',
    passReqToCallback: true
  },

  github: {
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: '/auth/github/callback',
    passReqToCallback: true
  },

  twitter: {
    consumerKey: process.env.TWITTER_KEY,
    consumerSecret: process.env.TWITTER_SECRET,
    token: process.env.TWITTER_TOKEN,
    tokenSecret: process.env.TWITTER_TOKEN_SECRET,
    callbackURL: '/auth/twitter/callback',
    passReqToCallback: true
  },

  google: {
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: '/auth/google/callback',
    passReqToCallback: true
  },

  linkedin: {
    clientID: process.env.LINKEDIN_ID,
    clientSecret: process.env.LINKEDIN_SECRET,
    callbackURL: '/auth/linkedin/callback',
    scope: ['r_basicprofile', 'r_emailaddress'],
    passReqToCallback: true
  },

  slackHook: process.env.SLACK_WEBHOOK,

  cookieSecret: process.env.COOKIE_SECRET || (
    process.env.NODE_ENV === 'development'
      ? 'development-cookie-secret-change-in-production'
      : undefined
  )
};
