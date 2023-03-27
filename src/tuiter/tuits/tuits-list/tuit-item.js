/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import TuitStats from "./tuit-stats.js";
import { deleteTuitThunk } from "../../../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitItem = ({
  tuit = {
    _id: 234,
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title:
      "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    image: "spacex.png",
    liked: true,
    replies: 123,
    retuits: 432,
    likes: 2345,
    handle: "spacex",
    tuit: "You want to wake up in the morning and think the future is going to be great. ",
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  return (
    <li className="list-group-item px-4">
      <div className="row mt-2 py-1">
        <div className="col-2">
          <img
            width={70}
            className="rounded-circle"
            src={`/images/${tuit.image}`}
          />
        </div>
        <div className="col-10 px-2">
          <div className="row mb-1">
            <p className="mx-0 mb-1">
              <span className="fw-bolder">{tuit.username}</span> {tuit.handle} .{" "}
              {tuit.time}
              <i
                className="bi bi-x-lg float-end"
                onClick={() => deleteTuitHandler(tuit._id)}
              />
            </p>
          </div>
          {tuit.tuit}
          <TuitStats tuit={tuit} />
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
