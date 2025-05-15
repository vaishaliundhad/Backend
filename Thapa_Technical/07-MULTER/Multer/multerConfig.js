import multer from "multer";

const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, 'uploads/')
  },
  filename: function (request, file, callback) {
    callback(null, Date.now() + '_' + file.originalname);
  }
});


export const upload = multer({ storage });