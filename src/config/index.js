const config = {}

config.db = {
  host: 'localhost',
  secret: process.env.REDIS_STORE_SECRET
}

export default config;