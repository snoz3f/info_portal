require('dotenv').config()
const express = require("express")
const sequelize = require("./db/db");
const router = require('./routes/index')
const cors = require('cors')

const app = new express()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use("/pages", router)

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log("Server started on port " + PORT)
        })


        await sequelize.authenticate()
        await sequelize.sync()
    }
    catch (e){
        console.log(e)
    }
    }

start()