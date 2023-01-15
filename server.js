require('dotenv').config();

const cors = require('cors')

const app = require('./app')

 const dbConnect = require('./db')
// server.use(morgan("dev"));

console.log(process.env.MONGODB)

const PORT = process.env.PORT ||  3002;


app.use(cors({origin: '*'}));

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`)
});

 dbConnect();