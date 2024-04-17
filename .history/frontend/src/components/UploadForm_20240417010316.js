// import React, { useState } from "react";
// import axios from "axios";
// // import { BACKEND_URI } from "../config/constants";
// const BACKEND_URI = "http://localhost:4000";
// const UploadForm = ({ getAllMedias }) => {
//   const [name, setName] = useState("");
//   const [videos, setVideos] = useState([]);
 

//   const getAllMedias = () => {
//     axios
//       .get(`${BACKEND_URI}/api/v1/media`)
//       .then((success) => {
//         getAllMedias();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   const hadleSubmit = (e) => {
//     e.preventDefault();

//     let formdata = new FormData();
//     for (let key in videos) {
//       formdata.append("videos", videos[key]);
//     }
//     const BACKEND_URI = "http://localhost:4000";
//     formdata.append("name", name);

//     axios
//       .post(`${BACKEND_URI}/api/v1/media/create`, formdata)
//       .then((success) => {
//         getAllMedias();
//         alert("Submitted successfully");
//       })
//       .catch((error) => {
//         console.log(error);
//         alert("Error happened!");
//       });
//   };

//   return (
//     <>
//       <form onSubmit={hadleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             className="form-control"
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="videos">Upload Videos</label>
//           <input
//             type="file"
//             name="videos"
//             id="videos"
//             multiple
//             className="form-control"
//             accept=".mp4, .mkv"
//             onChange={(e) => {
//               setVideos(e.target.files);
//             }}
//           />
//         </div>

//         <button type="submit" className="btn btn-primary mt-2">
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };

// export default UploadForm;




import React, { useState } from "react";
import axios from "axios";

const BACKEND_URI = "http://localhost:4000";

const UploadForm = ({ getAllMedias }) => {
  const [name, setName] = useState("");
  const [videos, setVideos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    for (let key in videos) {
      formData.append("videos", videos[key]);
    }
    formData.append("name", name);

    axios
      .post(`${BACKEND_URI}/api/v1/media/create`, formData)
      .then((response) => {
        getAllMedias(); // Using the prop directly
        alert("Submitted successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error happened!");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="videos">Upload Videos</label>
          <input
            type="file"
            name="videos"
            id="videos"
            multiple
            className="form-control"
            accept=".mp4, .mkv"
            onChange={(e) => {
              setVideos(e.target.files);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default UploadForm;
