
// Admin registration controller
exports.registerAdminCtrl = (req, res) => {
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
};

// Admin login controller
exports.loginAdminCtrl = (req, res) => {
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
};

// Get all admins controller
exports.getAllAdminsCtrl = (req, res) => {
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
};

// Get single admin details controller
exports.getAdminByIdCtrl = (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: 'Admin details retrieved successfully'
        });
    }catch (error) {
        res.json({
            status: "error",
            error: error.message
        });
    }
};

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


