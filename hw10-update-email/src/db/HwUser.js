import { DataTypes } from "sequelize";

import sequelize from "./sequelize.js";

import { emailValidation } from "../constants/hwUsers.constants.js";

const HwUser = sequelize.define(
    "hw-users",
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: {
                args: true,
                msg: "user/manager/admin with with email already exist",
            },
            allowNull: false,
            validate: {
                is: {
                    args: emailValidation.value,
                    msg: emailValidation.message,
                },
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: "user",
            allowNull: false,
        }
    });

//HwUser.sync({alter: true})
export default HwUser;