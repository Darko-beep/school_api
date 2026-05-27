//express
const express = require('express');
const app = require("../../app/app.js");
const { registerAdminCtrl,
    loginAdminCtrl,
    getAllAdminsCtrl,
    getAdminProfileCtrl,
    updateAdminCtrl,
    deleteAdminCtrl,
    suspendTeacherCtrl,
    unsuspendTeacherCtrl,
    withdrawTeacherCtrl,
    unwithdrawTeacherCtrl,
    publishExamResultsCtrl,
    unpublishExamResultsCtrl } = require('../../controller/staff/adminCtrl.js');

//isLoggin middleware 
const isLogin = require('../../middlewares/isLogin.js');

const adminRouter = express.Router();


//admin registration route
adminRouter.post('/register', registerAdminCtrl);

//admin login route
adminRouter.post('/login', loginAdminCtrl);


//ger all admins route
adminRouter.get('/',isLogin, getAllAdminsCtrl);

//get single admin details route
adminRouter.get('/profile',isLogin, getAdminProfileCtrl);

//update admin details route
adminRouter.put('/:id', updateAdminCtrl);


//delete admin route
adminRouter.delete('/:id', deleteAdminCtrl);

//suspend teacher route
adminRouter.put('/suspend/teacher/:id', suspendTeacherCtrl);

//unsuspend teacher route
adminRouter.put('/unsuspend/teacher/:id', unsuspendTeacherCtrl);

//withdraw teacher route
adminRouter.put('/withdraw/teacher/:id', withdrawTeacherCtrl);

//unwithdraw teacher route
adminRouter.put('/unwithdraw/teacher/:id', unwithdrawTeacherCtrl);

//publish exam results route
adminRouter.put('/publish/exam/:id', publishExamResultsCtrl);

//unpublish exam results route
adminRouter.put('/unpublish/exam/:id', unpublishExamResultsCtrl);

module.exports = adminRouter;