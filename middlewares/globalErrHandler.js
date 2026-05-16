const globalErrHandler = (err, req, res, next) => {

    //status
    //message
    //stack trace

    const stack = err.stack;
    const message = err.message;
    const status = err.status ? err.status : 500; // the 500 means internal server error
    const statusCode = err.statusCode ? err.statusCode : 500;

    res.status(statusCode).json({
        status: "error",
        message,
        stack
    });
};

// not found error handler
const notFoundErr = (req, res, next) => {
    const err = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(err);
};

module.exports = {globalErrHandler, notFoundErr};