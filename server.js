const express = require('express')
const app = express()
const dotenv = require("dotenv").config()
const path = require("path")
const connectDB = require("./config/db.js")
const port = 3000
const Item = require("./models/Item.js")

connectDB()


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get("/getList", async (req,res) => {
    try{
        itemList = await Item.find()
        res.json(itemList)
    }catch(e){
        res.send("hay error o está vacío", e)
    }
})

app.get("/addItem", async (req,res) =>{
    //añadir elemento
})

app.listen(port, () => {
  console.log(`Servidor levantado en puerto ${port}`)
})