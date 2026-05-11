// creating a server using express
const http = require('http'); //require the http module   
const app = require('./app/app'); //require the app module

//port 
const PORT = process.env.PORT || 2020;




//server 
const server = http.createServer(app);

//listen to the server  
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});