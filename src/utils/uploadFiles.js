const multer = require('multer');
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {

  if (file.mimetype.startsWith('image/')) {
    cb(null, true)
  } else {
    cb(new Error('The file must be an image.'))
  }
};

const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } })

module.exports = upload
