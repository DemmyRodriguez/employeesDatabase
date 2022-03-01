const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/employeesDatabase', {
useUnifiedTopology: true, useNewURlParser: true}).then(() => {
    console.log('Successfully connected to MongoDB');
}).catch(e => {
    console.log('Connection error', e.message)
})

mongoose.set('debug', true)
// it will show the raw query mongo as it executes in the terminal

const db = mongoose.connection


module.exports = db
