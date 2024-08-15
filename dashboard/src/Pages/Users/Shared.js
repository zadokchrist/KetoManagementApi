import React from 'react';

const Shared = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-0 py-0 bg-green-300 w-screen h-screen">
      <div className="relative w-full h-full">
        <img
          loading="lazy"
          src="https://assets.clevelandclinic.org/transform/11c5739d-f105-475a-b756-7463f3d603b5/Keto-Diet-1133794221-770x533-1_jpg"
          alt="TraceAccounting interface demonstration"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default Shared;
