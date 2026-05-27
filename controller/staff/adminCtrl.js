// import asyncHandler from 'express-async-handler';
const asyncHandler = require('express-async-handler');

// import the Admin model
const Admin = require('../../model/Staff/Admin');

//require generate token from utils
const generateToken = require('../../utils/generateToken');

//require verify token from utils
const verifyToken = require('../../utils/verifyToken');

// import bcrypt for password hashing
const bcrypt = require('bcryptjs');

//register Admin 
exports.registerAdminCtrl = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
  
    // check if email exists
    const adminFound = await Admin.findOne({ email });
    if (adminFound) {
        res.json("Admin with this email already exists")
    }      
   
    // // hash password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // create new admin
    const user = await Admin.create({ username, email, password}); // password: hashedPassword
    // await user.save();

    res.status(201).json({
      status: "success",
      message: "Admin registered successfully",
      data: user
    });

    });

// Admin login controller
exports.loginAdminCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
        //find user by email
        const user = await Admin.findOne({ email });
        if (!user) {
            return res.json("Admin with this email does not exist");
        }
        // is user is found and verify password
    if (user && await user.verifyPassword(password)) {
        
        return res.status(200).json({
            data: generateToken(user._id),
            message: "Admin logged in successfully"
        });
        } else {
            return res.json({ message: "Invalid Login Credentials" });
        }
  
        res.json({
            status: "error",
            error: error.message
        });
});
    

// Get all admins controller
exports.getAllAdminsCtrl = asyncHandler(async(req, res) => {
    const admins = await Admin.find();
    res.status(200).json({
        status: "success",
        message: "Admin fetched successfully",
        data:admins
    });
});

// Get single admin details controller
exports.getAdminProfileCtrl = asyncHandler(async(req, res) => {
    console.log(req.userAuth);
    const admin = await Admin.findById(req.userAuth._id).select(
        "-password -createdAt -updatedAt"
    );
    if (!admin) {
        throw new Error('Admin Not Found')
    } else { 
        res.status(200).json({
            status: 'success',
            data: admin,
            message: "Admin Profile Fetched successfully"
        });
    }

});

// Update admin details controller
exports.updateAdminCtrl = (req, res) => {
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
};

// Delete admin controller
exports.deleteAdminCtrl = (req, res) => {
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
};

// Suspend admin controller
exports.suspendTeacherCtrl = (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: 'Admin suspended successfully'
        });
    } catch (error) {
         res.json({
             status: "error",
            error: error.message
        });
    }
};

//unsuspend admin controller
exports.unsuspendTeacherCtrl = (req, res) => {
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
};

//withdraw admin controller
exports.withdrawTeacherCtrl = (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: 'Teacher withdrawn successfully'
        });
    } catch (error) {
         res.json({
             status: "error",
            error: error.message
        });
    }
};

//unwithdraw admin controller
exports.unwithdrawTeacherCtrl = (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: 'Teacher unwithdrawn successfully'
        });
    } catch (error) {
        res.json({
            status: "error",
            error: error.message
        });
    }
};

//publish Exam Results controller
exports.publishExamResultsCtrl = (req, res) => {
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
};

//unpublish Exam Results controller
exports.unpublishExamResultsCtrl = (req, res) => {
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
};


