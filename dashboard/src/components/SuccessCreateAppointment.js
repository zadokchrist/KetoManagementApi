import * as React from "react";
import { useState } from "react";

const MenuItem = ({ icon, text, isActive, onClick }) => (
  <button
    className={`flex gap-3.5 px-7 py-3 rounded w-full text-left ${
      isActive ? "text-white bg-sky-900" : "bg-white"
    } max-md:px-5 hover:bg-sky-100 transition-colors`}
    onClick={onClick}
  >
    <img loading="lazy" src={icon} alt="" className="shrink-0 w-6 aspect-square" />
    <div className="flex-auto my-auto">{text}</div>
  </button>
);

const menuItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0b57e99810b0b3a2e7cebb0928fae4bc2e10ccebfb2bc0652a65ba1cfab83ca?apiKey=2b51dad425e04206847488420121dc35&", text: "Overview" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2ef66ee4c388746731a3052838743fec848e058443804ac4cee6c62bb594139?apiKey=2b51dad425e04206847488420121dc35&", text: "Appointments" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c03d63698aebc767c29196dab1820fa031a7d53696360e0ff7bc5c416697efb?apiKey=2b51dad425e04206847488420121dc35&", text: "My Patients" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef16d96d47ec2db10bf5a686b351ab6dbae8dc86a8e3bd0c23d8e95bad55b1d2?apiKey=2b51dad425e04206847488420121dc35&", text: "Payments" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cbfe3a8a5279031d3a1c72c0c46093c7cad3dca4a406c4a76e99479b3ea96dc7?apiKey=2b51dad425e04206847488420121dc35&", text: "Plans" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef338b430107e8bccd19b1caf2e355e1ec3f7c09e1332fb747b55f8d484d7f28?apiKey=2b51dad425e04206847488420121dc35&", text: "Meal Plans" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9b13ed486835f00f4dcca9eb005d2f0841332c444f03bbd18fe097c3d043cbf4?apiKey=2b51dad425e04206847488420121dc35&", text: "Settings" },
];

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Booking Successful!</h2>
        <p className="mb-4">Your appointment has been booked successfully.</p>
        <button
          onClick={onClose}
          className="bg-sky-900 text-white px-4 py-2 rounded hover:bg-sky-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};

function SuccessCreateAppointment() {
  const [activeItem, setActiveItem] = useState("Appointments");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenuItemClick = (text) => {
    setActiveItem(text);
  };

  const handleBookingClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col grow justify-center text-base font-medium text-zinc-700">
      <nav className="flex flex-col px-2.5 pb-20 w-full bg-white">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/86e28342e0e594beee478f67357d56ea3719bedef66076b332d50b0aa383f494?apiKey=2b51dad425e04206847488420121dc35&"
          alt="Logo"
          className="self-center w-40 max-w-full aspect-[1.09] mb-4"
        />
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            {...item}
            isActive={activeItem === item.text}
            onClick={() => handleMenuItemClick(item.text)}
          />
        ))}
      </nav>
      <div className="mt-8 text-center">
        <button
          onClick={handleBookingClick}
          className="bg-sky-900 text-white px-6 py-3 rounded-lg hover:bg-sky-800 transition-colors"
        >
          Book Appointment
        </button>
      </div>
      <SuccessModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default SuccessCreateAppointment;