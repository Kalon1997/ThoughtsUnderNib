const User = require('../models/User')
exports.registerUser = async (req, res) => { 
    try{
        const { username, email, password } = req.body;
        let user = await User.findOne({ email });
        if(user){
            return res.status(400).json({message: "You already have an account."})
        }  
        if(!username || !email || !password){
            return res.status(400).json({message: "Fill the fields."})
        }
        //const newuser = await new User(req.body).save();
        user = await User.create({
            username, email, password
        })
            return res.status(200).json({
                success: true,
                user
            });
    } catch(err)
        {
            return res.status(400).json({message: "Some unknown err.."})
        }
}

exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email }).select("+password")

  
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "User does not exist",
        });
      }
  
      const isMatch = await user.matchPassword(password);
  
      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Incorrect password",
        });
      }
  
      const token = await user.generateToken();
  
      const options = {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true
      };
      res.status(200).cookie("token", token, options).json({
        success: true,
        user,
        token,
      });
    
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };







     

        exports.logout = async (req, res) => {
            try {
              res
                .status(200)
                .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
                .json({
                  success: true,
                  message: "Logged out",
                });
            } catch (error) {
              res.status(500).json({
                success: false,
                message: error.message,
              });
            }
          };

exports.myProfile = async (req, res) => {
            try {
              const user = await User.findById(req.user._id);
          
              res.status(200).json({
                success: true,
                user,
              });
            } catch (error) {
              res.status(500).json({
                success: false,
                message: error.message,
              });
            }
};

exports.poemform = async(req, res) => {
    try{

        const user = await User.findById(req.user._id);
        return res.status(200).json({user})
    }
    catch(err){
        return res.status(500).json({message: "Some unknown err.."})
    } 
}

