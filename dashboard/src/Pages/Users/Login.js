import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd"; // Import message from antd
import Shared from "./Shared";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Import and use useNavigate for routing

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if email and password are filled
    if (email && password) {
      // Simulate a successful login and navigate to the user-details page
      navigate("/user-details");
    } else {
      // Display an error message
      message.error("Please enter both email and password.");
    }
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };

  return (
    <section className="flex flex-row overflow-hidden h-screen bg-white">
      <div className="flex flex-col justify-center items-center px-16 py-14 leading-relaxed max-w-[720px] flex-1">
        <div className="flex flex-col items-center max-w-full w-[450px]">
          <header className="flex flex-col w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d0498fb0f4f58a30925bc0d5f8bd87cc29532a518a66380aa0c8b2ad5dfdcff?apiKey=2b51dad425e04206847488420121dc35&"
              alt="Keto Clinic Logo"
              className="self-center w-32 max-w-full aspect-square"
            />
            <h2 className="mt-2 text-base text-neutral-600">Welcome Back!</h2>
          </header>
          <main className="flex flex-col self-end mt-7 w-full text-base">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-end w-full"
            >
              <div className="w-full">
                <label htmlFor="email" className="text-neutral-600">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="px-4 mt-2 w-full rounded-xl border border-solid border-neutral-500 border-opacity-30 min-h-[56px] text-neutral-400"
                  required
                />
              </div>
              <div className="w-full mt-6">
                <label htmlFor="password" className="text-neutral-600">
                  Password
                </label>
                <div className="flex gap-10 justify-between items-center px-4 mt-2 w-full rounded-xl border border-solid border-neutral-500 border-opacity-30 min-h-[56px] text-neutral-400">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-transparent border-none outline-none"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/045133a1b45652187460a2819fe8297cd0f473c13e177b92d08d6597696088f0?placeholderIfAbsent=true&apiKey=5bf51c3fc9cb49b480a07670cbcd768f"
                      alt={showPassword ? "Hide password" : "Show password"}
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                  </button>
                </div>
              </div>
              <p className="mt-6 text-neutral-600 self-start">
                Forgot password?{" "}
                <button
                  onClick={handleForgotPassword}
                  className="font-semibold text-blue-400"
                >
                  Click Me
                </button>
              </p>

              <button
                type="submit"
                className="gap-2.5 self-stretch px-12 py-4 mt-6 w-full font-semibold text-center text-white rounded-3xl bg-green-400 min-h-[56px]"
              >
                Login
              </button>
            </form>
          </main>
          <footer className="mt-12 text-base text-neutral-600">
            Don't have an account?{" "}
            <a href="/user-details" className="font-semibold text-blue-400">
              Register here.
            </a>
          </footer>
        </div>
      </div>

      <Shared className="flex-1" />
    </section>
  );
};

export default Login;
