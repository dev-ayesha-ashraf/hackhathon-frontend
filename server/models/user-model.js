const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});


// secure the use rpassword
userSchema.pre('save', async function (next) {
    console.log("pre-method", this);
    const user = this;
    if (!user.isModified('password')) {
        next();
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error)
    }
})
// model or collection name
const User = new mongoose.model("User", userSchema);
module.exports = User;

