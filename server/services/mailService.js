const { transport, SMTP_USER } = require('../config/mailer');
const buildEnquiryAdminEmail = require('../templates/events/enquiryAdmin');
const buildEnquiryAckEmail = require('../templates/events/enquiryAck');
const buildSiteVisitAdminEmail = require('../templates/events/siteVisitAdmin');
const buildSiteVisitAckEmail = require('../templates/events/siteVisitAck');

async function sendEnquiryNotificationToAdmin(data) {
  return transport.sendMail({
    from: `"Caasaa Paandora" <${SMTP_USER}>`,
    to: SMTP_USER,
    replyTo: data.email,
    subject: `New Enquiry — ${data.property}`,
    html: buildEnquiryAdminEmail(data),
  });
}

async function sendEnquiryAcknowledgementToUser(data) {
  return transport.sendMail({
    from: `"Caasaa Paandora" <${SMTP_USER}>`,
    to: data.email,
    subject: `We received your enquiry — ${data.property}`,
    html: buildEnquiryAckEmail(data),
  });
}

async function sendSiteVisitNotificationToAdmin(data) {
  return transport.sendMail({
    from: `"Caasaa Paandora" <${SMTP_USER}>`,
    to: SMTP_USER,
    replyTo: data.email,
    subject: `Site Visit Request — ${data.property}`,
    html: buildSiteVisitAdminEmail(data),
  });
}

async function sendSiteVisitAcknowledgementToUser(data) {
  return transport.sendMail({
    from: `"Caasaa Paandora" <${SMTP_USER}>`,
    to: data.email,
    subject: `Site Visit Request Received — ${data.property}`,
    html: buildSiteVisitAckEmail(data),
  });
}

module.exports = {
  sendEnquiryNotificationToAdmin,
  sendEnquiryAcknowledgementToUser,
  sendSiteVisitNotificationToAdmin,
  sendSiteVisitAcknowledgementToUser,
};
