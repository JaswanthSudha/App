require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const authRouter = require("./routes/auth")
const userRouter = require("./routes/user")
const postRouter = require("./routes/post")
const commentRouter = require("./routes/comment")
const multer = require("multer")
const path = require("path")
const cookieParser = require("cookie-parser")



mongoose.connect(process.env.STRING)
    .then(() => {
        //listen to the requests 
        //this will only listen to the requests after the connection is establised
        app.listen(process.env.PORT, () => {
            console.log("Listening on port ", process.env.PORT);
        })

    })
    .catch((error) => {
        console.log("got error here");
        console.log(error);

    })
const __dirname=path.resolve()
//middlewares
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/posts", postRouter)
app.use("/api/comments", commentRouter)
app.use(express.static("public"))
app.use(express.static(path.join(__dirname,"/frontend/build")))
app.use("/images", express.static(path.join(__dirname, "/images")))
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","build","index.html"))
})
//image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images")
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage: storage
})
app.post("/image/upload", upload.single("file"), (req, res) => {
    console.log(req.file)
})

// app.get("/image/get", (req, res) => {

// })