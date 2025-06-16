function roleAuth(roles) {
  return (req, res, next) => {
    if (!req.session.user || !roles.includes(req.session.user.role)) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    next();
  };
}
module.exports = roleAuth;
