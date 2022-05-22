const express = require('express');
const app = express();
const port = process.env.PORT || 8080
app.use(express.json())
const {getSellers,createSellers,deleteSellers } = require('./controllers/seller.controller')
app.get("/seller",getSellers )
app.post("/seller",createSellers)
app.delete("/seller",deleteSellers)
app.listen(port,() =>{
    console.log(`app is running at  http://localhost:${port}`);
})

