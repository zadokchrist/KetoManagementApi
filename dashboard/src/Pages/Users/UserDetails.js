import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";

// Components for form fields
const InputField = ({ label, type = "text", value, onChange, placeholder, name }) => (
  <div className="flex flex-col flex-1">
    <label className="text-base text-black">{label}</label>
    <input
      type={type}
      className="shrink-0 mt-3.5 bg-white rounded border border-solid border-neutral-400 h-[45px] px-2"
      aria-label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
    />
  </div>
);

const TextAreaField = ({ label, value, onChange, name }) => (
  <div className="flex flex-col flex-1 text-base text-black">
    <label>{label}</label>
    <textarea
      className="shrink-0 mt-3.5 bg-white rounded border border-solid border-neutral-400 h-[90px] p-2"
      aria-label={label}
      value={value}
      onChange={onChange}
      name={name}
    />
  </div>
);

const SelectField = ({ label, options, value, onChange, name }) => (
  <div className="flex flex-col flex-1">
    <label className="text-base text-black">{label}</label>
    <select
      className="flex gap-5 justify-between px-4 py-3 mt-3.5 font-light bg-white rounded border border-solid border-neutral-400"
      value={value}
      onChange={onChange}
      name={name}
    >
      {options.map((option, index) => (
        <option key={index} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

function UserDetails() {
  const [plans, setPlans] = useState([]);
  const [file, setFile] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    title: "Mr",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    dateOfBirth: "",
    gender: "Female",
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
    attachmentName: "",
    planId: plans.length > 0 ? plans[0].id : "",
    planStartDate: "",
    planEndDate: "",
    Attachment: ""
  });

  useEffect(() => {
    const GetPlans = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}GetAllPlans`);
        setPlans(response.data);
      } catch (error) {
        if (error.response) {
          message.error(error.response.data);
        } else {
          message.error(error.message);
        }
      }
    };
    GetPlans();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFormData(prevData => ({
      ...prevData,
      Attachment: e.target.files[0]?.name || ""
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      message.error('Attachment file is required.');
      return;
    }

    const requestData = new FormData();
    Object.keys(formData).forEach(key => requestData.append(key, formData[key]));
    requestData.append('file', file);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}AddPatient`, requestData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      message.success(response.data);
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        if (status === 400) {
          message.error('Bad request. Please check the submitted data.');
        } else if (status === 500) {
          message.error('Server error. Please try again later.');
        } else {
          message.error(`Error: ${status}. ${data.message || 'Something went wrong.'}`);
        }
      } else {
        message.error('An error occurred.');
      }
    }
  };

  const handleCancel = () => {
    setFormData({
      title: "Mr",
      firstName: "",
      lastName: "",
      mobileNumber: "",
      dateOfBirth: "",
      gender: "Female",
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
      attachmentName: "",
      planId: plans.length > 0 ? plans[0].id : "",
      planStartDate: "",
      planEndDate: "",
      Attachment: ""
    });
    setFile(null);
    setActiveStep(0);
  };

  const steps = [
    {
      title: "Patient Details",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <SelectField
              label="Title"
              options={[{ id: "Mr", name: "Mr" }, { id: "Mrs", name: "Mrs" }]}
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
            <InputField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <InputField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <InputField
              label="Mobile Number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              placeholder="+256"
            />
            <InputField
              label="Date of Birth"
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
            />
            
          </div>
          <div>
          <SelectField
              label="Gender"
              options={[
                { id: "Female", name: "Female" },
                { id: "Male", name: "Male" },
                { id: "Other", name: "Other" },
              ]}
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            />
            <InputField
              label="Whatsapp Number"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleInputChange}
              placeholder="+256"
            />
            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <InputField
              label="Home Address"
              name="homeAddress"
              value={formData.homeAddress}
              onChange={handleInputChange}
            />
            <InputField
              label="Work Address"
              name="workAddress"
              value={formData.workAddress}
              onChange={handleInputChange}
            />
          </div>
        </div>
      )
    },
    {
      title: "Health Status",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <InputField
              label="Current Body weight"
              name="currentBodyWeight"
              value={formData.currentBodyWeight}
              onChange={handleInputChange}
            />
            <InputField
              label="Weight Goal"
              name="weightGoal"
              value={formData.weightGoal}
              onChange={handleInputChange}
            />
            <TextAreaField
              label="Medication"
              name="medications"
              value={formData.medications}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <TextAreaField
              label="Allergies/Food Exclusions"
              name="allergies"
              value={formData.allergies}
              onChange={handleInputChange}
            />
            <TextAreaField
              label="Observations"
              name="observations"
              value={formData.observations}
              onChange={handleInputChange}
            />
            
            <TextAreaField
              label="Surgical History"
              name="surgicalHistory"
              value={formData.surgicalHistory}
              onChange={handleInputChange}
            />
          </div>
        </div>
      )
    },
    {
      title: "Plan and Attachments",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <SelectField
              label="Plan"
              options={plans}
              name="planId"
              value={formData.planId}
              onChange={handleInputChange}
            />
            <InputField
              label="Plan Start Date"
              type="date"
              name="planStartDate"
              value={formData.planStartDate}
              onChange={handleInputChange}
            />
            <InputField
              label="Plan End Date"
              type="date"
              name="planEndDate"
              value={formData.planEndDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div className="flex flex-col px-9 mt-9 text-base max-md:px-5 max-md:max-w-full">
              <div className="mt-8 border-b border-solid border-neutral-400"></div>
              <div className="flex gap-5 mt-8 max-w-full text-black w-[687px] max-md:flex-wrap">
                <div className="flex gap-5 self-start">
                  <div className="font-medium">Attachments:</div>
                </div>
                <div className="flex-auto">
                  <label htmlFor="fileUpload" className="text-base text-black">
                    Select Attachment to upload
                  </label>
                  <input
                    type="file"
                    id="fileUpload"
                    className="mt-2.5"
                    accept=".pdf,.doc,.xls,.docx"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <p className="self-center mt-3.5 ml-16 text-xs font-light text-red-700">
                Files should be in the format of <span className="font-bold">.pdf</span>,{" "}
                <span className="font-bold">.doc</span>, <span className="font-bold">.xls</span>
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section
      className="flex flex-col pt-3.5 pb-14 mx-8 mt-9 bg-white rounded-md border border-solid border-zinc-300 max-md:mr-2.5 max-md:max-w-full"
      style={{
        backgroundImage:
          "url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL3Jhd3BpeGVsb2ZmaWNlNF9zb2Z0X2xpZ2h0X21pbmltYWxfdG9uZXNfY2xvc2VfdXBfb2ZfYV90cmVlX21hY185NDYxNmVmYi1jNGVhLTRiMzMtYWFjMC1iZmY0NWI3ZWIwY2RfMS5qcGc.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex">
        <div className="w-1/4 bg-gray-100 p-4">
          <h2 className="text-xl font-bold">Steps</h2>
          <ul>
            {steps.map((step, index) => (
              <li
                key={index}
                className={`cursor-pointer p-2 ${index === activeStep ? "bg-blue-500 text-white" : "bg-white text-black"}`}
                onClick={() => setActiveStep(index)}
              >
                {step.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4 p-4">
          <h1 className="text-xl font-medium mb-4">{steps[activeStep].title}</h1>
          <form onSubmit={handleSubmit} className="w-full">
            {steps[activeStep].content}
            <div className="flex gap-5 justify-between self-end max-w-full mt-8">
              <button
                type="button"
                className="px-4 py-2 bg-red-700 text-white rounded"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <div className="flex gap-4">
                {activeStep > 0 && (
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-500 text-white rounded"
                    onClick={() => setActiveStep(activeStep - 1)}
                  >
                    Back
                  </button>
                )}
                {activeStep < steps.length - 1 ? (
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-700 text-white rounded"
                    onClick={() => setActiveStep(activeStep + 1)}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-700 text-white rounded"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default UserDetails;
