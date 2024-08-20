import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserDetails() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    navigate("/success");
  };

  return (
    <div
      className="flex overflow-hidden flex-col mx-auto w-full bg-green-200 h-[600px] max-w-[1024px] p-8"
      style={{
        backgroundImage:
          "url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL3Jhd3BpeGVsb2ZmaWNlNF9zb2Z0X2xpZ2h0X21pbmltYWxfdG9uZXNfY2xvc2VfdXBfb2ZfYV90cmVlX21hY185NDYxNmVmYi1jNGVhLTRiMzMtYWFjMC1iZmY0NWI3ZWIwY2RfMS5qcGc.jpg)",
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image within the div
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    >
      <div className="flex flex-row w-full gap-8">
        {/* Left Section - Progress Navigation */}
        <div className="flex flex-col items-start w-1/3 bg-white bg-opacity-60 rounded-lg p-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d0498fb0f4f58a30925bc0d5f8bd87cc29532a518a66380aa0c8b2ad5dfdcff?apiKey=2b51dad425e04206847488420121dc35&"
            alt="Keto Clinic Logo"
            className="self-center w-32 max-w-full aspect-square bg-gray-200 mb-4"
          />
          <div className="flex flex-col z-10 items-start mt-0 max-w-full w-full">
            <div
              className={`flex gap-2 items-center w-full font-medium leading-relaxed ${
                step >= 1 ? "text-slate-800" : "text-slate-500"
              }`}
            >
              <div className="w-10 h-10 text-lg whitespace-nowrap rounded-3xl bg-slate-800 flex justify-center items-center">
                1
              </div>
              <div className="text-base">Patient Information</div>
            </div>
            <div className="flex gap-2.5 justify-center items-center mt-2 w-10">
              <div className="border-2 border-white border-solid h-6" />
            </div>
            <div
              className={`flex gap-2 items-center mt-2 font-medium leading-relaxed ${
                step >= 2 ? "text-slate-800" : "text-slate-500"
              }`}
            >
              <div className="w-10 h-10 text-lg whitespace-nowrap bg-white rounded-3xl flex justify-center items-center">
                2
              </div>
              <div className="text-base">Health Status</div>
            </div>
            <div className="flex gap-2.5 justify-center items-center mt-2 w-10">
              <div className="border-2 border-white border-solid h-6" />
            </div>
            <div
              className={`flex gap-2 items-center mt-2 font-medium leading-relaxed ${
                step >= 3 ? "text-slate-800" : "text-slate-500"
              }`}
            >
              <div className="w-10 h-10 text-lg whitespace-nowrap bg-white rounded-3xl flex justify-center items-center">
                3
              </div>
              <div className="text-base">Plan</div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="flex flex-col w-2/3 bg-white p-8 rounded-lg shadow-lg">
          {step === 1 && (
            <>
              <div className="text-2xl font-bold text-slate-800">
                Patient Information
              </div>
              <div className="flex flex-wrap mt-4 w-full text-slate-500">
                <div className="flex flex-col w-full md:w-1/2 pr-4 mb-4">
                  <div className="flex flex-col w-full">
                    <div>Salutation</div>
                    <div className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"></div>
                  </div>
                  <div className="flex flex-col w-full mt-4">
                    <div>Full name</div>
                    <div className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"></div>
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Gender</div>
                    <select className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200">
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="non-binary">Non-Binary</option>
                      <option value="prefer-not-to-say">
                        Prefer Not to Say
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Email address</div>
                    <div className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"></div>
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Date of birth</div>
                    <input
                      type="date"
                      className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full md:w-1/2 pl-4 mb-4">
                  <div className="flex flex-col mt-4 w-full">
                    <div>Phone number</div>
                    <div className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"></div>
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Whatsapp Number</div>
                    <div className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"></div>
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Home Address</div>
                    <div className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"></div>
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Work Address</div>
                    <div className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"></div>
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="text-2xl font-bold text-slate-800">
                Health Status
              </div>
              <div className="flex flex-wrap mt-8 w-full text-slate-500">
                <div className="flex flex-col w-full md:w-1/2 pr-4 mb-4">
                  <div className="flex flex-col w-full">
                    <div>Current body weight?</div>
                    <div className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"></div>
                  </div>
                  <div className="flex flex-col w-full mt-4">
                    <div>Weight Goal?</div>
                    <div className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"></div>
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Do you have any allergies/food exclusions?</div>
                    <div className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"></div>
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Observation after the allergies?</div>
                    <div className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"></div>
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Medication for the allergies?</div>
                    <div className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"></div>
                  </div>
                </div>

                <div className="flex flex-col w-full md:w-1/2 pl-4 mb-4">
                  <div className="flex flex-col mt-4 w-full">
                    <div>Whats your Surgical History?</div>
                    <div className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"></div>
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Whats your Sample plan?</div>
                    <div className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"></div>
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>What's your plan start date?</div>
                    <input
                      type="date"
                      className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                    />
                  </div>

                  <div className="flex flex-col mt-4 w-full">
                    <div>What's your plan end date?</div>
                    <input
                      type="date"
                      className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="text-2xl mt-8 font-bold text-slate-800">Plan</div>
              <div className="flex flex-col mt-8 w-full text-slate-500">
                <div className="flex flex-col w-full">
                  <div>Attach Documents</div>
                  <input
                    type="file"
                    className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                    multiple
                  />
                </div>
                <div className="flex flex-col mt-4 mb-9 w-full">
                  <div>Attach Files</div>
                  <input
                    type="file"
                    className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                    multiple
                  />
                </div>
              </div>
            </>
          )}

          <div className="flex gap-4 items-start mt-6 w-full">
            {step > 1 && (
              <div
                onClick={prevStep}
                className="flex-1 px-6 py-3 text-center rounded-lg border border-solid bg-slate-100 border-slate-200 text-slate-800 cursor-pointer"
              >
                Previous
              </div>
            )}
            {step < 3 && (
              <div
                onClick={nextStep}
                className="flex-1 px-6 py-3 text-center text-white rounded-lg bg-slate-800 cursor-pointer"
              >
                Next
              </div>
            )}
            {step === 3 && (
              <div
                onClick={handleSubmit}
                className="flex-1 px-6 py-3 text-center text-white rounded-lg bg-slate-800 cursor-pointer"
              >
                Submit
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
