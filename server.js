const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const path = require('path')

var cors = require('cors')

app.use(cors())

const PORT = process.env.PORT || 3000


app.use(express.urlencoded());


let cambia = false

app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/home.html')
})


app.get('/cambia', (req, res)=>{

    if(cambia){
        cambia = !cambia
        res.send('true')
        console.log('cambiata')
    }else{
        res.send('false')
        console.log('arrivata')

    }
})

app.post('/manda', (req, res)=>{
    cambia = !cambia
    console.log('mandata')
})


server.listen(PORT)