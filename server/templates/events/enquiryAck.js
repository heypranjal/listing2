const buildHeader = require('../components/header');
const buildFooter = require('../components/footer');
const buildButton = require('../components/button');
const buildInfoRow = require('../components/infoRow');

function buildEnquiryAckEmail({ name, property }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>We received your enquiry</title>
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
          ${buildHeader('Thank You for Your Enquiry')}
          <tr>
            <td class="email-body" style="padding:36px 40px;">
              <p style="font-size:20px;font-family:'Georgia',serif;color:#1a1a2e;
                         margin:0 0 8px;">
                Dear ${name},
              </p>
              <p style="font-size:14px;color:#555;line-height:1.8;margin:0 0 24px;">
                Thank you for reaching out to us regarding
                <strong style="color:#1a1a2e;">${property}</strong>.
                We have received your enquiry and one of our property consultants
                will connect with you shortly.
              </p>
              <div style="background:#f9f8f5;border-radius:4px;padding:20px 24px;
                           margin:0 0 28px;">
                <div style="font-size:12px;color:#888;text-transform:uppercase;
                             letter-spacing:1px;margin-bottom:12px;">What happens next</div>
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding:6px 0;">
                      <table cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td width="28" style="vertical-align:top;">
                            <div style="width:20px;height:20px;background:#c9a96e;
                                         border-radius:50%;text-align:center;line-height:20px;
                                         font-size:11px;font-weight:700;color:#fff;">1</div>
                          </td>
                          <td style="font-size:13px;color:#333;padding-left:8px;line-height:1.6;">
                            Our consultant reviews your enquiry
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;">
                      <table cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td width="28" style="vertical-align:top;">
                            <div style="width:20px;height:20px;background:#c9a96e;
                                         border-radius:50%;text-align:center;line-height:20px;
                                         font-size:11px;font-weight:700;color:#fff;">2</div>
                          </td>
                          <td style="font-size:13px;color:#333;padding-left:8px;line-height:1.6;">
                            You receive a call within 24 hours
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;">
                      <table cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td width="28" style="vertical-align:top;">
                            <div style="width:20px;height:20px;background:#c9a96e;
                                         border-radius:50%;text-align:center;line-height:20px;
                                         font-size:11px;font-weight:700;color:#fff;">3</div>
                          </td>
                          <td style="font-size:13px;color:#333;padding-left:8px;line-height:1.6;">
                            We schedule a personalised property walkthrough
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                ${buildInfoRow('Enquiry for', property)}
              </table>
              <div style="text-align:center;margin-top:32px;">
                ${buildButton('Explore More Properties', 'https://caasaapaandora.in')}
              </div>
              <p style="font-size:12px;color:#aaa;text-align:center;margin:28px 0 0;
                         line-height:1.7;">
                If you did not submit this enquiry, please ignore this email.<br>
                For urgent queries, reply to this email or call us directly.
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

module.exports = buildEnquiryAckEmail;
