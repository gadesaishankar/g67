let mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const pdfDetailsSchema = new mongoose.Schema({
    pdf: String,
    title: String,
}
);


const User = mongoose.model('User', UserSchema);
const Pdf = mongoose.model("PdfDetails", pdfDetailsSchema);


module.exports = { User, Pdf };