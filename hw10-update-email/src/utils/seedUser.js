import "dotenv/config";
import bcrypt from "bcrypt";
import HwUser from "../db/HwUser.js";
import { connectDatabase } from "../db/sequelize.js";

const seedUser = async () => {
  await connectDatabase();

  const userPassword = await bcrypt.hash("homework#10", 10);
  const adminPassword = await bcrypt.hash("admin#hw10", 10);

  await HwUser.create({
    username: "daniela",
    email: "daniela@email.com",
    password: userPassword,
    role: "user",
  });

  await HwUser.create({
    username: "admin",
    email: "admin@email.com",
    password: adminPassword,
    role: "admin",
  });

  process.exit();
};

seedUser();
