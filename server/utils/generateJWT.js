import jwt from "jsonwebtoken";

const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.SECRET_TOKEN, {
    expiresIn: "1h",
  });
};

export default generateJWT;
