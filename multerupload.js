// const multer = require('multer')

// const imageStorage = multer.diskStorage({
//     // Destination to store image     
//     destination: 'images' 
//     //   filename: (req, file, cb) => {
//     //       cb(null, file.fieldname + '_' + Date.now() 
//     //          + path.extname(file.originalname))
//     //         // file.fieldname is name of the field (image)
//     //         // path.extname get the uploaded file extension
//     // }
// });

// const imageUpload = multer({
//     storage: imageStorage,
//     limits: {
//       fileSize: 1000000 // 1000000 Bytes = 1 MB
//     },
//     fileFilter(req, file, cb) {
//       if (!file.originalname.match(/\.(png|jpg)$/)) { 
//          // upload only png and jpg format
//          return cb(new Error('Please upload a Image'))
//        }
//      cb(undefined, true)
//   }
// }) 

// // For Single image upload
// app.post('/uploadImage', imageUpload.single('image'), (req, res) => {
//     res.send(req.file)
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//          if(!file.originalname.match(/\.(jpg|png)$/)){
//             return cb(new Error('please upload an image'))
//          }
//          cb(undefined, true)
//     }
// })

// app.post('/upload', upload.single('upload'), (req,res) => {
//     res.send()
// })