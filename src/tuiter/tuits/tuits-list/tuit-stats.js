import React, { useState } from "react";

const TuitStats = ({
  tuit = {
    _id: 234,
    liked: true,
    replies: 123,
    retuits: 432,
    likes: 2345,
  },
}) => {
  let [tuitLikes, setTuitLikes] = useState(tuit.likes);
  let [likedTuit, setLikedTuit] = useState(tuit.liked);

  const likeButtonClick = () => {
    setLikedTuit(!likedTuit);
    if (likedTuit) {
      setTuitLikes(tuitLikes - 1);
    } else {
      // case where the tuit has changed from liked to unliked
      setTuitLikes(tuitLikes + 1);
    }
  };
  return (
    <div className="row mt-2 mb-1">
      <div className="col-3">
        {/* <div className="row"> */}
        <i className="bi bi-chat me-2"></i>
        {tuit.replies}
        {/* </div> */}
      </div>
      <div className="col-3">
        <i className="bi bi-repeat me-3"></i>
        {tuit.retuits}
      </div>
      <div className="col-3">
        {/* <Icon onclick={likeButtonClick}></Icon> */}

        <i
          className={`bi 
          ${likedTuit ? "bi-heart-fill" : "bi-heart"} 
          ${likedTuit ? "text-danger" : "text-secondary"} me-3`}
          onClick={likeButtonClick}></i>
        {tuitLikes}
      </div>
      <div className="col-3 float-end">
        <i className="bi bi-share me-3"></i>
      </div>
    </div>
  );
};

export default TuitStats;
