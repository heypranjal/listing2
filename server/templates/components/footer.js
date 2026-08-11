function buildFooter() {
  return `
    <tr>
      <td style="background:#f5f5f0;padding:24px 40px;border-top:1px solid #e0ddd6;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="text-align:center;padding-bottom:12px;">
              <div style="font-family:'Georgia',serif;font-size:14px;color:#1a1a2e;letter-spacing:2px;">
                Caasaa Paandora
              </div>
            </td>
          </tr>
          <tr>
            <td style="text-align:center;">
              <div style="font-size:11px;color:#888;line-height:1.7;">
                Lucknow, Uttar Pradesh, India<br>
                <a href="mailto:caasaapaandora@gmail.com" style="color:#c9a96e;text-decoration:none;">
                  caasaapaandora@gmail.com
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td style="text-align:center;padding-top:16px;">
              <div style="font-size:10px;color:#aaa;">
                &copy; ${new Date().getFullYear()} Caasaa Paandora. All rights reserved.
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

module.exports = buildFooter;
