
let express = require("express");
let app = express();
let allroutes = require("./AllRoutes");
const mongoose = require( "mongoose" );
const cors = require( 'cors' );
const dotenv = require( "dotenv" );
dotenv.config();

app.use(express.json());

app.use(cors({credentials:true, origin:'http://localhost:3000'}));

app.use("/api",allroutes);
app.use((req,res)=>{
    console.log("Request received at"+(new Date()));
    res.send("wellcome to dune university");
});

let db = async()=>
{
    try{
        console.log(process.env.DBURI);
        await mongoose.connect(process.env.DBURI);
        console.log("connected to database");
    }
    catch(err)
    {
        console.log("error connecting");
    }

}
db();


app.listen(5000,()=>{console.log("Backend server listening at port http://localhost:5000")});