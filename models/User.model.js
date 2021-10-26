const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, 'Username is required.'],
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    role: {
      type: String,
      default:'user'
    },
    plantsList: [{type: Schema.Types.ObjectId, ref: "Plant"}] 
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);
module.exports = User;
