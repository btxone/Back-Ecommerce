require('dotenv').config();



const app = require('./app')

 const dbConnect = require('./db')
// server.use(morgan("dev"));

console.log(process.env.MONGODB)

const PORT = process.env.PORT ||  3002;




app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`)
});

 dbConnect();