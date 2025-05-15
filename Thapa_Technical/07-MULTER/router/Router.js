import express from 'express'
import { upload } from '../Multer/multerConfig.js'

const router= express.Router();

//upload route

router.post('/upload', upload.single('myfile'), (request, response) => {
    console.log('body:' , request.body);
    console.log('file:' , request.file);
    
    if (!request.file) {
      return response.status(400).send('No file uploaded')
    }
    response.send(`
      <h2>File upload Successfully</h2>
      <img src="/uploads/${request.file.filename}" width="300"/>
      <p><a href="/">Back</a></p>
      `)
  })
  
  router.get("/", (request, response) => {
    response.status(200).json({
      msg: "welcome server"
    })
  })


  export default router