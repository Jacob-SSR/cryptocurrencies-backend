const { z } = require("zod");
const createError = require("../utils/create-error");

const identityRegex = /^[a-zA-Z0-9@!_]{3,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

exports.registerSchema = z
  .object({
    identity: z
      .string()
      .trim()
      .min(3, "Please enter a username or email with at least 3 characters")
      .refine((val) => emailRegex.test(val) || identityRegex.test(val), {
        message: "Please enter a valid username or email format",
      }),
    firstName: z
      .string()
      .trim()
      .min(3, "First name must be at least 3 characters long"),
    lastName: z
      .string()
      .trim()
      .min(3, "Last name must be at least 3 characters long"),
    password: z
      .string()
      .trim()
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .trim()
      .min(6, "Confirm password must be at least 6 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password do not match",
    path: ["confirmPassword"],
  });

exports.loginSchema = z.object({
  identity: z
    .string()
    .trim()
    .min(3, "Please enter a username or email with at least 3 characters")
    .refine((val) => emailRegex.test(val) || identityRegex.test(val), {
      message: "Please enter a valid username or email format",
    }),
  password: z.string().trim().min(6, "Password must be at least 6 characters long"),
});

exports.validatorWithZod = (schema) => (req, res, next) => {
  try {
    console.log("REQ BODY:", req.body);
    schema.parse(req.body);
    next();
  } catch (error) {
    const message = error.errors.map((item) => item.message).join(". ");
    next(createError(400, message));
  }
};
