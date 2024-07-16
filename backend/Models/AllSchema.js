const { text } = require('body-parser');
let mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const pdfDetailsSchema = new mongoose.Schema({
    pdf:String,
    title:String,
}
);

const videoDetailsSchema = new mongoose.Schema({
    video:String,
    title:String,

});



const Video= mongoose.model('Video', videoDetailsSchema);
const User = mongoose.model('User', UserSchema);
const Pdf = mongoose.model("PdfDetails",pdfDetailsSchema);






module.exports ={User,Pdf,Video};