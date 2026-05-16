const express = require('express');
// import the global error handler
const { globalErrHandler, notFoundErr } = require('../middlewares/globalErrHandler');
const morgan = require('morgan');
//import the adminRouter
const adminRouter = require('../routes/staff/adminRouter');

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());


// routes

//admin registration route
app.use('/api/v1/admins', adminRouter);

//error middlewares
app.use(notFoundErr); // notFoundErr should be used before the globalErrHandler
app.use(globalErrHandler);


// //admin login
// app.use('/api/v1/admins/login', adminRouter);

// //get all admins
// app.use('/api/v1/admins', adminRouter);

// //get single admin details
// app.use('/api/v1/admins/:id', adminRouter);

// //update admin details
// app.use('/api/v1/admins/:id', adminRouter);


// //delete admin
// app.use('/api/v1/admins/:id', adminRouter);


// //admin suspend teacher 
// app.use('/api/v1/admins/suspend/teacher/:id', adminRouter);

// //admin unsuspending teacher
// app.use('/api/v1/admins/unsuspend/teacher/:id', adminRouter);

// //admin withdraw Teacher 
// app.use('/api/v1/admins/withdraw/teacher/:id', adminRouter);

// //admin unwithdraw Teacher
// app.use('/api/v1/admins/unwithdraw/teacher/:id', adminRouter);

// //admin publish exam results
// app.use('/api/v1/admins/publish/exam/:id', adminRouter);


// //admin unpublish exam results
// app.use('/api/v1/admins/unpublish/exam/:id', adminRouter);


//export the app module
module.exports = app;