import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import "./css/Uploadpdf.css";

const UploadVideo = ({ onSubmit }) => {
  const [Vtitle, VsetTitle] = useState('');
  const [Vfile, VsetFile] = useState('');
  const [VallImages, VsetAllImages] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const result = await axios.get("http://localhost:5000/api/getVideos");
    console.log(result.data.data);
    VsetAllImages(result.data.data);
  };

  const submitImage = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formdata = new FormData();
    formdata.append("title", Vtitle);
    formdata.append("file", Vfile);
    console.log(Vtitle, Vfile);
    console.log("sending video");
    try {
      const result = await axios.post("http://localhost:5000/api/uploadvideos", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("video has been sent ");
      console.log(result);

      if (result.data.status === "ok") {
        alert("Uploaded Successfully!!!");
        getVideo();
        onSubmit(); // Call the onSubmit prop here
      }
    } catch (error) {
      console.error("Error uploading video:", error);
    }
    setLoading(false);
  };

  const showVideo = (video) => {
    window.open(`http://localhost:5000/api/videos/${video}`, "_blank", "noreferrer");
  };

  return (
    <div className="uploadpdf">
      <form className="pdfform" onSubmit={submitImage}>
        <h4>Upload Video</h4>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          className="form-control pt-2 mt-2"
          onChange={(e) => VsetTitle(e.target.value)}
          placeholder="Title"
          id="title"
          required
        />
        <input
          type="file"
          className="form-control mt-4"
          id="file"
          accept="video/mp4,video/mp3"
          required
          onChange={(e) => VsetFile(e.target.files[0])}
        />
        <button className="btn btn-dark mt-3" type="submit" disabled={loading}>
          {loading ? "Wait..." : "Submit"}
        </button>
      </form>
      {loading && (
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      )}
      {/* <div className="uploaded">
        <h4>Uploaded Video:</h4>
        <div className="output-div">
          {VallImages == null
            ? ""
            : VallImages.map((data) => (
                <div className="inner-div" key={data.title}>
                  <h6>Title: {data.title}</h6>
                  <button className="btn btn-dark" onClick={() => showVideo(data.video)}>
                    Show Video
                  </button>
                </div>
              ))}
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default UploadVideo;
