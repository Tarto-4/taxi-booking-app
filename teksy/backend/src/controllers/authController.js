const users = require('../data/users.json');

exports.register = (req, res) => {
    const { email, password } = req.body;
    if (users.find(user => user.email === email)) {
        return res.status(400).json({ message: 'User already exists' });
    }
    users.push({ id: users.length + 1, email, password });
    return res.status(201).json({ message: 'Registration successful' });
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.json({ token: `mockToken-${user.id}`, userId: user.id });
};
