const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@admin': path.resolve(__dirname, '..', '..', '..', 'app/javascript/admin'),
    }
  }
}
