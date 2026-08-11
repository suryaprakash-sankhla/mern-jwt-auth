import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../config/token.js";
import uploadOnCloudinary from "../config/cloudinary.js";

export const home = (req, res) => {
    try {
        return res.send("Home Page");
    } catch (error) {
        return res.send("Error");
    }
}

export const signUp = async (req, res) => {
    try {
        const { firstName, lastName, userName, email, password } = req.body;

        if (!firstName || !lastName || !userName || !email || !password) {
            return res.status(400).json({ message: "send all detials." });
        }
        console.log(req.body);

        let profileImage;
        if (req.file) {
            profileImage = await uploadOnCloudinary(req.file.path);
        }

        let existUser = await User.findOne({ $or: [{ email }, { userName }] });

        if (existUser) {
            return res.status(400).json({ message: "User already Exist." })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            userName,
            profileImage
        });

        let token;
        try {
            token = generateToken(user._id);

        } catch (error) {
            console.log(error);
        }

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV == "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            user: {
                firstName,
                lastName,
                email,
                userName,
                profileImage
            }
        })

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        let existUser = await User.findOne({ email });
        if (!existUser) {
            res.status(400).json({
                success: false,
                message: "User Doesn't exist",
                data: "login failed"
            })
        }

        let match = await bcrypt.compare(password, existUser.password)
        if (!match) {
            return res.status(400).json({
                success: false,
                message: "Password Doesn't Matched!!",
                data: "login failed"
            })
        }

        let token;
        try {
            token = generateToken(existUser._id);
        } catch (error) {
            console.log(error);
        }

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV == "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json({
            user: {
                firstName: existUser.firstName,
                lastName: existUser.lastName,
                email: existUser.email,
                userName: existUser.userName,
            }
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            data: "login failed"
        })
    }
}


export const logOut = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV == "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        });
        return res.status(200).json({
            success: true,
            message: "LogOut Successful!!",
            data: "LogOut!!"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            data: "login failed"
        })
    }
}


export const getUserData = async (req, res) => {
    try {
        let userId = req.userId
        if (!userId) {
            return res.status(400).json({
                message: "user id is note found "
            })
        }
        let user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({
                message: "user id is not found "
            })
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({
            message: error
        })

    }
}