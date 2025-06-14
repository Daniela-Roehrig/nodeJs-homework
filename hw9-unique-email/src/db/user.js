import { DataTypes } from "sequelize";
import sequelize from "./sequelize.js";

const User = sequelize.define("User", {
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "user",
    },
    mustChangePassword: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

// User.sync({alter: true});

export default User;
