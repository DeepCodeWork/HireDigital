const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

//initialising middleware
app.use(express.json({extended:false}))

//Defining Routes
app.use('/api/product', require('./routes/api/product'))
// app.use('/api/posts', require('./routes/api/posts'))
// app.use('/api/auth', require('./routes/api/auth'))
// app.use('/api/profile', require('./routes/api/profile'))


app.listen(PORT, ()=> {
    console.log(`Listening at port ${PORT}`)
})