const verifyToken = require("../utils/verifyToken");
const Admin = require('../model/Staff/Admin');

const isLogin = async(req, res, next) => {
    //get the token
    const headerObj = req.headers;
    const token = headerObj.authorization.split(" ")[1];

    //verify the token
    const verifiedToken = verifyToken(token);
    if (verifiedToken) {
        //find the Admin
        const user = await Admin.findById(verifiedToken.id).select("username email role");
        req.userAuth = user;
        next();
   //save the user inti the request object 
    } else { 
        const err = new Error('Token expired/invalid');
        next(err);
    }
   
};

//export
module.exports = isLogin;