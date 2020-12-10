import express from 'express' 

const app = express()


app.listen("9090", ()=> {
    console.log("listening on port 9090")
})