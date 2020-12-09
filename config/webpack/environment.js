const { environment } = require('@rails/webpacker')

const customConfig = require('./loaders/custom')
environment.config.merge(customConfig)

const lessloader = require('./loaders/less')
environment.loaders.prepend('less-loader', lessloader)

module.exports = environment
