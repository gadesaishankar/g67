let express = require("express");
const { User, Pdf } = require("./allSchema");
const fs = require("fs");
const path = require("path");
const multer = require('multer');
let allroutes = express.Router();
const bcrypt = require('bcrypt');
allroutes.use(express.json());
allroutes.use("/files", express.static("files"));




allroutes.get('/', (req, res) => {
    console.log(" reached root");
    res.send("wellcome to dune lms");
});

//login routs/////////////////////////////////////////////////////////////////////////////////////////////////
allroutes.post('/login', async (req, res) => {
    console.log("reached login");
    const { username, password } = req.body;
    console.log(username, password);
    try {
        const user = await User.findOne({ username });
        console.log(user);
        if (!user) {

            console.log("ivalid username");
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        console.log("check password: ", password, user.password)
        // const isMatch = await bcrypt.compare(password, user.password);
        if (password !== user.password) {
            console.log("invalid password");
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        console.log("login is succefull")
        console.log(username, password);
        return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });

    }
});



//pdf routes///////////////////////////////////////////////

const { default: mongoose } = require("mongoose");
const status = require("statuses");
const { all } = require("proxy-addr");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files');
        console.log("u reached backend file");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
        console.log("you reacedbackend file");

    },
});


const upload = multer({ storage: storage });
allroutes.post("/uploadfiles", upload.single("file"), async (req, res) => {
    console.log(req.file);
    const title = req.body.title;
    const fileName = req.file.filename;
    try {
        await Pdf.create({
            title: title,
            pdf: fileName
        });
        res.json({ status: "ok" })
    } catch (error) {
        console.error("Error uploading file:", error);
        res.status(500).json({ status: "error", message: "Failed to upload file" });

    }


});


allroutes.get("/getfiles", async (req, res) => {
    try {
        Pdf.find({}).then((data) => {
            res.send({ status: "ok", data: data });

        });
    } catch (error) {

    }
});


//////////////////video upload//////////////

const Uploadstorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './videos');
        console.log("u reached backend video file");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
        console.log("you reacedbackend video file");

    },
})

const Upload = multer({ storage: Uploadstorage });
allroutes.post("/Uploadvideos", Upload.single("file"), async (req, res) => {

    console.log(req.file);
    const title = req.body.title;
    const fileName = req.file.filename;
    try {
        await Video.create({
            title: title,
            video: fileName
        });
        res.json({ status: "ok" })
    } catch (error) {
        console.error("Error Uploading file:", error);
        res.status(500).json({ status: "error", message: "Failed to upload file" });
    }

});

allroutes.get("/getvideos", async (req, res) => {
    try {
        Video.find({}).then((data) => {
            res.send({ status: "ok", data: data });
        });

    } catch (error) {

    }
});






module.exports = allroutes;