const express = require('express')
const app = express()

// Route handlers
app.get('/', (req, res)=>{
    res.send("Hello world")
})

app.listen(3000)  // Port

