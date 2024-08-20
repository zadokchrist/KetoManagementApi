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
      className="flex overflow-hidden flex-col mx-auto w-full bg-green-200 h-[620px] max-w-[1310px] p-4"
      style={{
        backgroundImage:
          "url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL3Jhd3BpeGVsb2ZmaWNlNF9zb2Z0X2xpZ2h0X21pbmltYWxfdG9uZXNfY2xvc2VfdXBfb2ZfYV90cmVlX21hY185NDYxNmVmYi1jNGVhLTRiMzMtYWFjMC1iZmY0NWI3ZWIwY2RfMS5qcGc.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
              <div className="flex flex-wrap mt-5 w-full text-slate-500">
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
                    <div>Any chronic illness(es)?</div>
                    <div className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"></div>
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Family history of diabetes, hypertension?</div>
                    <div className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"></div>
                  </div>
                </div>

                <div className="flex flex-col w-full md:w-1/2 pl-4 mb-4">
                  <div className="flex flex-col w-full">
                    <div>Daily activity level</div>
                    <select className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200">
                      <option value="">Select Activity Level</option>
                      <option value="sedentary">Sedentary</option>
                      <option value="lightly active">Lightly Active</option>
                      <option value="moderately active">
                        Moderately Active
                      </option>
                      <option value="very active">Very Active</option>
                      <option value="super active">Super Active</option>
                    </select>
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Rate of alcohol consumption</div>
                    <select className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200">
                      <option value="">Select Consumption Rate</option>
                      <option value="none">None</option>
                      <option value="occasional">Occasional</option>
                      <option value="moderate">Moderate</option>
                      <option value="heavy">Heavy</option>
                    </select>
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Do you smoke?</div>
                    <select className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200">
                      <option value="">Select Smoking Status</option>
                      <option value="non-smoker">Non-Smoker</option>
                      <option value="light-smoker">Light Smoker</option>
                      <option value="moderate-smoker">Moderate Smoker</option>
                      <option value="heavy-smoker">Heavy Smoker</option>
                    </select>
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Do you take any supplements?</div>
                    <select className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200">
                      <option value="">Select Supplement Status</option>
                      <option value="none">None</option>
                      <option value="vitamins">Vitamins</option>
                      <option value="minerals">Minerals</option>
                      <option value="protein-powder">Protein Powder</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Have you ever been on a diet plan?</div>
                    <div className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"></div>
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="text-2xl font-bold text-slate-800">Plan</div>
              <div className="flex flex-wrap mt-12 w-full text-slate-500">
                <div className="flex flex-col w-full mb-4">
                  <div className="flex flex-col mt-4 w-full">
                    <div>Select Plan</div>
                    <select className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200">
                      <option value="">Select Plan</option>
                      <option value="basic">Basic</option>
                      <option value="standard">Standard</option>
                      <option value="premium">Premium</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Additional Notes</div>
                    <textarea
                      className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                      rows="5"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Navigation Buttons */}
          <div className="flex mt-auto">
            {step > 1 && (
              <div
                onClick={prevStep}
                className="flex-1 px-6 py-3 text-center rounded-lg border border-solid bg-slate-100 border-slate-800 text-slate-800 cursor-pointer"
              >
                Previous
              </div>
            )}
            {step < 3 && (
              <div
                onClick={nextStep}
                className="flex-1 px-6 py-3 text-center rounded-lg border border-solid bg-slate-800 border-slate-800 text-white cursor-pointer"
              >
                Next
              </div>
            )}
            {step === 3 && (
              <div
                onClick={handleSubmit}
                className="flex-1 px-6 py-3 text-center rounded-lg border border-solid bg-green-500 border-green-500 text-white cursor-pointer"
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
