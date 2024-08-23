import React, { useState } from 'react';
import Shared from './Shared';

const Verify = () => {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
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
            <h1 className="text-4xl font-semibold leading-relaxed text-black">
              Verify your Account
            </h1>
            <p className="mt-2 text-base text-neutral-600 max-md:max-w-full">
              A one-time password (OTP) has been sent to your email address. Please enter the verification code.
            </p>
          </header>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col mt-12 w-full text-base leading-relaxed max-w-[450px] max-md:mt-10 max-md:max-w-full"
          >
            <div className="w-full">
              <label htmlFor="otp" className="text-neutral-600">
                One-time Password
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="px-4 mt-2 w-full rounded-xl border border-solid border-neutral-500 border-opacity-30 min-h-[56px] text-neutral-400"
                placeholder="Enter OTP"
                aria-label="Enter One-time Password"
              />
            </div>
            <button
              type="submit"
              className="gap-2.5 self-stretch px-12 py-4 mt-6 w-full font-semibold text-center text-white rounded-3xl bg-green-400 min-h-[56px] max-md:px-5"
            >
              Verify Account
            </button>
          </form>
        </div>
      </div>
      <Shared className="flex-1" />
    </section>
  );
};

export default Verify;
