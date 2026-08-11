const express = require('express');
const { handleEnquiry, handleSiteVisitRequest } = require('../controllers/mailController');
const { validateEnquiry, validateSiteVisit } = require('../middleware/validateEnquiry');

const router = express.Router();

router.post('/enquiry', validateEnquiry, handleEnquiry);
router.post('/site-visit', validateSiteVisit, handleSiteVisitRequest);

module.exports = router;
