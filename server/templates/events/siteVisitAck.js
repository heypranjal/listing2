const buildHeader = require('../components/header');
const buildFooter = require('../components/footer');
const buildButton = require('../components/button');
const buildInfoRow = require('../components/infoRow');

function buildSiteVisitAckEmail({ name, property, preferredDate, preferredTime }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Site Visit Request Confirmed</title>
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
          ${buildHeader('Your Site Visit is Requested')}
          <tr>
            <td class="email-body" style="padding:36px 40px;">
              <p style="font-size:20px;font-family:'Georgia',serif;color:#1a1a2e;
                         margin:0 0 8px;">
                Dear ${name},
              </p>
              <p style="font-size:14px;color:#555;line-height:1.8;margin:0 0 24px;">
                We have received your request for a site visit to
                <strong style="color:#1a1a2e;">${property}</strong>.
                Our team will verify the slot and send you a confirmation shortly.
              </p>
              <div style="background:#1a1a2e;border-radius:4px;padding:24px 28px;margin:0 0 28px;">
                <div style="font-size:11px;color:#c9a96e;text-transform:uppercase;
                             letter-spacing:2px;margin-bottom:16px;">Your Requested Slot</div>
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td width="50%" style="padding:8px 0;border-right:1px solid #2e2e4a;">
                      <div style="font-size:11px;color:#8a8a9a;margin-bottom:4px;">Date</div>
                      <div style="font-size:16px;font-family:'Georgia',serif;color:#fff;">
                        ${preferredDate || 'To be confirmed'}
                      </div>
                    </td>
                    <td width="50%" style="padding:8px 0 8px 20px;">
                      <div style="font-size:11px;color:#8a8a9a;margin-bottom:4px;">Time</div>
                      <div style="font-size:16px;font-family:'Georgia',serif;color:#fff;">
                        ${preferredTime || 'To be confirmed'}
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                ${buildInfoRow('Property', property)}
              </table>
              <div style="margin-top:24px;padding:16px 20px;background:#fffbf4;
                           border:1px solid #f0e0c0;border-radius:4px;">
                <div style="font-size:13px;color:#555;line-height:1.7;">
                  <strong style="color:#1a1a2e;">Please note:</strong>
                  This is a booking acknowledgement. Our team will call you to
                  confirm the exact date and time before your visit.
                </div>
              </div>
              <div style="text-align:center;margin-top:32px;">
                ${buildButton('Explore More Properties', 'https://caasaapaandora.in')}
              </div>
              <p style="font-size:12px;color:#aaa;text-align:center;margin:28px 0 0;
                         line-height:1.7;">
                Need to reschedule? Reply to this email or call us directly.
              </p>
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

module.exports = buildSiteVisitAckEmail;
