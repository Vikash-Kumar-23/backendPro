import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/temp');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  }
});


// Middleware for handling file uploads
// This middleware will store files in the 'public/temp' directory
export const upload = multer({
  storage: storage,
  //extra code :-
  limits: {
    fileSize: 10 * 1024 * 1024 // Limit file size to 10MB
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(file.mimetype);
    const mimetype = allowedTypes.test(file.originalname.split('.').pop().toLowerCase());

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error('Only images are allowed!'));
    }
  }
});