
const express = require('express');
const cors = require('cors')
const productRouter = require('./routes/productRouter')
const categoryRouter = require('./routes/category')
const userRouter = require('./routes/user')
const reviewsRouter = require('./routes/reviews')
const cartRouter = require('./routes/cart')
const mercadoPagoRouter = require('./routes/mercadoPagoRouter')

const server = express();



server.use(express.json());
// server.use(express.urlencoded({ extended: true }));
server.use(cors({origin: 'https://back-ecommerce.up.railway.app'}))

server.use('/', productRouter)

server.use('/', categoryRouter)

server.use('/', userRouter)

server.use('/', reviewsRouter)

server.use('/', cartRouter)

server.use('/', mercadoPagoRouter)

module.exports = server;