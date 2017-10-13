const config = {}

config.db = {
  folder: 'db',
  secret: process.env.REDIS_STORE_SECRET
}

module.exports = config