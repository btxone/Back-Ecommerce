
const express = require('express');


const productRouter = require('./routes/productRouter')

 const mercadoPagoRouter = require('./routes/mercadoPagoRouter')

const server = express();



server.use(express.json());
// server.use(express.urlencoded({ extended: true }));

server.use('/', mercadoPagoRouter)

 server.use('/', productRouter)



module.exports = server;