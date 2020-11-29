const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('@model/user');
const verify = require('@auth/checkToken');
const {registerValidation, loginValidation} = require('@auth/validation');

router.get('/', verify, function(req, res){
    res.send("")
})

router.post('/register', async (req, res) => {
    const db = require('@database/low');

    let newUser = new User(db);

    // Validate body
    const {error} = registerValidation(req.body);
    if (error) {
        return res.status(400).send({
            code: 400,
            message: error //.error.details[0].message
        });
    }

    try {
        const emailExist = db.get('users').find({email: req.body.email}).value();
        if (emailExist) {
            return res.status(400).send({
                code: 400,
                message: 'This email already exists'
            });
        }
        
        // Set new user
        newUser.name = req.body.name;
        newUser.email = req.body.email;
        newUser.password = req.body.password;

        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(newUser.password, salt);
        newUser.password = hashPass;

        db.get('users').push(newUser).write();

        res.send({
            code: 200,
            message: "Success"
        });
    } catch (error) {
        res.status(400).send({
            code: 400,
            message: error
        });
    }
});

router.post('/login', async (req, res) => {
    const db = require('@database/low');

    // Validate body
    const {error} = loginValidation(req.body);
    if (error) {
        return res.status(400).send({
            code: 400,
            message: error //.error.details[0].message
        });
    }

    try {
        const user = db.get('users').find({email: req.body.email}).value();
        if (!user) {
            return res.status(400).send({
                code: 400,
                message: 'This email does not exists'
            });
        }

        const passLogin = await bcrypt.compare(req.body.password, user.password);
        if (!passLogin) {
            return res.status(400).send({
                code: 400,
                message: 'Invalid password'
            });
        }

        // Set token
        const _token = jwt.sign({id: user.id}, process.env.SECRET_TOKEN);
        res.header("auth-token", _token);

        res.send({
            code: 200,
            message: "Success",
            data: _token
        });
    } catch (error) {
        res.status(400).send({
            code: 400,
            message: error
        });
    }
});

router.get('/all', verify, function(req, res){
    const db = require('@database/low');

    try {
        const user = db.get('users').find({id: req.user.id}).value();
        if (!user) {
            return res.status(400).send({
                code: 400,
                message: 'User does not exists'
            });
        }

        let result = [];
        const users = db.get('users').value();

        // Loop res users
        users.forEach(user => {
            result.push({
                name: user.name,
                email: user.email
            });
        });

        res.send({
            code: 200,
            message: "Success",
            data: result
        });
    } catch (error) {
        res.status(400).send({
            code: 400,
            message: error
        });
    }
});

router.get('/logout', verify, async (req, res) => {
    const db = require('@database/low');

    try {
        // Destroy token

        res.send({
            code: 200,
            message: "Success",
            data: 1
        });
    } catch (error) {
        res.status(400).send({
            code: 400,
            message: error
        });
    }
});

module.exports = router;