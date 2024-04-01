require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const authRouter = require("./routes/auth")
const userRouter = require("./routes/user")
const postRouter = require("./routes/post")
const commentRouter = require("./routes/comment")
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
//middlewares
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/posts", postRouter)
app.use("/api/comments", commentRouter)