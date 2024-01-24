const User = require("../models/user-model")
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
        res.status(200).send("Welcome To Home Page Using Router")
    } catch (error) {
        console.log(error);
    }
}
const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({ msg: "User already exists" })
        }
        const userCreated = await User.create({ username, email, phone, password })
        res.status(201).json({ msg: userCreated })
    } catch (error) {
        res.status(500).json({ msg: "Internal server error" })
        res.status(500).json({ msg: "Internal server error", error: error.message });

    }
}


// login logic 
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, userExist.password);

        if (isPasswordValid) {
            res.status(200).json({ msg: "Successfully Login" });
        } else {
            res.status(400).json({ msg: "Invalid email or password" });
        }
    } catch (error) {
        console.log(error);  // Log the error for debugging purposes
        res.status(500).json({ msg: "Internal server error" });
    }
}

module.exports = { home, register, login }
