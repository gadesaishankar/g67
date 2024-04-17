import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Video() {
  const [title, setTitle] = useState('');
  const [file, setVideo] = useState('');
  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get-videos');
      console.log(response.data.data);
      setAllVideos(response.data.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const submitVideo = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('video', file);
    console.log(title,file);
    try {
      const response = await axios.post('http://localhost:5000/upload-videos', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(response.data);
      if (response.data.message === "ok") {
        alert('Uploaded Successfully!!!');
        fetchVideos();
      }
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  // const showVideo = (pdf) => {
  //   window.open(`http://localhost:5000/videos/${pdf}`, "_blank", "noreferrer");
  // };


  return (
    <>
      <div className="App">
      <form className="formStyle" onSubmit={submitVideo}>
        <h4>Upload VIDEO</h4>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <input
          type="file"
          className="form-control"
          accept="video/*"
          required
          onChange={(e) => setVideo(e.target.files[0])}
        />
        <br />

        <button className="btn btn-primary" type="submit">
          Submit
        </button>

      </form>

      <div className="uploaded">
        <h4>Uploaded Videos:</h4>
        <div className="output-div">
          {allVideos == null ? "":
          allVideos.map((video) => {
            return (
            <div className="inner-div">
              <h6>Title: {video.title}</h6>
              <video width="320" height="240" controls>
                <source src={`http://localhost:5000/videos/${video.filename}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            );
          })}
        </div>
       </div>
      </div>
    </>
  );
}

export default Video;




