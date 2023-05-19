const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://gagan:gagan@cluster0.kax7jot.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongoURL , {useUnifiedTopology : true, useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error', () =>{
    console.log('Mongo Connection failed')
})

connection.on('connected', () =>{
    console.log('Mongo Connection succesful')
})

module.exports = mongoose
