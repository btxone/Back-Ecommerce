require('dotenv').config();

const server = require('./app')
// const dbConnect = require('./db')
// server.use(morgan("dev"));



const PORT =  3002;

server.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`)
});

// dbConnect();