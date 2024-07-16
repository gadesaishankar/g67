import React from "react";
import UploadVideo from "../UploadVideo";
import UploadPDF from "../UploadPDF";
import { useState } from "react";

const Unit3 = () => {
    const [isVideoUploaded,setIsVideoUploaded] = useState(false);

    const handelVideoSubmit = ()=>{
        setIsVideoUploaded(true);
    };

       return (
        <>
            {/* <h6>unit 1</h6> */}
            <div>
                   {isVideoUploaded ? <UploadPDF/> : <UploadVideo onSubmit={handelVideoSubmit}/> }
            </div>
        
           
            
            
       </>
    );
}

export default Unit3;