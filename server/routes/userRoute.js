const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../model/userModel');

router.post('/register', async (req, res) => {

    if(!req.body.name || !req.body.email || !req.body.password || !req.body.cpassword) {
        return res.json({error: "Please enter all fields."});
    }

    try {
        const userExists = await User.findOne({email: req.body.email});

        if(userExists) {
            return res.json({error: 'Email id already exists.'});
        }
        else {
            if(req.body.password !== req.body.cpassword) {
                return res.json({error: "Password doesn't match."});
            }
            else {
                const new_user = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    cpassword: req.body.cpassword
                });

                await new_user.save();

                res.json({message: 'User Registered Successfully.'});
            }
        }
    } catch(err) {
        res.json({error: err});
        console.log(err);
    }
});


router.post('/login', async (req, res) => {

    if(!req.body.email || !req.body.password) {
        return res.json({error: "Please enter all fields."});
    }

    try {
        const userExists = await User.findOne({email: req.body.email});
        if(!userExists) {
            return res.json({error: "Invalid Credentials."});
        }
        else {
            const isPasswordMatch = await bcrypt.compare(req.body.password, userExists.password);

            if(!isPasswordMatch) {
                return res.json({error: "Invalid Credentials."});
            }
            else {
                const loginUserDetails = {
                    name: userExists.name,
                    email: userExists.email,
                    _id: userExists._id,
                    isAdmin: userExists.isAdmin
                }
                res.send({message: "Login Successful.", loginUser: loginUserDetails}); // use res.send if we want to store data in local storage bcz it is easy to convert into json.stringify.
            }
        }
    } catch(err) {
        res.json({error: err});
        console.log(err);
    }
});

router.get('/getusers', async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch(err) {
        res.json({error: err});
        console.log(err);
    }
});


router.delete('/deleteuser/:id', async (req, res) => {
    try {
        const deletePizza = await User.findOneAndDelete({_id: req.params.id});
        if(deletePizza) {
            res.json({message: 'User Deleted Successfully'});
        }
        else {
            res.json({error: 'User not found.'});
        }

    } catch(err) {
        res.json({error: err});
        console.log(err);
    }
});


router.post('/change-admin-status', async (req, res) => {
    try {
        const foundUser = await User.findOne({_id: req.body.userID});

        const updateUser = await User.findByIdAndUpdate(req.body.userID, {isAdmin: !foundUser.isAdmin}, {new: true});

        const finalAllUsers = await User.find({});
        if(updateUser) {
            if(foundUser.isAdmin) {
                res.json({message: 'Removed user as Admin.', finalAllUsers: finalAllUsers});
            }
            else {
                res.json({message: 'User appointed as Admin.', finalAllUsers: finalAllUsers});
            }
        }
        else {
            res.json({error: 'Error occured. Please try again later!'});
        }

    } catch(err) {
        res.json({error: err});
        console.log(err);
    }

})


module.exports = router;