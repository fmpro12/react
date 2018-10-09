const mongoose = require('mongoose')
let DB_MONGO = 'mongodb://admin:zubur1@ds125683.mlab.com:25683/users-list' || 'mongodb://localhost:27017/users-list'

mongoose.connect(DB_MONGO, { useNewUrlParser: true } )

module.exports = mongoose





