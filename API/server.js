const express = require('express');
const app = express();
require('dotenv').config();
const database = require('./config/db');

database();


const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/tickets', require('./routes/tickets'));



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

