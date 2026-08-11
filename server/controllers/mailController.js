const {
  sendEnquiryNotificationToAdmin,
  sendEnquiryAcknowledgementToUser,
  sendSiteVisitNotificationToAdmin,
  sendSiteVisitAcknowledgementToUser,
} = require('../services/mailService');

async function handleEnquiry(req, res) {
  const data = {
    name: req.body.name?.trim(),
    phone: req.body.phone?.trim(),
    email: req.body.email?.trim(),
    property: req.body.property?.trim(),
    message: req.body.message?.trim(),
  };

  try {
    const tasks = [sendEnquiryNotificationToAdmin(data)];
    if (data.email) tasks.push(sendEnquiryAcknowledgementToUser(data));
    await Promise.all(tasks);
    res.json({ success: true, message: 'Enquiry received.' });
  } catch (err) {
    console.error('[handleEnquiry]', err.message);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
}

async function handleSiteVisitRequest(req, res) {
  const data = {
    name: req.body.name?.trim(),
    phone: req.body.phone?.trim(),
    email: req.body.email?.trim(),
    property: req.body.property?.trim(),
    preferredDate: req.body.preferredDate?.trim(),
    preferredTime: req.body.preferredTime?.trim(),
    message: req.body.message?.trim(),
  };

  try {
    const tasks = [sendSiteVisitNotificationToAdmin(data)];
    if (data.email) tasks.push(sendSiteVisitAcknowledgementToUser(data));
    await Promise.all(tasks);
    res.json({ success: true, message: 'Site visit request received.' });
  } catch (err) {
    console.error('[handleSiteVisitRequest]', err.message);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
}

module.exports = { handleEnquiry, handleSiteVisitRequest };
