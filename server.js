require('dotenv').config();

const server = require('./app.js');

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`server run on **${port}***`));
