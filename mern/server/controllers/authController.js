var bcrypt = require("bcryptjs");

const User = require("../models/userModel");
const home = async (req, res) => {
  try {
    res.status(200).send("Wasan Server Running");
  } catch (error) {
    console.log(error);
  }
};
const register = async (req, res) => {
  try {
    const { userName, email, phone, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).send("User already exists");
    }
    /*  const saltRound = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltRound);
 */
    const user = new User({
      userName,
      email,
      phone,
      //password: hashedPassword,
      password,
    });
    await user.save();
    // console.log(userName, email, phone, password);
    res.status(200).send({ msg: "User Registered Sucessfully", user: user });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    res.status(200).send("Pls login");
  } catch (error) {
    console.log(error);
  }
};
/* const home = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        "Welcome to world best mern series by thapa technical using router "
      );
  } catch (error) {
    console.log(error);
  }
}; */

module.exports = { home, register, login };
