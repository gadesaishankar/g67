import React from "react";
// import { BACKEND_URI } from "../config/constants";

const UploadsList = ({ medias }) => {
  const BACKEND_URI = "http://localhost:4000";  
  return (
    <div className="row">
      <div className="col-md-10">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th width="200">Name</th>
              <th>Videos</th>
            </tr>
          </thead>
          <tbody>
            {medias &&
              medias.map((media) => {
                return (
                  <tr>
                    <td>{media.name}</td>
                    <td>
                      {media.videos.map((video) => {
                        return (
                          <>
                          <video
                            preload="auto"
                            width="320"
                            height="250"
                            controls
                          > 
                            <source src={`${BACKEND_URI}${video}`} />
                            ;Your browser does not support the video tag.
                          </video>
                          <br/>
                          </>
                        );
                      })}
                    </td>
                  </tr>
                );
              })} 
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UploadsList;
