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

//helper functions imported from the utils folder
const {hashPassword, isPassMatched} = require('../../utils/helpers');


// Admin register controller
exports.registerAdminCtrl = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // Check if email already exists
  const adminFound = await Admin.findOne({ email });
  if (adminFound) {
    return res.status(400).json({
      status: "fail",
      message: "Admin with this email already exists",
    });
  }

  // Hash password using helper
  const passwordHashed = await hashPassword(password);

  // Create new admin
  const user = await Admin.create({
    username,
    email,
    password: passwordHashed,
  });

  // Respond with safe data (exclude password)
  res.status(201).json({
    status: "success",
    message: "Admin registered successfully",
    data: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role, // include if you have roles in schema
    },
  });
});



// Admin login controller
exports.loginAdminCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find admin by email
  const user = await Admin.findOne({ email });
  if (!user) {
    return res.status(404).json({
      status: "fail",
      message: "Admin with this email does not exist",
    });
  }

  // Verify password using helper
  const isMatched = await isPassMatched(password, user.password);
  if (!isMatched) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid login credentials",
    });
  }

  // Generate token
  const token = generateToken(user._id);

  // Respond with safe data
  return res.status(200).json({
    status: "success",
    message: "Admin logged in successfully",
    data: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      token,
    },
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
exports.updateAdminCtrl = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;

  // Check if email is taken by another admin
  if (email) {
    const emailExist = await Admin.findOne({ email });
    if (emailExist && emailExist._id.toString() !== req.userAuth._id.toString()) {
      return res.status(400).json({
        status: "fail",
        message: "This email is taken and already exists",
      });
    }
  }

  // Build update fields dynamically
  const updateFields = { email, username };

  if (password) {
    updateFields.password = await hashPassword(password);
  }

  // Update admin
  const admin = await Admin.findByIdAndUpdate(req.userAuth._id, updateFields, {
    new: true,
    runValidators: true,
  }).select("-password"); // exclude password from response

  if (!admin) {
    return res.status(404).json({
      status: "fail",
      message: "Admin not found",
    });
  }

  res.status(200).json({
    status: "success",
    message: "Admin updated successfully",
    data: {
      id: admin._id,
      username: admin.username,
      email: admin.email,
      role: admin.role,
    },
  });
});


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


