import React from "react";

const HomePage = ({
  clientMessage,
  setClientMessage,
  serverMessage,
  sendRecieveMessage,
  getDoggoImage,
  doggoImage,
}) => {
  return (
    <div>
      <h2>Home Page</h2>
      <br />
      <div>
        <img src={doggoImage}></img>
      </div>
      <br />
      <button
        id="getDogButton"
        type="submit"
        onClick={() => {
          getDoggoImage();
        }}
      >
        Get Random Doggo
      </button>
      <br />
      <h3>Client Message: </h3>
      <div>{clientMessage}</div>
      <br />
      <br />
      <h3>Server Message: </h3>
      <div>{serverMessage}</div>
      <br />
      <br />
      <label>Client Message Input: </label>
      <br />
      <input
        type="text"
        onChange={(e) => {
          const dateTime = new Date();
          const newClientMessage = `"${
            e.target.value
          }" at time ${dateTime.toString()}`;
          setClientMessage(newClientMessage);
        }}
      ></input>
      <br />
      <br />
      <button
        id="sendMessageButton"
        type="submit"
        onClick={() => {
          console.log("cool");
          sendRecieveMessage();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default HomePage;
