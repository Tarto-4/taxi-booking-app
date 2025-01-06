exports.authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token || !token.startsWith('mockToken')) {
        return res.status(403).json({ message: 'Unauthorized' });
    }
    req.user = { id: parseInt(token.split('-')[1], 10) };
    next();
};
