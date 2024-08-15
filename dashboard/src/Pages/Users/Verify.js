import React, { useState } from 'react';

const Verify = () => {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section class="flex overflow-hidden flex-col justify-center items-center px-20 py-80 bg-white max-w-[720px] max-md:px-5 max-md:py-24">
      <div class="flex flex-col items-center max-w-full w-[450px]">
        <div class="flex flex-col items-end w-full">
          <header class="flex flex-col w-full">
            <h1 class="text-4xl font-semibold leading-relaxed text-black">Verify Account</h1>
            <p class="mt-2 text-base leading-7 text-neutral-600 max-md:max-w-full">
              A one-time password (OTP) has been sent to your email address. Enter the code to verify your account.
            </p>
          </header>
          <form onSubmit={handleSubmit} class="flex flex-col mt-12 w-full text-base leading-relaxed max-w-[450px] max-md:mt-10 max-md:max-w-full">
            <div class="flex flex-col items-end w-full max-md:max-w-full">
              <label htmlFor="otp" class="text-neutral-600 max-md:max-w-full">One-time Password</label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                class="gap-2 self-stretch px-4 mt-2 w-full rounded-xl border border-solid border-neutral-500 border-opacity-30 min-h-[56px] text-neutral-400"
                placeholder="Enter OTP"
                aria-label="Enter One-time Password"
              />
            </div>
            <button
              type="submit"
              class="gap-2.5 self-stretch px-12 py-4 mt-6 w-full font-semibold text-center text-white rounded-3xl bg-slate-500 min-h-[56px] max-md:px-5"
            >
              Verify Account
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Verify;