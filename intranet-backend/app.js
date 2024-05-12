const express = require('express')
const app = express()

/* ##################### */
/* ### PORT ############ */
/* ##################### */
const HTTP_PORT = process.env.PORT || 3001

/* ##################### */
/* ### ROUTES ########## */
/* ##################### */
const userRoute = require("./routes/user")

/* ##################### */
/* ### ENDPOINT ######## */
/* ##################### */
app.get("/", (req, res)=> {
    res.send("<h1>Hello HOME!!!</h1>")
})

app.use("/user", userRoute)

const onHttpStart = () => {
   console.log("##############################################")
   console.log("The INTRANET WEB SERVER has started...")
   console.log(`Server is listening on port ${HTTP_PORT}`)
   console.log("Press CTRL+C to stop the server.")
   console.log("##############################################")
}

app.listen(HTTP_PORT, onHttpStart)