function validateEnquiry(req, res, next) {
  const { name, phone, property } = req.body;
  const errors = [];

  if (!name || name.trim().length < 2) errors.push('name is required');
  if (!phone || !/^\+?[\d\s\-]{7,15}$/.test(phone.trim())) errors.push('valid phone is required');
  if (!property || property.trim().length < 1) errors.push('property is required');

  if (errors.length) {
    return res.status(400).json({ success: false, errors });
  }

  next();
}

function validateSiteVisit(req, res, next) {
  const { name, phone, property } = req.body;
  const errors = [];

  if (!name || name.trim().length < 2) errors.push('name is required');
  if (!phone || !/^\+?[\d\s\-]{7,15}$/.test(phone.trim())) errors.push('valid phone is required');
  if (!property || property.trim().length < 1) errors.push('property is required');

  if (errors.length) {
    return res.status(400).json({ success: false, errors });
  }

  next();
}

module.exports = { validateEnquiry, validateSiteVisit };
