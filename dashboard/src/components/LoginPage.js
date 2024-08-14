import * as React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { message } from "antd";

function InputField({ label, type = "text", value, onChange }) {
  const id = label.toLowerCase().replace(/\s/g, "-");
  return (
    <>
      <label htmlFor={id} className="mt-6 font-medium text-sm">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 mt-2 text-sm bg-white border border-gray-400 rounded"
      />
    </>
  );
}

function LoginButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full px-4 py-3 mt-8 text-sm font-medium text-white transition-colors bg-sky-900 rounded shadow-sm hover:bg-sky-800"
    >
      LOGIN
    </button>
  );
}

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //message.error("error connecting to the database");
    navigate("/layout");
    // console.log("Login attempt with:", { username, password });
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };

  return (
    <main className="flex flex-col justify-center min-h-screen bg-white">
      <section className="flex w-full h-screen bg-white border border-black">
        <div className="flex w-full max-md:flex-col">
          <div className="flex flex-col justify-center w-full px-8 md:w-1/2 md:px-12">
            <div className="flex flex-col self-stretch max-w-sm mx-auto text-sm font-bold text-black">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d0498fb0f4f58a30925bc0d5f8bd87cc29532a518a66380aa0c8b2ad5dfdcff?apiKey=2b51dad425e04206847488420121dc35&"
                alt="Keto Clinic Logo"
                className="self-center w-32 max-w-full aspect-square"
              />
              <h1 className="mt-4 text-2xl text-center">
                Keto Clinic
                <br />
                Management Dashboard
              </h1>
              <p className="mt-3 text-xs text-center text-neutral-500">
                Welcome! Please enter your Username and password to login
              </p>
              <form onSubmit={handleSubmit} className="mt-6">
                <InputField
                  label="Username"
                  value={username}
                  onChange={handleUsernameChange}
                />
                <InputField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <LoginButton onClick={handleSubmit} />
              </form>
              <button
                onClick={handleForgotPassword}
                className="self-center mt-4 text-xs text-neutral-500 hover:text-neutral-700 transition-colors"
              >
                Forgot Password?
              </button>
            </div>
          </div>
          <div className="hidden md:flex w-1/2 bg-gray-100">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cb7d47aab1049792a262dea98816ae6eb80d3e2bea10958e16a4a5df928ee90?apiKey=2b51dad425e04206847488420121dc35&"
              alt="Decorative"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;