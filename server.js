// load env FIRST
require('dotenv').config();

// creating a server using express
const http = require('http');
const app = require('./app/app');
require('./config/dbConnect'); // now env is available

// port 
const PORT = process.env.PORT || 2020;

// server 
const server = http.createServer(app);

// listen to the server  
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});