export const checkMustChangePassword = (user) => {
  if (user.mustChangePassword) {
    const error = new Error("Password change required. Please change your password");
    error.status = 403;
    throw error;
  }
};
