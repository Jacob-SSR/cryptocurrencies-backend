const prisma = require("../config/prisma");
const createError = require("../utils/create-error");
const { checkIdentityKey } = require("../utils/check-identity");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  try {
    const { identity, firstName, lastName, role, password, confirmPassword } =
      req.body;

    const identityKey = checkIdentityKey(identity);
    console.log("Identity Key:", identityKey);

    const existingUser = await prisma.user.findFirst({
      where: {
        [identityKey]: identity,
      },
    });

    if (existingUser) {
      return createError(400, `Already have this user : ${identity}`);
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const newUser = await prisma.user.create({
      data: {
        [identityKey]: identity,
        password: hashPassword,
        firstName: firstName,
        lastName: lastName,
        role: role,
      },
    });
    res.json({ message: `Register with ${identityKey}` });
  } catch (error) {
    console.error("ERROR:", error);
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { identity, password } = req.body;

    const identityKey = checkIdentityKey(identity);

    const foundUser = await prisma.user.findUnique({
      where: { [identityKey]: identity },
    });

    if (!foundUser) {
      createError(401, "Invalid Login");
    }

    const pw0k = await bcrypt.compare(password, foundUser.password);
    if (!pw0k) {
      createError(401, "Invalid Login");
    }

    const payload = { id: foundUser.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "15d",
    });

    const { password: pw, created_at, updated_at, ...userData } = foundUser;

    res.json({ message: "Login successful", token: token, user: userData });
  } catch (error) {
    next(error);
  }
};
