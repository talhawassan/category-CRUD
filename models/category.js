const mongoose = require('mongoose')

const CatgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: [true, 'Category must be unqiue'],
        minlength: [3, 'To short category length']
    },
    slug: {
       type: String,
       tolowercase: true
    },
    image: {
       type: String
    },
},
{timestamps: true}
)

const Category = mongoose.model('Category', CatgSchema)

module.exports = Category