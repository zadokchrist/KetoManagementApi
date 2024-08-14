import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

// InputField component
const InputField = ({ label, name, type = "text", value, onChange, placeholder }) => (
  <div className="flex flex-col flex-1 mb-4">
    <label className="text-base text-black">{label}</label>
    <input
      type={type}
      name={name}
      className="shrink-0 mt-3.5 bg-white rounded border border-solid border-neutral-400 h-[45px] px-2"
      aria-label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

// PlanCard component
const PlanCard = ({ color, title, count }) => (
  <div className="flex flex-col flex-1 pt-4 pb-9 bg-white rounded-lg border border-solid shadow-sm border-zinc-300">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0872aba5894336eca08e1779d1a4434e87768d37c5ec249e009acf9ac352a95?apiKey=2b51dad425e04206847488420121dc35&"
      alt=""
      className="self-end w-6 aspect-square max-md:mr-2.5"
    />
    <div className="flex flex-col pr-3 pl-6 max-md:pl-5">
      <div className={`text-xl ${color}`}>{title}</div>
      <div className="flex gap-4 mt-5 max-md:mr-1.5">
        <div className="text-4xl text-sky-900">{count}</div>
        <div className="self-start mt-5 text-xs text-zinc-700">Active Plans</div>
      </div>
    </div>
  </div>
);

// CreatePlanModal component
const CreatePlanModal = ({ isOpen, onClose, formData, handleInputChange, fetchSubscriptionStats }) => {
  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}AddPlan`, {
        name: formData.planName,
        price: formData.planPrice
      });
      fetchSubscriptionStats();
      message.success(response.data);

      // Close the modal after successful submission
      onClose();
    } catch (error) {
      message.error(error.response.data);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-300 rounded-full p-2"
        >
          X
        </button>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 self-start mt-6 max-w-full text-base text-black w-[723px] max-md:flex-wrap">
            <InputField
              label="Plan Name"
              name="planName"
              value={formData.planName}
              onChange={handleInputChange}
              placeholder="Enter Plan Name"
            />
            <InputField
              label="Plan Price"
              name="planPrice"
              value={formData.planPrice}
              onChange={handleInputChange}
              placeholder="Enter Plan Price"
            />
            <button
              type="submit"
              className="bg-sky-900 text-white px-4 py-2 rounded hover:bg-sky-800 self-center mt-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Main Plans component
function Plans() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [statistics, setStatistics] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    planName: "",
    planPrice: ""
  });

  const fetchSubscriptionStats = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}GetSubscriptionStatistics`);
      setStatistics(response.data);
    } catch (error) {
      if (error.response) message.error(error.response.data);
    }
  };

  useEffect(() => {
    fetchSubscriptionStats();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreatePlan = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="flex gap-4 mx-9 mt-7 font-medium max-md:flex-wrap max-md:mr-2.5">
        {statistics.map((stat, index) => (
          <PlanCard key={index} color="text-sky-900" title={stat.planName} count={stat.activeSubscriptions} />
        ))}
      </section>
      <section className="flex flex-col px-px pt-6 pb-px mx-8 mt-5 bg-white rounded-md border border-solid border-zinc-300 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 px-0.5 mr-9 ml-9 text-black max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
          <h2 className="flex-auto my-auto text-xl font-medium">Performance of all Plans</h2>
          <form className="flex gap-2.5 text-xs max-md:flex-wrap max-md:max-w-full">
            <label htmlFor="fromDate" className="my-auto">From:</label>
            <input
              type="date"
              id="fromDate"
              className="shrink-0 h-10 bg-white rounded border border-solid border-zinc-300 w-[100px]"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
            <label htmlFor="toDate" className="my-auto">To:</label>
            <input
              type="date"
              id="toDate"
              className="shrink-0 h-10 bg-white rounded border border-solid border-zinc-300 w-[100px]"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
            <button
              type="button"
              className="justify-center items-start px-14 py-4 font-medium text-white bg-sky-900 rounded max-md:px-5"
              onClick={handleCreatePlan}
            >
              + Create Plan
            </button>
          </form>
        </div>
        <table className="w-full mt-6 text-base font-medium">
          <thead>
            <tr className="bg-sky-900 text-white">
              <th className="px-4 py-2 text-left">Plan ID</th>
              <th className="px-4 py-2 text-left">Plan Name</th>
              <th className="px-4 py-2 text-left">No of Subscriptions</th>
              <th className="px-4 py-2 text-left">Amount made in subscriptions</th>
              <th className="px-4 py-2 text-left">No of Cancellations</th>
              <th className="px-4 py-2 text-left">Number of Renewals</th>
            </tr>
          </thead>
          <tbody>
            {statistics.map((plan, planId) => (
              <tr key={planId} className="border-t border-b border-solid border-zinc-300">
                <td className="px-4 py-4 text-black">{plan.planId}</td>
                <td className="px-4 py-4 text-black">{plan.planName}</td>
                <td className="px-4 py-4 text-black">{plan.totalSubscriptions}</td>
                <td className="px-4 py-4 text-black">{plan.amountGenerated}</td>
                <td className="px-4 py-4 text-black">{plan.inactiveSubscriptions}</td>
                <td className="px-4 py-4 text-black">{plan.activeSubscriptions}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <CreatePlanModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          formData={formData}
          handleInputChange={handleInputChange}
          fetchSubscriptionStats={fetchSubscriptionStats}  // Pass the fetch function here
        />
      </section>
    </>
  );
}

export default Plans;
