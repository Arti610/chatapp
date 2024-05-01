import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateTokens.js";

export const register = async (req, res) => {
  try {
    const { name, username, password, confirmPassword, gender } = req.body;
    if (password != confirmPassword) {
      return res.status(400).json({ error: "Password doesn't match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ error: "user with this username already exist" });
    }

    //   hash password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      name,
      username,
      password: hashedPassword,
      gender,
      avatar: gender === "Male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        username: newUser.username,
        gender: newUser.gender,
        avatar: newUser.avatar,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("User register error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;            
    
    const user = await User.findOne({ username }); 

    if (!user) {
      return res.status(400).json({ error: "User with this username does not exist" });
    }


    const isPasswordCorrect = await bcrypt.compare(password, user.password || "");

  

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    generateTokenAndSetCookie(user._id, res);
    return res.status(200).json({
      _id: user._id,
      name: user.name,
      username: user.username,
      gender: user.gender,
      avatar: user.avatar,
      // token: generateToken(user._id)
    });
  } catch (error) {
    console.log("User login error", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


export const logout = (req, res) => {
 try {
   res.cookie("jwt", "", {maxAge : 0})
   res.status(200).json({message : "User logout successfully"})
 } catch (error) {
  console.log("User logout error", error);
  return res.status(500).json({ error: "Internal Server Error" });
 }
};
