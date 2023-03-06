//import User, ErrorResponse and jwt
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse.js');
const jwt = require('jsonwebtoken');

const sendToken = (user, statusCode, res) => {
    const Token = user.getSignedJwtToken(res);
    res.status(statusCode).json({ success: true, token});
}

//register function
exports.register = async (req, res, next) => {
    const { username, email, password } = req.body;

    const existing_email = await User.findOne({email});

    if (existing_email) {
        return next(new ErrorResponse("Email already exists", 400));
    }

    try {
        const user = await User.create({ username, email, password});
        sendToken(user, 201, res);
    } catch (err) {
        next(err);
    }
}

//login function
exports.login = async (req, res, next) => {
    const { email, password} = req.body;
    
    if (!email || !password) {
        return next(new ErrorResponse("Please provide an email and password", 400));
    }

    try {
        //check that user already exists by email 
        const user = await User.findOne({email});
        if (!user) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }

        //check that password matches 
        const isMatch = await user.matchPasswords(password);
        if (!isMatch) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }

        //if email exists and password matches, send login Text
        sendToken(user, 200, res);
    }   catch (err) {
        next(err);
    }
}

//logout function
exports.logout = (req, res) => {
    res.clearCookie('refreshToken');
    return res.status(200).json({ success: true, message: "logged out"});
};