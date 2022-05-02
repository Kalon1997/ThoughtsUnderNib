const Mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const userSchema = new Mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        select: false
    },
    // resetLink:{
    //     data: String,
    //     default: ''
    // },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
})

//bcrypting password always before saving
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
})


userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
userSchema.methods.generateToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWTSECRET);
  };
  
  userSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");
  
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
  
    return resetToken;
  };
module.exports = Mongoose.model("User", userSchema);