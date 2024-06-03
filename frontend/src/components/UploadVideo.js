import { useState, useEffect } from "react";
import React from "react";
// import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./css/Uploadpdf.css";
import axios from "axios";


const UploadVideo = () => {
    const [title, setTitle] = useState('');
    const [file, setFile] = useState('');
    const [allImage, setAllImage] = useState(null);


    useEffect(() => {
        getVideo();
    }, []);

    const getVideo = async () => {
        const result = await axios.get("http://localhost:5000/api/getVideos");
        console.log(result.data.data);
        setAllImage(result.data.data);

    }

    const submitImage = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("title", title);
        formdata.append("file", file);
        console.log(title, file);
        console.log("hey")
        const result = await axios.post("http://localhost:5000/api/Uploadvideos", formdata, { headers: { "Content-Type": "multipart/form-data" }, });
        console.log("hi");
        console.log(result);


        if (result.data.status === "ok") {
            alert("Uploaded Successfully!!!");

            getVideo();
        }
    };

    const showVideo = (video) => {
        window.open(`http://localhost:5000/api/videos/${video}`, "_blank", "noreferrer");
    }






    return (
        <>
            {/* <Navbar /> */}
            <Sidebar />
            <div className="uploadpdf" >
                <form className="pdfform" onSubmit={submitImage}>
                    <h4>Upload Video</h4>
                    <label htmlFor="title">Title:</label>

                    <input type="text" className="form-control pt-2 mt-2 " onChange={(e) => setTitle(e.target.value)} placeholder="Title" id="title" required />
                    <input type="file" className="form-control mt-4" id="file" accept="mp4/mp3" required onChange={(e) => setFile(e.target.files[0])} />

                    <button className="btn btn-dark mt-3" type="submit">
                        Submit
                    </button>

                </form>
                {/* <div className="uploaded">
                    <h4>Uploaded Video:</h4>
                    <div className="output-div">
                        {allImage == null ? "" : allImage.map((data) => {
                            return (
                                <div className="inner-div">
                                    <h6>Titile: {data.title}</h6>
                                    <button className="btn btn-dark" onClick={() => showVideo(data.video)}>Show Video</button>
                                </div>

                            );
                        })}

                    </div>
                </div> */}




            </div>
        </>
    );
}


export default UploadVideo;