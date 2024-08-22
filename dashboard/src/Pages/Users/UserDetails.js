import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserDetails() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    dateOfBirth: "",
    gender: "",
    whatsappNumber: "",
    email: "",
    homeAddress: "",
    workAddress: "",
    currentBodyWeight: "",
    weightGoal: "",
    allergies: "",
    observations: "",
    surgicalHistory: "",
    medications: "",
    attachment: null,
    planId: 0,
    planStartDate: "",
    planEndDate: "",
  });

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

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async () => {
    const formDataToSend = new FormData();
    
    for (const key in formData) {
      if (formData[key] !== null && key !== 'attachment') {
        formDataToSend.append(key, formData[key]);
      }
    }
  
    // Append file details if a file is attached
    if (formData.attachment) {
      formDataToSend.append('attachment', formData.attachment);
      formDataToSend.append('attachmentName', formData.attachment.name); // File name
      formDataToSend.append('attachmentType', formData.attachment.type); // MIME type
    }
  
    // Log formData to console for debugging
    for (let [key, value] of formDataToSend.entries()) {
      console.log(`${key}: ${value}`);
    }
  
    try {
      await axios.post("http://45.56.109.230:5001/AddPatient", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/success");
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };
  

  return (
    <div
      className="flex overflow-hidden flex-col mx-auto w-full bg-green-200 max-w-[1310px] p-4"
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
                {/* Patient Information Fields */}
                <div className="flex flex-col w-full md:w-1/2 pr-4 mb-4">
                  <div className="flex flex-col w-full">
                    <div>Salutation</div>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                    />
                  </div>
                  <div className="flex flex-col w-full mt-4">
                    <div>First Name</div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                    />
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Last Name</div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                    />
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Gender</div>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                    >
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
                    <div>Email Address</div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                    />
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Date of Birth</div>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full md:w-1/2 pl-4 mb-4">
                  <div className="flex flex-col mt-4 w-full">
                    <div>Phone Number</div>
                    <input
                      type="text"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                    />
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Whatsapp Number</div>
                    <input
                      type="text"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                    />
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Home Address</div>
                    <input
                      type="text"
                      name="homeAddress"
                      value={formData.homeAddress}
                      onChange={handleChange}
                      className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                    />
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Work Address</div>
                    <input
                      type="text"
                      name="workAddress"
                      value={formData.workAddress}
                      onChange={handleChange}
                      className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-6 w-full">
                <button
                  onClick={nextStep}
                  className="px-8 py-3 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700"
                >
                  Next
                </button>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className="text-2xl font-bold text-slate-800">
                Health Status
              </div>
              <div className="flex flex-wrap mt-4 w-full text-slate-500">
                {/* Health Status Fields */}
                <div className="flex flex-col w-full md:w-1/2 pr-4 mb-4">
                  <div className="flex flex-col w-full">
                    <div>Current Body Weight</div>
                    <input
                      type="text"
                      name="currentBodyWeight"
                      value={formData.currentBodyWeight}
                      onChange={handleChange}
                      className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                    />
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Weight Goal</div>
                    <input
                      type="text"
                      name="weightGoal"
                      value={formData.weightGoal}
                      onChange={handleChange}
                      className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                    />
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Allergies</div>
                    <input
                      type="text"
                      name="allergies"
                      value={formData.allergies}
                      onChange={handleChange}
                      className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full md:w-1/2 pl-4 mb-4">
                  <div className="flex flex-col w-full">
                    <div>Observations</div>
                    <input
                      type="text"
                      name="observations"
                      value={formData.observations}
                      onChange={handleChange}
                      className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                    />
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Surgical History</div>
                    <input
                      type="text"
                      name="surgicalHistory"
                      value={formData.surgicalHistory}
                      onChange={handleChange}
                      className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                    />
                  </div>
                  <div className="flex flex-col mt-4 w-full">
                    <div>Medications</div>
                    <input
                      type="text"
                      name="medications"
                      value={formData.medications}
                      onChange={handleChange}
                      className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-6 w-full">
                <button
                  onClick={prevStep}
                  className="px-8 py-3 text-white bg-slate-600 rounded-lg shadow-md hover:bg-slate-700"
                >
                  Previous
                </button>
                <button
                  onClick={nextStep}
                  className="px-8 py-3 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700"
                >
                  Next
                </button>
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <div className="text-2xl mt-12 font-bold text-slate-800">Plan</div>
              <div className="flex flex-wrap mt-4 w-full text-slate-500">
                <div className="flex flex-col md:flex-row w-full">
                  <div className="flex flex-col w-full md:w-1/2 pr-4 mb-4">
                    <div className="flex flex-col w-full mb-4">
                      <div>Plan ID</div>
                      <input
                        type="number"
                        name="planId"
                        value={formData.planId}
                        onChange={handleChange}
                        className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <div>Plan Start Date</div>
                      <input
                        type="date"
                        name="planStartDate"
                        value={formData.planStartDate}
                        onChange={handleChange}
                        className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col w-full md:w-1/2 pl-4 mb-4">
                    <div className="flex flex-col w-full mb-4">
                      <div>Plan End Date</div>
                      <input
                        type="date"
                        name="planEndDate"
                        value={formData.planEndDate}
                        onChange={handleChange}
                        className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <div>Attachment</div>
                      <input
                        type="file"
                        name="attachment"
                        onChange={handleChange}
                        className="px-6 py-3 mt-2 w-full rounded-lg border border-solid bg-slate-100 border-slate-200"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-14 mb-8 w-full">
                <button
                  onClick={prevStep}
                  className="px-8 py-3 text-white bg-slate-600 rounded-lg shadow-md hover:bg-slate-700"
                >
                  Previous
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700"
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
