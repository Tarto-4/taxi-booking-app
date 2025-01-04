const users = []; // Temporary in-memory storage for users

// Register a user
const registerUser = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const userExists = users.find((user) => user.email === email);
  if (userExists) {
    return res.status(409).json({ message: 'User already exists' });
  }

  const newUser = { id: users.length + 1, name, email, password };
  users.push(newUser);
  res.status(201).json({ message: 'User registered successfully' });
};

// Login a user
const loginUser = (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email && user.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.status(200).json({ message: 'Login successful', user });
};

module.exports = { registerUser, loginUser };
