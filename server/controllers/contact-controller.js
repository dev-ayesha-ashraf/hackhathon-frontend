const contact = require("../models/contact-model");

const postContactForm = async (req, res) => {
    try {
        const response = req.body;
        await contact.create(response);
        return res.status(200).json({ msg: "Message sent successfully" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Message not delivered" });
    }
};

module.exports = {
    postContactForm
};
