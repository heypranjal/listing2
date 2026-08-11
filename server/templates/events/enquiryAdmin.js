const buildHeader = require('../components/header');
const buildFooter = require('../components/footer');
const buildInfoRow = require('../components/infoRow');

function buildEnquiryAdminEmail({ name, phone, email, property, message }) {
  const receivedAt = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>New Enquiry</title>
<style>
  @media only screen and (max-width:600px){
    .email-wrapper{width:100%!important;}
    .email-body{padding:24px 20px!important;}
  }
</style>
</head>
<body style="margin:0;padding:0;background:#f0ede8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0"
         style="background:#f0ede8;padding:32px 16px;">
    <tr>
      <td align="center">
        <table class="email-wrapper" width="600" cellpadding="0" cellspacing="0"
               border="0" style="background:#fff;border-radius:4px;
               box-shadow:0 2px 12px rgba(0,0,0,0.08);overflow:hidden;">
          ${buildHeader('New Property Enquiry')}
          <tr>
            <td class="email-body" style="padding:36px 40px;">
              <p style="font-size:14px;color:#444;margin:0 0 24px;">
                A new enquiry has been submitted on
                <strong style="color:#1a1a2e;">Caasaa Paandora</strong>.
                Details are below.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                ${buildInfoRow('Name', name)}
                ${buildInfoRow('Phone', phone)}
                ${buildInfoRow('Email', email)}
                ${buildInfoRow('Property', property)}
                ${buildInfoRow('Received', receivedAt)}
              </table>
              ${message ? `
              <div style="margin-top:24px;padding:16px 20px;background:#f9f8f5;
                           border-left:3px solid #c9a96e;border-radius:0 3px 3px 0;">
                <div style="font-size:11px;color:#888;text-transform:uppercase;
                             letter-spacing:1px;margin-bottom:8px;">Message</div>
                <div style="font-size:14px;color:#333;line-height:1.7;">${message}</div>
              </div>` : ''}
            </td>
          </tr>
          ${buildFooter()}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

module.exports = buildEnquiryAdminEmail;
