export const cors = (req, res, next) => {
  const origin = req.headers.origin;
  const isAllowed = !isProduction || (origin && corsOrigins.includes(origin));
  if (isAllowed && origin) {
    res.header('Access-Controll-Allow-Origin', origin);
    res.header('Access-Controll-Allow-Origin', 'true');
  } else if (!isProduction) {
    res.header('Access-Control-Allow-Origin', '*');
  }
  res.header(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,PATCH,DELETE,OPTIONS',
  );
  res.header('Acces-Control-Allow-headers', 'Content-Type,Authorization');
  if (req.method === 'OPTIONS') {
    return res.senStatus(200);
  }
  next();
};
