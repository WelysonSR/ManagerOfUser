const validateUser = (req, res, next) => {
  const { username, email, password } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex = /^[0-9]{4,8}$/;
  try {
    if (!emailRegex.test(email))
      throw new Error('invalid data');
    if (!passwordRegex.test(password))
      throw new Error('invalid data');
    if (!username || username.length < 3) 
      throw new Error('invalid data');
  } catch (err) {
    res.status(400).json({ "message": "invalid data" })
  }
  next();
}

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex = /^[0-9]{4,8}$/;
  try {
    if (!emailRegex.test(email))
      throw new Error('email or password is incorrect');
    if (!passwordRegex.test(password))
      throw new Error('email or password is incorrect');
  } catch (err) {
    res.status(400).json({ "message": err.message })
  } 
  next();
};

module.exports = {validateUser, validateLogin };
