//express
const express = require('express');
const adminRouter = express.Router();


//admin registration route
adminRouter.post('/register', (req, res) => {
    try { 
        res.status(201).json({
            status: "success",
            message: 'Admin registered successfully'
        });
    } catch (error) {
        res.json({
            status: "error",
            error: error.message
        });
    }
});

//admin login route
adminRouter.post('/login',(req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: 'Admin logged in successfully'
        });
    } catch (error) {
        res.json({
            status: "error",
            error: error.message
        });
    }
});


//ger all admins route
adminRouter.get('/', (req, res) => {
    try {  
        res.status(200).json({
            status: "success",
            message: 'Admins retrieved successfully'
        });
    } catch (error) {
        res.json({
            status: "error",   
            error: error.message
        });
    }
});

//get single admin details route
adminRouter.get('/:id', (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: 'Admin details retrieved successfully'
        });
    }
    catch (error) {
        res.json({
            status: "error",
            error: error.message
        });
    }
});

//update admin details route
adminRouter.put('/:id', (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: 'Admin details updated successfully'
        });
    } catch (error) {
        res.json({
            status: "error",
            error: error.message
        });
    }
});


//delete admin route
adminRouter.delete('/:id', (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: 'Admin deleted successfully'
        });
    } catch (error) {
        res.json({
            status: "error",
            error: error.message
        });
    }
});

//suspend teacher route
adminRouter.put('/suspend/teacher/:id', (req, res) => {
    try {
        res.status(200).json({  
            status: "success",
            message: 'Teacher suspended successfully'
        });
    }  catch (error) {
        res.json({
            status: "error",
            error: error.message
        });
    }   
});

//unsuspend teacher route
adminRouter.put('/unsuspend/teacher/:id', (req, res) => {
    try {   
        res.status(200).json({
            status: "success",
            message: 'Teacher unsuspended successfully'
        });
    } catch (error) {
        res.json({
            status: "error",
            error: error.message
        });
    }
});


//withdraw teacher route
adminRouter.put('/withdraw/teacher/:id', (req, res) => {
    try {
        res.status(200).json({  
            status: "success",
            message: 'Teacher withdrawn successfully'
        });
    }
    catch (error) {
        res.json({
            status: "error",
            error: error.message
        });
    }
}); 


//unwithdraw teacher route
adminRouter.put('/unwithdraw/teacher/:id', (req, res) => {
    try {   
        res.status(200).json({
            status: "success",
            message: 'Teacher unwithdrawn successfully'
        });
    }
    catch (error) {
        res.json({
            status: "error",
            error: error.message
        });
    }
});


//admin publish exam results
adminRouter.put('/publish/exam/:id', (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: 'Exam results published successfully'
        });
    } catch (error) {
        res.json({
            status: "error",
            error: error.message
        });
    }
});


//admin unpublish exam results
adminRouter.put('/unpublish/exam/:id', (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: 'Exam results unpublished successfully'
        });
    } catch (error) {
        res.json({
            status: "error",
            error: error.message
        });
    }
});

module.exports = adminRouter;