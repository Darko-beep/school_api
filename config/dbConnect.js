const crypto = require('crypto');
global.crypto = crypto;

const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        console.log(process.env);
        await mongoose.connect(process.env.MONGO_URL);  
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
            }
};

dbConnect();