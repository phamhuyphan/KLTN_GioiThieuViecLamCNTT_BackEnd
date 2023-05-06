const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const UserOTPVerification = require("../models/userOTPVarification")
dotenv.config();

//@description     Get or Search all users
//@route           GET /api/user?search=
//@access          Public
//@description     Get or Search all users
//@route           GET /api/user?search=
//@access          Public
const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { username: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});

//@description     Register new user
//@route           POST /api/user/
//@access          Public
// const registerUser1 = asyncHandler(async (req, res) => {
//   const { username, email, password, pic } = req.body;

//   if (!username || !email || !password ) {
//     res.status(400);
//     throw new Error("Please Enter all the Feilds");
//   }

//   const userExists = await User.findOne({ email }).catch(err => { console.log(err) });

//   if (userExists) {
//     res.status(400);
//     throw new Error("User already exists");
//   } else {
//     sendEmail();
//   }

//   const user = await User.create({
//     username,
//     email,
//     loaitaikhoan,
//     password,
//     pic,
//     verify: false

//   });

//   if (user) {
//     res.status(201).json({
//       _id: user._id,
//       username: user.username,
//       email: user.email,
//       loaitaikhoan:user.loaitaikhoan
//       //isAdmin: user.isAdmin,
//       pic: user.pic,
//       verify: user.verify,
//       token: generateToken(user._id),
//     });
//   } else {
//     res.status(400);
//     throw new Error("User not found");
//   }
// });

const registerUser1 = asyncHandler(async (req, res) => {
  const {username, email, password,loaitaikhoan, pic } = req.body;

  if (!username || !email || !password || !loaitaikhoan) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    username,
    email,
    password,
    loaitaikhoan,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      loaitaikhoan:user.loaitaikhoan,
      //isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

//@description     Auth the user
//@route           POST /api/user/login
//@access          Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).catch(err => { console.log(err) });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      loaitaikhoan:user.loaitaikhoan,
      //isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password or Not Verify");
  }
});

//@description    get user by Email
//@route           get /api/user/:email
//@access          Public
const getUserByEmail = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.json((user));
  }
  if (!user) {
    res.json("a");
  }
});

//  api đổi mật khẩu sao khi click vào link trong email
const reserPassword = asyncHandler(async (req, res) => {
  const id = req.params.userId;
  const { password } = req.body
  const salt = await bcrypt.genSalt(10);
  const password2 = await bcrypt.hash(password, salt);

  await User.updateOne({ _id: id }, { password: password2 }
  ).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.send(err);
  });

})


const getUserById = asyncHandler(async (req, res) => {
  const id = req.body;
  const user = await User.findOne(id);
  if (user) {
    res.json((user));
  }
  if (!user) {
    res.json("No search user");
  }
});

// api delete user by id
const deleteUserById = asyncHandler(async (req, res) => {
  const { userId } = req.body;
    let deleteUser = await User.deleteOne({_id:userId})
    if(deleteUser){
        res.send("delete "+userId)
    }else{
        res.status(404);
        throw new Error(`Delete not sure`);
    }
});

// api khóa user
const blockUserById = asyncHandler(async (req, res) => {
  const id = req.params.userId;
  await User.updateOne({ _id: id }, { verify:false }
  ).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.send(err);
  });

})


const registerUser = asyncHandler(async (req, res) => {

  const { username, email, password,loaitaikhoan, pic } = req.body;

  const otp = Math.floor(1000 + Math.random() * 9000);

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USERNAME, // generated ethereal user
      pass: process.env.MAIL_PASSWORD, // generated ethereal password
    },
  });

  const info = {
    from: process.env.MAIL_FROM_ADDRESS, // sender address
    to: JSON.stringify(email), // list of receivers
    subject: "Verify Your Email ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<h2>${otp}</h2>`, // html body
  }

  if (!username || !email || !password || !loaitaikhoan ) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const userExists = await User.findOne({ email }).catch(err => { console.log(err) });

  if (userExists && (userExists.verify === false)) {
    transporter.sendMail(info);
    const userid = (userExists._id).toHexString();
    const verify = await UserOTPVerification.create({
      userId: userid,
      otp: otp,
    });
    if (verify) {
      res.json(verify)
    }
  }
  if (userExists && (userExists.verify === true)) {
    res.status(400);
    throw new Error("User already exists");
  }
  if (!userExists) {
    const user = await User.create({
      username,
      email,
      password,
      loaitaikhoan,
      pic,
      verify: false
    });
    const userid = (user._id).toHexString();
    await UserOTPVerification.create({
      userId: userid,
      otp: otp,
    });
    if (user) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        pic: user.pic,
        loaitaikhoan:user.loaitaikhoan,
        verify: user.verify,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("User not found");
    }
  }

});

const sendEmail = asyncHandler(async (req, res) => {
  const { userId, otp } = req.body;

  await UserOTPVerification.findOne({ userId: userId }).then(data => {
    console.log(userId);
    const otpdata = data.otp;

    // console.log(typeof otpdata);
    // console.log(typeof otp);
    if (otp == otpdata) {
      User.findByIdAndUpdate(userId, { verify: true }).then(data => {
        res.json("Verify Success");
      }).catch(err => { console.log(err); })
      console.log("true");
    } else {
      console.log("False");
    }
  });
})

const getOTPById = asyncHandler(async (req, res) => {

  const { id } = req.body;
  await User.findOne({ id }).then(data => {
    res.json(data)
  }).catch(err => console.log(err))

});
// sửa thông tin user(username)
const update = asyncHandler(async (req, res) => {
  const { _id, username, pic } = req.body;

  const updateInfo = await User.findByIdAndUpdate(
    _id,
    {
      username,
      pic,
    },
    {
      new: true,
    }
  );
  if (!updateInfo) {
    res.status(400);
    throw new Error("User not found");
  } else {
    res.json(updateInfo);
  }
});


// api nhập vào email gửi về link đến trang forgot password
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
 
    const link = `http://localhost:3000/reset-password/${oldUser._id}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USERNAME, // generated ethereal user
        pass: process.env.MAIL_PASSWORD, // generated ethereal password
      },
    });

    const mailOptions = {
      from: process.env.MAIL_FROM_ADDRESS, // sender address
      to: JSON.stringify(email), // list of receivers
      subject: "Forgot PassWord ✔", // Subject line
      text: link, // plain text body
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) { }
});

module.exports = {
  getUserByEmail,
  allUsers,
  registerUser,
  registerUser1,
  sendEmail,
  authUser,
  getOTPById,
  getUserById,
  update,
  forgotPassword,
  reserPassword,
  deleteUserById,
  blockUserById
};
