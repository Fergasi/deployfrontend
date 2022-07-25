import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./Pages/HomePage";
const urlEndpoint = process.env.REACT_APP_DATABASE_URL;

function App() {
  const [clientMessage, setClientMessage] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [doggoImage, setDoggoImage] = useState("");

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
    console.log("doggo response" + responseJSON.serverMessage);
    setDoggoImage(responseJSON.serverMessage);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <Routes>
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
              />
            }
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
