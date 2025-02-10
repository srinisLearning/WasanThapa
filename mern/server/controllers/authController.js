const home = async (req, res) => {
  try {
    res.status(200).send("Wasan Server Running");
  } catch (error) {
    console.log(error);
  }
};
const register = async (req, res) => {
  try {
    res.status(200).send("Pls register");
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
