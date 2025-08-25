import userModel from "../models/userModel.js";

import { hashPassword } from "../helpers/authHelper.js";

const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;
    if (!name) {
      return res.send({ error: "name is Rwquired" });
    }
    if (!email) {
      return res.send({ error: "Email is Rwquired" });
    }
    if (!password) {
      return res.send({ error: "password is Rwquired" });
    }
    if (!phone) {
      return res.send({ error: "phone is Rwquired" });
    }

    //existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Already registered",
      });
    }

    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      phone,
      role,
      password: hashedPassword,
    }).save();
    res.status(201).send({
      success: true,
      message: "User Registered Successfully",
      user,
    });

    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};

export default registerController;
