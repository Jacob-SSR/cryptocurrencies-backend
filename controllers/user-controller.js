const prisma = require("../config/prisma");

exports.getMe = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        userName: true,
        email: true,
        role: true,
        created_at: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (!id) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await prisma.user.findUnique({
      where: { id: id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        userName: true,
        email: true,
        role: true,
        created_at: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({ user });
  } catch (error) {
    console.error("Error in getUserById:", error);
    return res.status(500).json({ message: error.message });
  }
};

exports.updateMe = async (req, res, next) => {
  try {
    const { firstName, lastName, userName, email } = req.body;

    const updated = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        firstName,
        lastName,
        userName,
        email,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        userName: true,
        email: true,
        role: true,
      },
    });

    res.json(updated);
  } catch (error) {
    next(error);
  }
};
