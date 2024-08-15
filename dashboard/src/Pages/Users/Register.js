import React from 'react';
import Shared from './Shared';

const Register = () => {
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
            <p className="mt-2 text-base text-neutral-600">
              Create an account with us! CHEERS 
            </p>
          </header>
          <main className="flex flex-col mt-12 w-full text-base">
            <form className="flex flex-col items-end w-full">
              <div className="w-full mb-6">
                <label htmlFor="fullName" className="text-neutral-600">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  className="px-4 mt-2 w-full rounded-xl border border-solid border-neutral-500 border-opacity-30 min-h-[56px] text-neutral-400"
                />
              </div>
              <div className="w-full mb-6">
                <label htmlFor="emailAddress" className="text-neutral-600">Email Address</label>
                <input
                  type="email"
                  id="emailAddress"
                  placeholder="Enter your email address"
                  className="px-4 mt-2 w-full rounded-xl border border-solid border-neutral-500 border-opacity-30 min-h-[56px] text-neutral-400"
                />
              </div>
              <button
                type="submit"
                className="gap-2.5 self-stretch px-12 py-4 mt-6 w-full font-semibold text-center text-white rounded-3xl bg-green-400 min-h-[56px]"
              >
                Create an Account
              </button>
            </form>
          </main>
          <footer className="mt-12 text-base text-neutral-600">
          Click Login in you already have an Account?{' '}
            <a href="/" className="font-semibold text-blue-400">Login</a>
          </footer>
        </div>
      </div>
      <Shared className="flex-1" />
    </section>
  );
};

export default Register;
