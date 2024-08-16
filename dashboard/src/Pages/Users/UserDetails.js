import React from 'react';

const UserDetails = () => {
  return (
    <section className="flex flex-col">
      <header className="flex overflow-hidden flex-col justify-center items-end px-8 py-7 w-full bg-white min-h-[100px] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2 items-center max-md:max-w-full">
          <button className="flex gap-2 justify-center items-center self-stretch pr-6 pl-4 my-auto text-base font-semibold leading-relaxed text-white bg-lime-400 rounded-3xl min-h-[48px] max-md:pr-5">
            <img loading="lazy" src="http://b.io/ext_11-" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            <span className="self-stretch my-auto">Fill the form</span>
          </button>
          <button className="flex gap-2.5 justify-center items-center self-stretch my-auto w-12 h-12 rounded-3xl bg-stone-100 min-h-[48px]" aria-label="Notification">
            <img loading="lazy" src="http://b.io/ext_12-" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
          </button>
          <div className="flex gap-2 items-center self-stretch py-1 pr-4 pl-2 my-auto text-base leading-relaxed rounded-3xl bg-stone-100 min-h-[48px] text-neutral-600">
            <div className="flex gap-2 items-center self-stretch my-auto">
              <img loading="lazy" src="http://b.io/ext_13-" alt="Profile picture of Nakitto Catherine" className="object-contain shrink-0 self-stretch my-auto w-10 rounded-3xl aspect-square" />
              <span className="self-stretch my-auto">Details</span>
            </div>
            <img loading="lazy" src="http://b.io/ext_14-" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center self-center py-5 w-full rounded-3xl bg-stone-100 max-w-[1136px] min-h-[924px] max-md:max-w-full">
        <h1 className="self-stretch px-6 w-full text-4xl font-semibold leading-relaxed text-neutral-600 max-md:px-5">
          Application Form
        </h1>
        <div className="flex overflow-hidden flex-col items-center mt-6 max-w-full bg-white rounded-3xl w-[1080px]">
          <div className="flex overflow-hidden flex-col items-center px-8 pt-8 w-full h-[704px] max-w-[1080px] max-md:px-5 max-md:max-w-full">
            <nav className="flex flex-wrap gap-5 justify-between items-start w-full">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="flex flex-col justify-center items-center w-12 h-12 rounded-3xl bg-slate-500 min-h-[48px]">
                  <img loading="lazy" src="http://b.io/ext_15-" alt="" className="object-contain w-6 aspect-square" />
                </div>
                <div className="flex flex-col items-center mt-2">
                  <span className="text-xs font-medium tracking-wide uppercase text-neutral-400">
                    Step 1
                  </span>
                  <span className="mt-1 text-base font-semibold leading-relaxed text-neutral-600">
                    Personal Information
                  </span>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex pt-6 min-h-[24px]"></div>
              <div className="flex flex-col items-center">
                <div className="flex flex-col justify-center items-center w-12 h-12 rounded-3xl bg-stone-100 min-h-[48px]">
                  <img loading="lazy" src="http://b.io/ext_16-" alt="" className="object-contain w-6 aspect-square" />
                </div>
                <div className="flex flex-col items-center mt-2 text-neutral-400">
                  <span className="text-xs font-medium tracking-wide uppercase">
                    Step 2
                  </span>
                  <span className="mt-1 text-base font-semibold leading-relaxed">
                    Residential Information
                  </span>
                </div>
              </div>
              {/* Continue for other steps similarly */}
            </nav>
            <hr className="mt-8 w-full border border-solid border-neutral-500 border-opacity-10 min-h-[1px]" />
            <form className="flex flex-wrap gap-4 justify-center items-start pb-8 mt-8 w-full">
              {/* Salutation */}
              <div className="flex flex-col grow shrink min-w-[240px] w-[400px] max-md:max-w-full">
                <div className="flex flex-col max-w-full w-[490px]">
                  <label htmlFor="salutation" className="text-base font-semibold leading-relaxed text-neutral-600">
                    Salutation
                  </label>
                  <span className="mt-1 text-sm text-neutral-400 max-md:max-w-full">
                    How can we address you?
                  </span>
                </div>
                <div className="flex flex-wrap gap-10 justify-between items-center px-4 mt-2 max-w-full text-base leading-relaxed whitespace-nowrap bg-white rounded-xl border border-solid border-neutral-500 border-opacity-30 min-h-[56px] text-neutral-400 w-[500px]">
                  <select id="salutation" name="salutation" className="appearance-none bg-transparent border-none w-full text-neutral-400 leading-tight focus:outline-none">
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Ms.</option>
                    <option>Dr.</option>
                  </select>
                  <img loading="lazy" src="http://b.io/ext_19-" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square pointer-events-none" />
                </div>
              </div>
              {/* Full Name */}
              <div className="flex flex-col grow shrink min-w-[240px] w-[400px] max-md:max-w-full">
                <div className="flex flex-col max-w-full w-[490px]">
                  <label htmlFor="fullName" className="text-base font-semibold leading-relaxed text-neutral-600">
                    Full Name
                  </label>
                  <span className="mt-1 text-sm text-neutral-400 max-md:max-w-full">
                    The applicant's full legal name
                  </span>
                </div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your Full Name"
                  className="px-4 mt-2 max-w-full text-base leading-relaxed bg-white rounded-xl border border-solid border-neutral-500 border-opacity-30 min-h-[56px] text-neutral-400 w-[500px]"
                />
              </div>
              {/* Date of Birth */}
              <div className="flex flex-col grow shrink min-w-[240px] w-[400px] max-md:max-w-full">
                <div className="flex flex-col max-w-full w-[490px]">
                  <label htmlFor="dateOfBirth" className="text-base font-semibold leading-relaxed text-neutral-600">
                    Date of Birth
                  </label>
                  <span className="mt-1 text-sm text-neutral-400 max-md:max-w-full">
                    The applicant's date of birth for identity verification
                  </span>
                </div>
                <div className="flex flex-wrap gap-10 justify-between items-center px-4 mt-2 max-w-full text-base leading-relaxed bg-white rounded-xl border border-solid border-neutral-500 border-opacity-30 min-h-[56px] text-neutral-400 w-[500px]">
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    className="appearance-none bg-transparent border-none w-full text-neutral-400 leading-tight focus:outline-none"
                  />
                  <img loading="lazy" src="http://b.io/ext_20-" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square pointer-events-none" />
                </div>
              </div>
              {/* Gender */}
              <div className="flex flex-col grow shrink min-w-[240px] w-[400px] max-md:max-w-full">
                <div className="flex flex-col max-w-full w-[490px]">
                  <label htmlFor="gender" className="text-base font-semibold leading-relaxed text-neutral-600">
                    Gender
                  </label>
                  <span className="mt-1 text-sm text-neutral-400 max-md:max-w-full">
                    The applicant's gender
                  </span>
                </div>
                <div className="flex flex-wrap gap-10 justify-between items-center px-4 mt-2 max-w-full text-base leading-relaxed bg-white rounded-xl border border-solid border-neutral-500 border-opacity-30 min-h-[56px] text-neutral-400 w-[500px]">
                  <select id="gender" name="gender" className="appearance-none bg-transparent border-none w-full text-neutral-400 leading-tight focus:outline-none">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                    <option>Prefer not to say</option>
                  </select>
                  <img loading="lazy" src="http://b.io/ext_19-" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square pointer-events-none" />
                </div>
              </div>
              {/* More form fields continue here */}
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};

export default UserDetails;
