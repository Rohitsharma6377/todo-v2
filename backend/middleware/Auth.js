const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Please log in to access this resource' });
};

const isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === 'admin') {
    return next();
  }
  res.status(403).json({ message: 'Access denied. Admin privileges required.' });
};

const isClient = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === 'client') {
    return next();
  }
  res.status(403).json({ message: 'Access denied. Client privileges required.' });
};

const isUser = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === 'user') {
    return next();
  }
  res.status(403).json({ message: 'Access denied. User privileges required.' });
};

const hasRole = (roles) => {
  return (req, res, next) => {
    if (req.isAuthenticated() && roles.includes(req.user.role)) {
      return next();
    }
    res.status(403).json({ message: 'Access denied. Insufficient privileges.' });
  };
};

module.exports = {
  isAuthenticated,
  isAdmin,
  isClient,
  isUser,
  hasRole
};
