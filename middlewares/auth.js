const jwt = require('jsonwebtoken');

const ensureAuth = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers['authorization'];
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            message: "Unauthorized, token is required"
        });
    }
    
    const token = authHeader.split(' ')[1];
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "JWT expired or incorrect"
        });
    }
};

module.exports = ensureAuth;