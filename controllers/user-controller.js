const prisma = require("../config/prisma");

// [GET] /api/users/me - get current authenticated user
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
  } catch (err) {
    next(err);
  }
};

// [GET] /api/users/:id - get user by ID (admin only or self)
exports.getUserById = async (req, res) => {
  try {
    // สมมติรับ id จาก params
    const id = parseInt(req.params.id); // หรือดึงจาก query หรือ body

    if (!id) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await prisma.user.findUnique({
      where: { id: id }, // ต้องส่งค่าจริง ๆ เช่น 123
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

// [PATCH] /api/users/me - update current user
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
  } catch (err) {
    next(err);
  }
};
