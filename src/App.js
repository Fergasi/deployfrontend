import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./Pages/HomePage";
import PostUser from "./Pages/PostUser";
import NavBar from "./Components/NavBar";

// Heroku
const urlEndpoint = process.env.REACT_APP_DATABASE_URL;

//LOCAL
// const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

function App() {
  const [clientMessage, setClientMessage] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [doggoImage, setDoggoImage] = useState(
    "https://www.dogstrust.ie/sponsor/_media/mystery-dog/133327dog-gallery.dog-profile-desktop-mystery-2.jpg"
  );
  const [userList, setUserlist] = useState([]);
  const [postUser, setPostUser] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(`${urlEndpoint}/get-users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseJSON = await response.json();
      setUserlist(responseJSON.serverMessage);
    }
    fetchUsers();
  }, [postUser]);

  const postUserData = async (userData) => {
    const response = await fetch(`${urlEndpoint}/create-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userData }),
    });
    const responseJSON = await response.json();
    return responseJSON;
  };

  const sendRecieveMessage = async () => {
    const response = await fetch(`${urlEndpoint}/post-message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ clientMessage }),
    });
    const responseJSON = await response.json();
    setServerMessage(responseJSON.serverMessage);
  };

  const getDoggoImage = async () => {
    const response = await fetch(`${urlEndpoint}/get-dog`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseJSON = await response.json();
    console.log(responseJSON.serverMessage);
    setDoggoImage(responseJSON.serverMessage);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route
              index
              element={
                <HomePage
                  clientMessage={clientMessage}
                  setClientMessage={setClientMessage}
                  serverMessage={serverMessage}
                  sendRecieveMessage={sendRecieveMessage}
                  getDoggoImage={getDoggoImage}
                  doggoImage={doggoImage}
                  userList={userList}
                />
              }
            />
            <Route
              path="/post-user"
              element={
                <PostUser
                  postUserData={postUserData}
                  setPostUser={setPostUser}
                />
              }
            />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
