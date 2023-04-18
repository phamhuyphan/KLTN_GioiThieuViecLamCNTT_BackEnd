const express = require("express");
const {
  getUserByEmail,
  allUsers,
  registerUser,
  sendEmail,
  authUser,
  getOTPById,
  getUserById,
  update,
  forgotPassword,
  reserPassword,
  deleteUserById,
  blockUserById
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect,allUsers);
router.route("/").post(registerUser);
router.route("/").put(protect,blockUserById);
router.route("/").delete(protect,deleteUserById);
router.route("/verify").post(sendEmail);
router.route("/verify/:id").post(getOTPById);
router.post("/login", authUser);
router.post("/:email", getUserByEmail);
router.post("/:id", getUserById);
router.post("/forgot-password/:userId",forgotPassword);
router.post("/forgot-password/:userId/reset",reserPassword);

router.route("/update").put(protect, update);
module.exports = router;
