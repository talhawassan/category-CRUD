//Routes
app.get("/",(req,res)=>{
    res.render("index");
})


app.post("/uploadphoto",upload.single('myImage'),(req,res)=>{
    var img = fs.readFileSync(req.file.path);
    var encode_img = img.toString('base64');
    var final_img = {
        contentType:req.file.mimetype,
        image:new Buffer(encode_img,'base64')
    };
    image.create(final_img,function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log(result.img.Buffer);
            console.log("Saved To database");
            res.contentType(final_img.contentType);
            res.send(final_img.image);
        }
    })
})


//post
// router.post('/category', upload2.single('upload'), async (req, res) => {
//     const name = req.body.name
//    const category = new Category({name, slug: slugify(name), image: req.file})
//    try {
//        await category.save()
//        res.status(201).send(category)
//    }catch(e) {
//        res.status(400).send()
//    }
// })

// endpoint with perfect slug
// router.post('/category', async (req, res) => {
//     const name = req.body.name
//    const category = new Category({name, slug: slugify(name)})
//    try {
//        await category.save()
//        res.status(201).send(category)
//    }catch(e) {
//        res.status(400).send()
//    }
// })
