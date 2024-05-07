import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {

  try {

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "15d",
    });
	

    res.cookie("token", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "development",
    });
    
    console.log("token set successfully");
    return token;
  } catch (error) {
    console.error("Error setting cookie:", error);
  }
};

export default generateTokenAndSetCookie;
