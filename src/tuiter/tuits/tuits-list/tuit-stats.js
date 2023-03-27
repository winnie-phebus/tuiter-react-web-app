import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTuitThunk } from "../../../services/tuits-thunks";

const TuitStats = ({
  tuit = {
    _id: 234,
    liked: true,
    disliked: false,
    replies: 123,
    retuits: 432,
    likes: 2345,
  },
}) => {
  let [tuitLikes, setTuitLikes] = useState(tuit.likes);
  let [likedTuit, setLikedTuit] = useState(tuit.liked);

  let [tuitDislikes, setTuitDislikes] = useState(tuit.dislikes);
  let [dislikedTuit, setDislikedTuit] = useState(tuit.disliked);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      updateTuitThunk({
        ...tuit,
        likes: tuitLikes,
      })
    );
  }, [dispatch, tuit, tuitLikes]);

  if (tuitLikes === undefined || tuitLikes < 0) {
    setTuitLikes(0);
    setDislikedTuit(false);
  }

  if (tuitDislikes === undefined || tuitDislikes < 0) {
    setTuitDislikes(0);
    setDislikedTuit(false);
  }

  const likeButtonClick = () => {
    if (likedTuit === true) {
      setTuitLikes(tuitLikes - 1);
      dispatch(
        updateTuitThunk({
          ...tuit,
          liked: false,
          likes: tuitLikes,
        })
      );
    } else {
      // case where the tuit has changed from liked to unliked
      setTuitLikes(tuitLikes + 1);
      dispatch(
        updateTuitThunk({
          ...tuit,
          liked: true,
          likes: tuitLikes,
        })
      );
    }
    setLikedTuit(!likedTuit);
  };

  const dislikeButtonClick = () => {
    if (dislikedTuit === true) {
      setTuitDislikes(tuitDislikes - 1);
      dispatch(
        updateTuitThunk({
          ...tuit,
          disliked: false,
          dislikes: tuitDislikes,
        })
      );
    } else {
      // case where the tuit has changed from disliked to undisliked
      setTuitDislikes(tuitDislikes + 1);
      dispatch(
        updateTuitThunk({
          ...tuit,
          disliked: true,
          dislikes: tuitDislikes,
        })
      );
    }
    setDislikedTuit(!dislikedTuit);
  };

  return (
    <div className="row mt-2 mb-1">
      <div className="col-2">
        {/* <div className="row"> */}
        <i className="bi bi-chat me-2"></i>
        {tuit.replies}
        {/* </div> */}
      </div>
      <div className="col-2">
        <i className="bi bi-repeat me-3"></i>
        {tuit.retuits}
      </div>
      <div className="col-3">
        <i
          className={`bi 
          ${likedTuit ? "bi-heart-fill" : "bi-heart"} 
          ${likedTuit ? "text-danger" : "text-secondary"} me-3`}
          onClick={() => likeButtonClick()}></i>
        {tuitLikes}
        {/* , {String(likedTuit)} */}
      </div>
      <div className="col-3">
        <i
          className={`bi 
          ${dislikedTuit ? "bi-hand-thumbs-down-fill" : "bi-hand-thumbs-down"} 
          ${dislikedTuit ? "cyan-600" : "text-secondary"} me-3`}
          onClick={() => dislikeButtonClick()}></i>
        {tuitDislikes}
      </div>
      <div className="col-2 float-end">
        <i className="bi bi-share me-3"></i>
      </div>
    </div>
  );
};

export default TuitStats;
