require('dotenv').config();

const app = require('./app')
// const dbConnect = require('./db')
// server.use(morgan("dev"));



const PORT =  3002;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`)
});

// dbConnect();