const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

require('dotenv').config(); 
console.log('JWT_SECRET:', process.env.JWT_SECRET);  

app.use(express.json());                           
app.use(express.urlencoded({ extended: true }));  

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

  app.use(cookieParser());

require('./config/mongoose.config');   
require('./routes/pet.routes')(app);
require('./routes/user.routes')(app);


app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

console.log('JWT_SECRET:', process.env.JWT_SECRET);