const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Successfully Connected");
    } catch (error) {
        console.error("Db connection Failed");
        process.exit(0)
    }
}
module.exports = connectDb;