import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ChatContext } from "../../context/chatContext";
import "./Join.css";

export const Join = () => {
  const [name, room, setName, setRoom] = useContext(ChatContext);

  const handleChange = ({ target }) => {
    target.name === "name" ? setName(target.value) : setRoom(target.value);
  };

  const handleClick = (e) => {
    return !name || !room ? e.preventDefault() : null;
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            name="name"
            className="joinInput"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="room"
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={handleChange}
          />
        </div>
        <Link onClick={handleClick} to={`/chat?name=${name}&room=${room}`}>
          <button className={"button mt-20"} type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};
