olumideolaolukoyenikan
const express = require('express');
const connectDB = require('./config/db');
var bodyParser = require('body-parser');   

const app = express();

// app.get('/', (req, res) =>
//   res.json({ msg: 'Welcome to the Product Manager API' })
// );

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json({ extended: false }));
//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));

connectDB();

//Serve static assets in production


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
