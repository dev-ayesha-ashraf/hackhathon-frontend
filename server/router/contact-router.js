const express = require('express');
const contactForm = require('../controllers/contact-controller');
const router = express.Router();

router.route('/contact').post(contactForm.postContactForm);

module.exports = router;
