const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use("/files", express.static("files"));


// Mongoose connection
const mongoUrl =
  "mongodb+srv://ARUN:1234@cluster0.mmyigrp.mongodb.net/LECTURESCHECK?retryWrites=true&w=majority&appName=Cluster0";
  
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    // useUnifiedTopology: true, // Add this option to avoid deprecation warning
  }) 
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

// Multer
const multer = require("multer");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});



// const upload = multer({ dest: './files' });
require("./pdfDetails")
// Define PdfSchema and model
const PdfSchema = mongoose.model("PdfDetails");
// const PdfSchema = mongoose.model("PdfDetails");
const upload = multer({ storage : storage});

app.post("/upload-files", upload.single("file"), async (req, res) => {
  console.log(req.file);
  const title = req.body.title;
  const fileName = req.file.filename;
  try {
    await PdfSchema.create({ title: title, pdf: fileName });
    res.send({ status: "ok" });
  } catch (error) {
    // res.status(500).json({ error: "Internal Server Error" });
    res.json({status:error})
  }
    // res.send("Hii");
});



app.get("/get-files", async (req, res) => {
  try {
    // const data = await PdfSchema.find({});
    PdfSchema.find({}).then((data) => {
    res.send({ status: "ok", data: data });
  });
 } catch (error) {
    // res.status(500).json({ error: "Internal Server Error" });
  }
});



// APIs
app.get("/", async (req, res) => {
  res.send("Success!!!!!!");
});

app.listen(5000, () => {
  console.log("Server Started");
});









