import User from "../models/User";
import bcrypt from 'bcryptjs';
export const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        return next(err);
    }

    if (!users) {
        return res.status(500).json({ message: "Unexpected error occured" });
    }
    return res.status(200).json({ users });

};
export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name && name.trim() == "" &&
        !email && email.trim == "" &&
        !password && password.trim == "") {
        res.status(422).json({ message: "Invalid Inputs" });
    }
    let user;
    try {
        user = new User({ name, email, password });
        user = await user.save();
    } catch (err) {
        return next(err);
    }
    if (!user) {
        return res.status(500).json({ message: "Unexpected error occured" });

    }
    return res.status(201).json({ user })
}

// it is POST Method
export const addUser = async (req, res, next) => {
    const { name, email, password } = req.body;
    if (
        name && name.trim === "" &&
        email && email.trim() === "" &&
        password && password.trim() === ""
    ) {
        return res.status(422).json({ message: "Invalid Inputs" });
    }
    const hashedPassword = bcrypt.hashSync(password);
    let user;
    try {
        user = new User({ name, email, password: hashedPassword });
        user = await user.save();
    } catch (err) {
        console.log(err);
        return next(err);
    }
    if (!user) {
        return res.json.status(500).json({ message: "unexpected error occur" });
    }
    return res.json.status(201).json({ user });
};


export const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const { name, email, password } = req.body;
    if (
        name && name.trim === "" &&
        email && email.trim() === "" &&
        password && password.trim() === ""
    ) {
        return res.status(422).json({ message: "Invalid Inputs" });
    }
    let user;
    const hashedPassword = bcrypt.hashSync(password);
    try {
        user = await User.findByIdAndUpdate(id,
            {
                name,
                email,
                password: hashedPassword
            });
    } catch (err) {
        return console.log(err);
    }
    if (!user) {
        return res.status(500).json({ message: "something went wrong" });
    }
    return res.status(200).json({ message: "update succesfull" });
};


export const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
        user = await User.findByIdAndDelete(id);

    } catch (err) {
        return console.log(err);
    }
    if (!user) {
        return res.status(500).json({ message: "something went wrong" })
    }
    return res.status(200).json({ message: "deleted sucessfully !!" })
}
