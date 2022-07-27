import React from "react";

const HomePage = ({
  clientMessage,
  setClientMessage,
  serverMessage,
  sendRecieveMessage,
  getDoggoImage,
  doggoImage,
  userList,
}) => {
  const isVideo = doggoImage.includes("mp4") || doggoImage.includes("webm");

  return (
    <div>
      <h2>Home Page</h2>
      <br />
      <h3>Client Message: </h3>
      <div>{clientMessage}</div>
      <br />
      <br />
      <h3>Server Message: </h3>
      <div>{serverMessage}</div>
      <br />
      <br />
      <textarea
        placeholder="Enter Client Message..."
        onChange={(e) => {
          const dateTime = new Date();
          const newClientMessage = `"${
            e.target.value
          }" at time ${dateTime.toString()}`;
          setClientMessage(newClientMessage);
        }}
      ></textarea>
      <br />
      <br />
      <button
        id="sendMessageButton"
        type="submit"
        onClick={() => {
          sendRecieveMessage();
        }}
      >
        Submit
      </button>
      <br />
      <br />
      <div>
        <h3>User List: </h3>
        <div id="users">
          {userList.map((user) => {
            return (
              <div key={user.id}>
                <br />
                <div>
                  <strong>First Name: </strong>
                  {user.firstName}
                </div>
                <br />
                <div>
                  <strong>Last Name: </strong>
                  {user.lastName}
                </div>
                <br />
                <div>
                  <strong>Email: </strong>
                  {user.email}
                </div>
                <br />
                <hr />
              </div>
            );
          })}
        </div>
      </div>
      <h2>Bonus Pup</h2>
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
      <br />
      <div id="doggoContainer">
        {isVideo && (
          <>
            <video
              src={doggoImage}
              width="600"
              height="300"
              autoPlay={true}
              loop={true}
            />
          </>
        )}
        {!isVideo && (
          <>
            <img src={doggoImage}></img>
          </>
        )}
      </div>
      <br />
    </div>
  );
};

export default HomePage;
