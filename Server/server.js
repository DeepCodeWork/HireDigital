const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3001;

// initializing middleware
app.use(express.json({extended:false}))
app.use(cors());

//Defining Routes
app.use('/api/product', require('./routes/api/product'));
app.use('/api/view', require('./routes/api/productViews'));


app.listen(PORT, ()=> {
    console.log(`Listening at port ${PORT}`)
})