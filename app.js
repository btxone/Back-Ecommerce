const express = require('express');


// const productRouter = require('./routes/product')

 const mercadoPagoRouter = require('./routes/mercadoPago')
const morgan = require('morgan')
const server = express();


server.use(morgan("dev"));





server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/', mercadoPagoRouter)

// server.use('/', productRouter)



module.exports = server;