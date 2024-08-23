import * as React from "react";

function Success() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-200">
      <div className="flex flex-col text-base font-medium leading-relaxed max-w-[500px] bg-white rounded-lg shadow-lg p-8">
        <div className="text-2xl font-bold text-black">You’re all set!</div>
        <div className="mt-6 leading-7 text-orange-500">
          Thank you for submitting your form. <br />
          We will get back to you shortly! CHEERS.
          <br />
          <span className="text-orange-500">support@KetoClinic.com</span> for
          assistance.
        </div>
        <div className="px-6 mt-8 w-full text-white rounded-lg bg-green-400 text-center py-3 cursor-pointer">
          Go to Home Page
        </div>
      </div>
    </div>
  );
}

export default Success;
