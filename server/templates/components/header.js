function buildHeader(title) {
  return `
    <tr>
      <td style="background:#1a1a2e;padding:28px 40px;text-align:center;">
        <div style="font-family:'Georgia',serif;font-size:22px;color:#c9a96e;letter-spacing:3px;text-transform:uppercase;">
          Caasaa Paandora
        </div>
        <div style="font-size:11px;color:#8a8a9a;letter-spacing:2px;margin-top:4px;text-transform:uppercase;">
          Premium Real Estate
        </div>
      </td>
    </tr>
    <tr>
      <td style="background:#c9a96e;padding:16px 40px;text-align:center;">
        <div style="font-family:Arial,sans-serif;font-size:13px;font-weight:700;color:#1a1a2e;letter-spacing:2px;text-transform:uppercase;">
          ${title}
        </div>
      </td>
    </tr>
  `;
}

module.exports = buildHeader;
