import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./css/Uploadpdf.css";
import axios from "axios";


const UploadPDF = () => {
    const [title, setTitle] = useState('');
    const [file, setFile] = useState('');
    const [allImage, setAllImage] = useState(null);


    useEffect(() => {
        getPdf();
    }, []);

    const getPdf = async () => {
        const result = await axios.get("http://localhost:5000/api/getfiles");
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
        const result = await axios.post("http://localhost:5000/api/uploadfiles", formdata, { headers: { "Content-Type": "multipart/form-data" }, });
        console.log("hi");
        console.log(result);


        if (result.data.status === "ok") {
            alert("Uploaded Successfully!!!");

            getPdf();
        }
    };

    const showPdf = (pdf) => {
        window.open(`http://localhost:5000/api/files/${pdf}`, "_blank", "noreferrer");
    }






    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="uploadpdf" >
                <form className="pdfform" onSubmit={submitImage}>
                    <h4>Upload PDF</h4>
                    <label htmlFor="title">Title:</label>

                    <input type="text" className="form-control pt-2 mt-2 " onChange={(e) => setTitle(e.target.value)} placeholder="Title" id="title" required />
                    <input type="file" className="form-control mt-4" id="file" accept="application/pdf" required onChange={(e) => setFile(e.target.files[0])} />

                    <button className="btn btn-dark mt-3" type="submit">
                        Submit
                    </button>

                </form>
                <div className="uploaded">
                    <h4>Uploaded PDF:</h4>
                    <div className="output-div">
                        {allImage == null ? "" : allImage.map((data) => {
                            return (
                                <div className="inner-div">
                                    <h6>Titile: {data.title}</h6>
                                    <button className="btn btn-dark" onClick={() => showPdf(data.pdf)}>Show Pdf</button>
                                </div>

                            );
                        })}

                    </div>
                </div>




            </div>
        </>
    );
}

export default UploadPDF;