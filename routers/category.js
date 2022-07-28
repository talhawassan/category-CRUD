const express = require('express')
// const multer = require('multer')
const Category = require('../models/category')
const slugify = require('slugify')
const router = new express.Router()
// require('../cloudinaryConfig')
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer')

// const upload2 = multer({
//     dest: 'images',
//     filename: function (req, file, cb) {
//         cb(null, new Date().toISOString + file.originalname)
//     },
//     limits: {
//         fileSize: 1024 * 1024 *5
//     },
//     fileFilter(req, file, cb) {
//          if(!file.originalname.match(/\.(jpg|png)$/)){
//             return cb(new Error('please upload an image'))
//          }
//          cb(undefined, true)
//     }
// })

router.post('/category', upload.single('upload'), async (req, res) => {
    const name = req.body.name
    const result = await cloudinary.uploader.upload(req.file.path)
   const category = new Category({name, slug: slugify(name), image: result.secure_url})
   try {
       await category.save()
       res.status(201).send(category)
   }catch(e) {
       res.status(400).send()
   }
})

router.get('/category', async (req,res) => {
    try{
       const category = await Category.find({})
       res.send(category)
    }catch(e) {
      res.status(500).send(e)
    }
})

router.patch('/category/:id', async (req,res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new : true })
        if(!category){
           return res.status(404).send()
        }
        res.send(category)
    }catch(e) {
        res.status(400).send(e)
    }
})

router.delete('/category/:id', async (req, res) => {
    try {
       const category = await Category.findByIdAndDelete(req.params.id)

       if(!category){
         return res.status(404).send()
       }

       res.send(category)
    }catch(e) {
        res.status(500).send()
    }
})


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

// router.post('/upload', upload.single('upload') , (req,res) => {
//     res.send(req.file)
// })


module.exports = router