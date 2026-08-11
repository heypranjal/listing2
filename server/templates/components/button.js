function buildButton(label, href) {
  return `
    <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
      <tr>
        <td style="background:#c9a96e;border-radius:3px;">
          <a href="${href}"
             style="display:inline-block;padding:13px 32px;font-family:Arial,sans-serif;
                    font-size:13px;font-weight:700;color:#1a1a2e;text-decoration:none;
                    letter-spacing:1px;text-transform:uppercase;">
            ${label}
          </a>
        </td>
      </tr>
    </table>
  `;
}

module.exports = buildButton;
