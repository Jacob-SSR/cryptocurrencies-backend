exports.checkIdentityKey = (identity) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const usernameRegex = /^[a-zA-Z0-9@!_]{3,20}$/;

  if (emailRegex.test(identity)) return "email";
  if (usernameRegex.test(identity)) return "userName";

  return createError(400, "identity ต้องเป็น email หรือ username ที่ถูกต้อง");
};
