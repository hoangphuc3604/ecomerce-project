const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
      select: false,
    },
    image: {
      type: String,
      default: process.env.DEFAULT_AVT,
    },
    method: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("users", userSchema);
