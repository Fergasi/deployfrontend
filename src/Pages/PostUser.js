import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validateUser from "../Utils/Validation";

const PostUser = ({ postUserData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mssg, setMssg] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <div>Create New User</div>
      <br></br>
      <label>First Name</label>
      <br></br>
      <input
        type="text"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      ></input>
      <br></br>
      <label>Last Name</label>
      <br></br>
      <input
        type="text"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      ></input>
      <br></br>
      <label>Email</label>
      <br></br>
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <br></br>
      <button
        onClick={async () => {
          const validateUserObj = validateUser({
            firstName: firstName,
            lastName: lastName,
            email: email,
          });
          if (validateUserObj.isValid === false) {
            setMssg(validateUserObj.mssg);
          }
          if (validateUserObj.isValid === true) {
            console.log(firstName + " " + lastName + " " + email);
            const { success, message } = await postUserData({
              firstName: firstName,
              lastName: lastName,
              email: email,
            });
            setMssg(message);
            if (success === true) {
              navigate("/");
            }
          }
        }}
      >
        Submit
      </button>
      <br />
      <div>{mssg}</div>
    </div>
  );
};

export default PostUser;
