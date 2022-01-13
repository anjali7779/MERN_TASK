 const jwt = require("jsonwebtoken"); 
 const user = require('../models/User');
 const ErrorResponse = require('../utils/errorResponse');

 exports.protect = async(req, res, next) => {
    //  let token;

    //  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")
    //  ) {
    //      console.log(req.body)
    //      // Bearer 42fedg8g88hdhdh98dbhd 
    //      token = req.headers.authorization.split(" ")[1];
    //      console.log(token);
    //      res.status(200).cookie("credentials_token",token,{expires: new Date(Date.now() + COOKIE_EXPIRE * 24 * 24 * 60 * 1000),
    // httpOnly: true,}).json({success:true,token})
    //      if(!token) {
    //      return next(new ErrorResponse("Not authorized to access this route", 401));
    //  }
    //  }

     

    //  try {
    //      console.log(token)
    //      const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //      const user = await User.findById(decoded.id);

    //      if (!user) {
    //          return next(new ErrorResponse("No user found with this id", 404));
    //      }

    //      req.user = user;

    //      next();
    //  } catch (error) {
    //      console.log(error);
    //      return next(new ErrorResponse("Not authorized to access this route", 401));
    //  }

    
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Please Login to access this resources", 401));
  }
  console.log(`Authentication Token`, token);
  const decodeData = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decodeData);
  req.user = await user.findById(decodeData.id);
  next();

 };