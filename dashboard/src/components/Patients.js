import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { message } from "antd";
import axios from "axios";

function Patients() {
  const [activeSidebarItem, setActiveSidebarItem] = useState("My Patients");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [patients, setPatients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const location = useLocation();
  const navigate = useNavigate();

  const fetchPatients = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}GetAllPatients`);
      setPatients(response.data);
      //message.success("Patients fetched successfully.");
    } catch (error) {
      message.error(error.response?.data || "Failed to fetch patients.");
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleSidebarItemClick = (text) => {
    setActiveSidebarItem(text);
  };

  const handleActivatingStatus = async (patid) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}UpdateSubscription?patid=` + patid);
      fetchPatients();
      message.success("Subscription status updated successfully.");
    } catch (error) {
      message.error(error.response?.data || "Failed to update subscription status.");
    }
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

  const handleCreatePatient = () => {
    navigate("/layout", { state: { screen: "Create Patient" } });
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); // Formats as "dd/mm/yyyy"
  }

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

  const filteredPatients = patients.filter((patient) =>
    `${patient.firstName} ${patient.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPatients.length / rowsPerPage);
  const currentPatients = filteredPatients.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to first page when changing rows per page
  };

  return (
    <>
      <section className="flex flex-col py-5 mx-7 mt-6 bg-white rounded-md border border-solid border-zinc-300 max-md:mr-2 max-md:max-w-full">
        <div className="flex gap-4 mr-8 ml-8 text-black max-md:flex-wrap max-md:mr-2 max-md:max-w-full">
          <h1 className="flex-auto my-auto text-lg font-medium">All Patients</h1>
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
              onClick={handleCreatePatient}
            >
              + Create Patient
            </button>
          </div>
        </div>
        <table className="w-full mt-5 text-sm">
          <thead>
            <tr className="bg-sky-900 text-white">
              <th className="py-4 px-4 text-left">Name</th>
              <th className="py-4 px-4 text-left">Contact</th>
              <th className="py-4 px-4 text-left">Age</th>
              <th className="py-4 px-4 text-left">Plan</th>
              <th className="py-4 px-4 text-left">Plan Start date</th>
              <th className="py-4 px-4 text-left">Plan End Date</th>
              <th className="py-4 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentPatients.map((patient, id) => (
              <tr key={id} className="border-b border-zinc-300">
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
                      <div>{patient.firstName} {patient.lastName}</div>
                      <div className="text-xs mt-1">{formatDate(patient.dateOfBirth)}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">{patient.mobileNumber}</td>
                <td className="py-4 px-4">{calculateAge(patient.dateOfBirth)}</td>
                <td className="py-4 px-4">{patient.plan.name}</td>
                <td className="py-4 px-4">{formatDate(patient.subscriptions.startDate)}</td>
                <td className="py-4 px-4">{formatDate(patient.subscriptions.endDate)}</td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 text-xs text-white rounded ${
                      patient.subscriptions.isActive ? "bg-lime-700" : "bg-red-700"
                    }`}
                    onClick={() => handleActivatingStatus(patient.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {patient.subscriptions.isActive ? "Active" : "Inactive"}
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
            className="border border-gray-400 rounded px-2 py-1"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
          <div className="flex gap-1 self-stretch text-black whitespace-nowrap">
            <div className="my-auto">{(currentPage - 1) * rowsPerPage + 1}-{Math.min(currentPage * rowsPerPage, filteredPatients.length)} of {filteredPatients.length}</div>
          </div>
          <div className="flex gap-3 self-stretch my-auto">
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="shrink-0 w-1.5 border-2 border-solid aspect-[0.57] border-black border-opacity-40 stroke-[2px] stroke-black stroke-opacity-40"
            >
              &#9664;
            </button>
            <button
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="shrink-0 w-1.5 border-2 border-solid aspect-[0.57] border-black border-opacity-40 stroke-[2px] stroke-black stroke-opacity-40"
            >
              &#9654;
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Patients;
