import Admin from "../models/Admin";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
const SECRET_KEY="MYSECRET";
// const secretKey=MYSECRET

export const addAdmin = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email && email.trim() == "" &&
        !password && password.trim() == "") {
        res.status(422).json({ message: "Invalid Inputs" });
    }

    let existingAdmin;
    try {
        existingAdmin = await Admin.findOne({ email });

    } catch (err) {
        return console.log(err)
    }
    if (existingAdmin) {
        return res.status(400).json({ message: "admin already exist" })
    }

    let admin;
    const hashedPassword = bcrypt.hashSync(password);
    try {
        admin = new Admin({ email, password: hashedPassword });
        admin = await admin.save();
    } catch (err) {
        return console.log(err);
    }
    if (!admin) {
        return res.status(500).json({ message: "unable to store admin " });
    }
    return res.status(201).json({ admin });
}


export const adminLogin = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email && email.trim() == "" &&
        !password && password.trim() == "") {
        res.status(422).json({ message: "Invalid Inputs" })
    };

    let existingAdmin;
    try {
        existingAdmin = await Admin.findOne({ email })
    } catch (err) {
        return console.log(err);
    }
    if (!existingAdmin) {
        return res.status(400).json({ message: "admin not found" });
    }
    const isPasswordCorrect = bcrypt.compareSync(password,
        existingAdmin.password)
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "incorrect password" });

    }

    const token = jwt.sign({ id: existingAdmin._id },SECRET_KEY, {
        expiresIn: "7d",
    });
    return res.status(200).json({ message: "authentication Complete", token, id: existingAdmin._id });
};

export const getAdmin = async (req, res, next) => {
    let admin;
    try {
        admin = await Admin.find();
    } catch (err) {
        return console.log(err);
    }
    if (!admin) {
        return res.status(500).json({ message: "internal server error" })
    }
    return res.status(200).json({ admin })
}