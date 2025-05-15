import express from 'express'
import router from './router/Router.js';

const hostName = "127.0.0.1"
const port = 9999

const app = express();

// app.use(express.static('public'))



app.use('/uploads', express.static('uploads'))

//upload route
app.use("/" , router)

app.listen(port, () => {
  console.log(`Express server is started http://${hostName}:${port}`);

})