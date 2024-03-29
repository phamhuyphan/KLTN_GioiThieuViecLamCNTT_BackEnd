const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
  addFriend,
  generateQRCode,
  getUserByEmail,reserPassword,
  sendEmail,
  getOTPById, getUserById,
  update,forgotPassword
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect,allUsers);
router.route("/").post(registerUser);
router.route("/verify").post(sendEmail);
router.route("/verify/:id").post(getOTPById);
router.post("/login", authUser);
router.post("/:email", getUserByEmail);
router.post("/:id", getUserById);
router.post("/forgot-password/:userId",forgotPassword);
router.post("/forgot-password/:userId/reset",reserPassword);

router.route("/update").put(protect, update);
module.exports = router;
