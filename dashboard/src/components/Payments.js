import React, { useState, useEffect } from "react";
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

// SelectField component
const SelectField = ({ label, options, value, onChange, name }) => (
  <div className="flex flex-col flex-1">
    <label className="text-base text-black">{label}</label>
    <select
      className="flex gap-5 justify-between px-4 py-3 mt-3.5 font-light bg-white rounded border border-solid border-neutral-400"
      value={value}
      onChange={onChange}
      name={name}
    >
      <option value="">Select {label}</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name || `${option.firstName} ${option.lastName}`}
        </option>
      ))}
    </select>
  </div>
);

function calculateAge(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

// CreatePaymentModal component
const CreatePaymentModal = ({ isOpen, onClose, formData, handleInputChange, fetchPayments, patients, plans }) => {
  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}AddPayment`, {
        patientId: formData.patientId,
        planId: formData.planId,
        tranRef: formData.tranRef,
        amount: formData.amount,
        paymentDate: formData.paymentDate,
      });
      fetchPayments(); // Refresh payment list after successful submission
      message.success('Payment added successfully.');
      onClose(); // Close the modal after successful submission
    } catch (error) {
      message.error(error.response?.data || "Failed to add payment.");
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
            <SelectField 
              label="Patient Name" 
              options={patients} 
              value={formData.patientId} 
              name="patientId" 
              onChange={handleInputChange} 
            />
            <InputField
              label="Amount Paid"
              name="amount"
              type="number"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder="Enter Amount"
            />
            <InputField
              label="Transaction Reference"
              name="tranRef"
              type="text"
              value={formData.tranRef}
              onChange={handleInputChange}
              placeholder="Enter Transaction Reference"
            />
            <SelectField 
              label="Plan" 
              options={plans} 
              value={formData.planId} 
              name="planId" 
              onChange={handleInputChange} 
            />
            <InputField
              label="Payment Date"
              name="paymentDate"
              type="date"
              value={formData.paymentDate}
              onChange={handleInputChange}
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

function Payments() {
  const [activeSidebarItem, setActiveSidebarItem] = useState("My Payments");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    patientId: "",
    planId: "",
    tranRef: "",
    amount: "",
    paymentDate: ""
  });
  const [patients, setPatients] = useState([]);
  const [plans, setPlans] = useState([]);
  const [payments, setPayments] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const location = useLocation();
  const navigate = useNavigate();

  const fetchPatients = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}GetAllPatients`);
      setPatients(response.data);
    } catch (error) {
      message.error(error.response?.data || "Failed to fetch patients.");
    }
  };

  const fetchPlans = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}GetAllPlans`);
      setPlans(response.data);
    } catch (error) {
      message.error(error.response?.data || "Failed to fetch plans.");
    }
  };

  const fetchPayments = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}GetPayments`);
      setPayments(response.data);
    } catch (error) {
      message.error(error.response?.data || "Failed to fetch payments.");
    }
  };

  useEffect(() => {
    fetchPatients();
    fetchPlans();
    fetchPayments();
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreatePayment = () => {
    setIsModalOpen(true);
  };

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to first page when changing rows per page
  };

  const filteredPayments = payments.filter(payment => 
    (payment.patient.firstName + " " + payment.patient.lastName).toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPayments.length / rowsPerPage);
  const currentPayments = filteredPayments.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <>
      <section className="flex flex-col py-5 mx-7 mt-6 bg-white rounded-md border border-solid border-zinc-300 max-md:mr-2 max-md:max-w-full">
        <div className="flex gap-4 mr-8 ml-8 text-black max-md:flex-wrap max-md:mr-2 max-md:max-w-full">
          <h1 className="flex-auto my-auto text-lg font-medium">All Payments</h1>
          <div className="flex gap-2 text-xs max-md:flex-wrap">
            <label htmlFor="fromDate" className="my-auto">
              From
            </label>
            <input
              type="date"
              id="fromDate"
              className="shrink-0 border border-gray-400 border-solid aspect-[2.27] w-[80px]"
              value={fromDate}
              onChange={handleFromDateChange}
            />
            <label htmlFor="toDate" className="my-auto">
              To
            </label>
            <input
              type="date"
              id="toDate"
              className="shrink-0 border border-gray-400 border-solid aspect-[2.27] w-[80px]"
              value={toDate}
              onChange={handleToDateChange}
            />
            <div className="flex gap-2 px-4 py-1.5 text-xs font-medium whitespace-nowrap bg-white rounded border border-gray-400 border-solid text-black text-opacity-60">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b1562477584b5936cbb0fc7dd02c1b631e705a404e27f682fda1f54feeaf435?apiKey=2b51dad425e04206847488420121dc35&"
                alt=""
                className="shrink-0 w-5 aspect-square"
              />
              <input
                type="text"
                placeholder="Search"
                className="flex-auto my-auto bg-transparent border-none outline-none"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <button
              className="justify-center px-12 py-3 text-xs font-medium text-white bg-sky-900 rounded max-md:px-4"
              onClick={handleCreatePayment}
            >
              + Add Payment
            </button>
          </div>
        </div>
        <table className="w-full mt-5 text-sm">
          <thead>
            <tr className="bg-sky-900 text-white">
              <th className="py-4 px-4 text-left">Patient Name</th>
              <th className="py-4 px-4 text-left">Amount Paid</th>
              <th className="py-4 px-4 text-left">Age</th>
              <th className="py-4 px-4 text-left">Plan</th>
              <th className="py-4 px-4 text-left">Plan Start date</th>
              <th className="py-4 px-4 text-left">Plan End Date</th>
              <th className="py-4 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentPayments.map((payment, index) => (
              <tr key={index} className="border-b border-zinc-300">
                <td className="py-4 px-4">
                  <div className="flex gap-2 items-center">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b16804c30f081d51332b51b003edbe93b26b542b3085d08660b376611354987?apiKey=2b51dad425e04206847488420121dc35&"
                      alt=""
                      className="shrink-0 w-10 aspect-square"
                      onClick={() => {
                        navigate("/layout", { state: { screen: "ViewPatient" } });
                      }}
                    />
                    <div>
                      <div>{payment.patient.firstName} {payment.patient.lastName}</div>
                      <div className="text-xs mt-1">{payment.paymentDate}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">{payment.amount}</td>
                <td className="py-4 px-4">{calculateAge(payment.patient.dateOfBirth)}</td>
                <td className="py-4 px-4">{payment.plan.name}</td>
                <td className="py-4 px-4">{payment.patient.subscriptions.startDate}</td>
                <td className="py-4 px-4">{payment.patient.subscriptions.endDate}</td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 text-xs text-white rounded ${
                      payment.patient.subscriptions.isActive === true ? "bg-lime-700" : "bg-red-700"
                    }`}
                  >
                    {payment.patient.subscriptions.isActive=== true ? "Active": "Inactive"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex gap-2 items-center self-end mt-7 mr-16 text-xs text-black text-opacity-50 max-md:mr-2">
          <div className="grow self-stretch my-auto">Rows per page:</div>
          <select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="border border-solid border-gray-400 px-2 py-1 rounded"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          <div className="flex gap-3 self-stretch my-auto">
            <div className="my-auto">{(currentPage - 1) * rowsPerPage + 1}-{currentPage * rowsPerPage} of {filteredPayments.length}</div>
            <button
              className="px-2 py-1 border border-solid border-gray-400 rounded"
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <button
              className="px-2 py-1 border border-solid border-gray-400 rounded"
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
        <CreatePaymentModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          formData={formData}
          handleInputChange={handleInputChange}
          fetchPayments={fetchPayments}
          patients={patients}
          plans={plans}
        />
      </section>
    </>
  );
}

export default Payments;
