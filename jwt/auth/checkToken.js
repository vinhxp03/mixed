const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const _token = req.header('auth-token');

    if (!_token) {
        return res.status(401).send({
            code: 401,
            message: 'Please login!'
        });
    }

    try {
        const tokenInfo = jwt.verify(_token, process.env.SECRET_TOKEN);

        req.user = {...tokenInfo, _token};

        next();
    } catch (error) {
        return res.status(400).send({
            code: 400,
            message: error
        });
    }
}