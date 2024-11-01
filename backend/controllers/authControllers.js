const adminModel = require("../models/adminModel");
const userModel = require("../models/userModel");
const { responseReturn } = require("../utils/responses");
const { createToken } = require("../utils/tokenCreator");
const bcrypt = require("bcrypt");

class authControllers {
  adminLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
      const admin = await adminModel.findOne({ email }).select("+password");

      if (admin) {
        const match = await bcrypt.compare(password, admin.password);
        if (match) {
          const token = await createToken({
            id: admin.id,
            role: "admin",
          });

          res.cookie("accessToken", token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          });

          responseReturn(res, 200, {
            token,
            message: "Login successfully",
          });
        } else {
          responseReturn(res, 401, { error: "Wrong password" });
        }
      } else {
        responseReturn(res, 404, { error: "Email not found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: "Internal server error" });
    }
  };

  getUser = async (req, res) => {
    const { id, role } = req;

    try {
      if (role === "admin") {
        const user = await adminModel.findById(id);
        responseReturn(res, 200, { userInfo: user });
      } else if (role === "user") {
        const user = await userModel.findById(id);
        responseReturn(res, 200, { userInfo: user });
      } else {
        responseReturn(res, 404, { error: "Cannot found user" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: "Internal server error" });
    }
  };

  userRegister = async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const checkUser = await userModel.findOne({ email });

      if (checkUser) {
        responseReturn(res, 409, { error: "Email already exists" });
      } else {
        const user = await userModel.create({
          name,
          email,
          password: await bcrypt.hash(password, 10),
          method: "Manualy",
        });

        const token = await createToken({
          id: user.id,
          role: "user",
        });

        res.cookie("accessToken", token, {
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });
        responseReturn(res, 201, {
          token,
          message: "Register successfully",
        });
      }
    } catch (error) {
      responseReturn(res, 500, { error: "Internal server error" });
    }
  };

  userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await userModel.findOne({ email }).select("+password");

      if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          const token = await createToken({
            id: user.id,
            role: "user",
          });

          res.cookie("accessToken", token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          });

          responseReturn(res, 200, {
            token,
            message: "Login successfully",
          });
        } else {
          responseReturn(res, 401, {
            error: "Wrong password",
          });
        }
      } else {
        responseReturn(res, 404, {
          error: "User not found",
        });
      }
    } catch (error) {
      responseReturn(res, 500, { error: "Internal server error" });
    }
  };
}

module.exports = new authControllers();
