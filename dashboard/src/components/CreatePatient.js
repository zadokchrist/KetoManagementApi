import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";

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
  <div className="flex flex-col flex-1 text-base text-black whitespace-nowrap">
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

function CreatePatient() {
  const [plans, setPlans] = useState([]);

  const GetPlans = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}GetAllPlans`);
      setPlans(response.data);
    } catch (error) {
      if (error.response) {
        message.error(error.response.data);
      } else {
        message.error(error);
      }
    }
  };

  useEffect(() => {
    GetPlans();
  }, []);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = {
      ...formData,
      planId: formData.plan,
    };

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}AddPatient`, requestData);
      message.success(response.data);
    } catch (error) {
      if (error.response.status === 400) {
        message.error('Bad request. Please check the submitted data.');
      } else if (error.response.status === 500) {
        message.error('Server error. Please try again later.');
      } else {
        message.error(`Error: ${error.response.status}. ${error.response.data.message || 'Something went wrong.'}`);
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
      plan: plans.length > 0 ? plans[0].id : "",
      planStartDate: "",
      planEndDate: "",
      Attachment:""
    });
  };

  return (
    <section className="flex flex-col pt-3.5 pb-14 mx-8 mt-9 bg-white rounded-md border border-solid border-zinc-300 max-md:mr-2.5 max-md:max-w-full">
      <div className="flex flex-col items-end px-9 max-md:px-5 max-md:max-w-full">
        <h1 className="justify-center self-stretch py-5 text-xl font-medium text-black bg-white border-b border-solid border-neutral-400 max-md:max-w-full">
          Create a Patient
        </h1>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex gap-5 justify-between self-start mt-6 max-w-full text-base text-black w-[723px] max-md:flex-wrap">
            <div className="flex gap-5">
              <div className="flex-auto font-medium">Patient Details:</div>
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
            </div>
            <InputField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex gap-2 mt-6 max-md:flex-wrap">
            <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <div className="flex gap-5 max-w-full text-base text-black w-[396px]">
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
            </div>
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
          </div>
          <div className="flex gap-2 mt-8 text-base max-md:flex-wrap">
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
          <div className="mt-7 border-b border-solid border-neutral-400"></div>
          <div className="flex gap-5 mt-8 max-md:flex-wrap max-md:max-w-full">
            <div className="grow self-start text-base font-medium text-black">Health Status:</div>
            <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <div className="flex gap-2 px-px text-base text-black max-md:flex-wrap">
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
              </div>
              <div className="px-px mt-8 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
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
                    label="Medication"
                    name="medications"
                    value={formData.medications}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="px-px mt-8 max-md:max-w-full">
                <TextAreaField
                  label="Surgical History"
                  name="surgicalHistory"
                  value={formData.surgicalHistory}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2 self-end mt-7 max-md:flex-wrap">
            <SelectField
              label="Plan"
              options={plans}
              name="plan"
              value={formData.plan}
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
                <input type="file" id="fileUpload" className="mt-2.5" accept=".pdf,.doc,.xls,.docx" />
              </div>
            </div>
            <p className="self-center mt-3.5 ml-16 text-xs font-light text-red-700">
              Files should be in the format of <span className="font-bold">.pdf</span>,{" "}
              <span className="font-bold">.doc</span>, <span className="font-bold">.xls</span>
            </p>
            <div className="flex gap-5 justify-between self-end max-w-full w-[916px] max-md:flex-wrap">
              <button
                type="button"
                className="justify-center items-center self-end px-16 py-5 mt-20 font-semibold text-white whitespace-nowrap bg-red-700 rounded-lg max-md:px-5 max-md:mt-10"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="justify-center items-center self-end px-16 py-5 mt-20 font-semibold text-white whitespace-nowrap bg-blue-700 rounded-lg max-md:px-5 max-md:mt-10"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreatePatient;
