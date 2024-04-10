let express = require("express");
const {User} = require("./allSchema");
let allroutes = express.Router();
const multer = require( "multer" );
const upload = multer();
const bcrypt = require('bcrypt');


const stripe = require('stripe')('sk_test_51OyWO6SJGEZiRddbJFJoHBmjW01s9nmVgYhNQjzrkbyNK009QZV5yE3OHNnnwe5yOHChfTXBvg2lTlNp0FHdeiU7005IyYjaA2');
allroutes.get('/', (req, res) => {
    console.log(" reached root");
    res.send("wellcome to dune lms");
});

allroutes.post('/login', async (req, res) => {
    console.log("reached login");
    const { username, password } = req.body;
    console.log(username,password);
    try {
        const user = await User.findOne({ username });
        if (!user) {
            
            console.log("ivalid username");
            
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        console.log("check password: ",password,user.password)
        // const isMatch = await bcrypt.compare(password, user.password);
        if (password !== user.password) {
            console.log("invalid password");
            
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        console.log("login is succefull")
        return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
        
    }
});
module.exports = allroutes;