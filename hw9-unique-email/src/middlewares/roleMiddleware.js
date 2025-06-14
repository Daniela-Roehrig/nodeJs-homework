const roleMiddleware = (requiredRole) => (req, res, next) => {
  const userRole = req.user.role;

  if (userRole !== requiredRole) {
    return res.status(403)
    .json({ message: "Access denied: You are not authorized" });
  }

  next();
};

export default roleMiddleware;
