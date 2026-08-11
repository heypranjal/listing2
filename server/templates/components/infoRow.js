function buildInfoRow(label, value) {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #eeece8;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td width="35%" style="font-family:Arial,sans-serif;font-size:11px;
                color:#888;text-transform:uppercase;letter-spacing:1px;
                vertical-align:top;padding-right:12px;">
              ${label}
            </td>
            <td style="font-family:Arial,sans-serif;font-size:14px;
                color:#1a1a2e;font-weight:600;vertical-align:top;">
              ${value || '—'}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

module.exports = buildInfoRow;
