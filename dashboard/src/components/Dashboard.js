import * as React from "react";
import { useState, useEffect } from "react";

const SidebarItem = ({ icon, text, isActive, onClick, isCollapsed }) => (
  <button
    className={`flex gap-3 px-6 py-2.5 w-full text-left ${
      isActive ? "text-white bg-sky-900" : "bg-white"
    } rounded max-md:px-4`}
    onClick={onClick}
  >
    <img loading="lazy" src={icon} alt="" className="shrink-0 w-5 aspect-square" />
    {!isCollapsed && <div className="flex-auto my-auto">{text}</div>}
  </button>
);

const StatCard = ({ icon, title, value, subtitle, bgColor }) => (
  <div
    className={`flex flex-col grow px-5 pt-3 pb-6 mx-auto w-full font-bold text-white ${bgColor} rounded-lg max-md:px-3 max-md:mt-5`}
  >
    <div className="flex gap-3 text-sm">
      <img loading="lazy" src={icon} alt="" className="shrink-0 w-8 aspect-square" />
      <div className="flex-auto my-auto">{title}</div>
    </div>
    <div className="mt-2 text-2xl">{value}</div>
    {subtitle && <div className="self-start mt-3 text-xs font-medium">{subtitle}</div>}
  </div>
);

const AppointmentItem = ({
  name,
  date,
  gender,
  age,
  contact,
  appointmentDate,
  status,
  onAccept,
  onReject,
}) => (
  <tr className="border-t border-b border-solid border-zinc-300">
    <td className="px-6 py-4">
      <div className="flex gap-2 items-center">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b16804c30f081d51332b51b003edbe93b26b542b3085d08660b376611354987?apiKey=2b51dad425e04206847488420121dc35&" alt="" className="shrink-0 w-10 aspect-square" />
        <div>
          <div className="text-sm font-medium">{name}</div>
          <div className="mt-2 text-xs text-zinc-700">{date}</div>
        </div>
      </div>
    </td>
    <td className="px-6 py-4 text-sm text-zinc-700">{gender}</td>
    <td className="px-6 py-4 text-sm text-zinc-700">{age}</td>
    <td className="px-6 py-4 text-sm text-zinc-700">{contact}</td>
    <td className="px-6 py-4 text-sm text-zinc-700">{appointmentDate}</td>
    <td className="px-6 py-4">
      {status === "CONFIRMED" ? (
        <div className="px-4 py-2 text-xs text-white bg-lime-700 rounded inline-block">
          {status}
        </div>
      ) : (
        <div className="flex gap-4">
          <button
            onClick={onAccept}
            className="w-7 h-7 border border-sky-900 border-solid rounded-full flex items-center justify-center"
          >
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/07326a30f5ce1b778854724ee103dc62ea42c9cb1b5848c10a20e5f0d748cd06?apiKey=2b51dad425e04206847488420121dc35&" alt="Accept" className="w-4 h-4" />
          </button>
          <button
            onClick={onReject}
            className="w-7 h-7 border border-red-700 border-solid rounded-full flex items-center justify-center"
          >
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa092960644e66eac9677cba92572092693c43d5cc2a01de90b9fd08d62fc6a2?apiKey=2b51dad425e04206847488420121dc35&" alt="Reject" className="w-4 h-4" />
          </button>
        </div>
      )}
    </td>
  </tr>
);

const UpcomingAppointment = ({ name, type, time }) => (
  <div className="flex gap-4 justify-between px-7 py-4 w-full bg-white border-t border-b border-solid border-zinc-300 max-md:px-4">
    <div className="flex gap-1">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/129af06416ec9af1a499b1515de57b9deb4c575daef1ae7f30cfa6b69e7e2e72?apiKey=2b51dad425e04206847488420121dc35&" alt="" className="shrink-0 w-10 aspect-square" />
      <div className="flex flex-col self-start mt-2">
        <div className="text-sm text-black">{name}</div>
        <div className="mt-2 text-xs text-zinc-700">{type}</div>
      </div>
    </div>
    <div className="my-auto text-xs text-zinc-700">{time}</div>
  </div>
);

function Dashboard() {
  const [activeSidebarItem, setActiveSidebarItem] = useState("Overview");
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [appointments, setAppointments] = useState([
    {
      name: "Patrick Mwebaze",
      date: "2/11/2023",
      gender: "Male",
      age: "45",
      contact: "0782750415",
      appointmentDate: "3/11/2023",
    },
    {
      name: "Mercy Tayebwa",
      date: "2/11/2023",
      gender: "Female",
      age: "28",
      contact: "0752750086",
      appointmentDate: "5/11/2023",
    },
    {
      name: "Sansei Ajuna",
      date: "2/11/2023",
      gender: "Female",
      age: "32",
      contact: "0702750316",
      appointmentDate: "6/11/2023",
      status: "CONFIRMED",
    },
    {
      name: "Bluera Benedict",
      date: "2/11/2023",
      gender: "Male",
      age: "30",
      contact: "0782750415",
      appointmentDate: "6/11/2023",
    },
  ]);

  const sidebarItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1819fd3cb143f14d6259f115f0f0d392af2ff63444a86f1f98b1caaed74c28ce?apiKey=2b51dad425e04206847488420121dc35&", text: "Overview" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9e8b7c024349a18b261dcf242caa60021a7d04b57acead2c7590144bd7844e4?apiKey=2b51dad425e04206847488420121dc35&", text: "Appointments" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c03d63698aebc767c29196dab1820fa031a7d53696360e0ff7bc5c416697efb?apiKey=2b51dad425e04206847488420121dc35&", text: "My Patients" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef16d96d47ec2db10bf5a686b351ab6dbae8dc86a8e3bd0c23d8e95bad55b1d2?apiKey=2b51dad425e04206847488420121dc35&", text: "Payments" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cbfe3a8a5279031d3a1c72c0c46093c7cad3dca4a406c4a76e99479b3ea96dc7?apiKey=2b51dad425e04206847488420121dc35&", text: "Plans" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef338b430107e8bccd19b1caf2e355e1ec3f7c09e1332fb747b55f8d484d7f28?apiKey=2b51dad425e04206847488420121dc35&", text: "Meal Plans" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9b13ed486835f00f4dcca9eb005d2f0841332c444f03bbd18fe097c3d043cbf4?apiKey=2b51dad425e04206847488420121dc35&", text: "Settings" },
  ];

  const statCards = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f2a5fd87b7cb3006a683c71f6a41634814a1d19efadddbed9314c0118ec282d?apiKey=2b51dad425e04206847488420121dc35&", title: "No of Patients", value: "2,502", bgColor: "bg-sky-900" },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/215fb91423c8c9edd5d2e5134e5b9771ba44a64949560a2c5a75d4d37b8f3fa7?apiKey=2b51dad425e04206847488420121dc35&",
      title: "Appointments",
      value: "16,781",
      subtitle: "(First Time)",
      bgColor: "bg-orange-500",
    },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/91947c787f13f7658668857d3035b19e5a4036e2338d93c997ab3daed152577e?apiKey=2b51dad425e04206847488420121dc35&", title: "Amount Collected", value: "UGX 382M", bgColor: "bg-lime-500" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/46121b114e5db291f8f7f6a64faf630aa861343d0260587c2f74ebd5703f8063?apiKey=2b51dad425e04206847488420121dc35&", title: "Meal Plans", value: "1,210", bgColor: "bg-cyan-500" },
  ];

  const upcomingAppointments = [
    { name: "James Rutahigwa", type: "First Time", time: "Ongoing" },
    { name: "Moses Ssenono", type: "First Time", time: "4:30 pm" },
    { name: "Maggie Nankya", type: "First Time", time: "3/11/2023" },
    { name: "Janice Kansiime", type: "Follow up", time: "3/11/2023" },
    { name: "Shina Bananura", type: "First Time", time: "4/11/2023" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsNavCollapsed(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSidebarItemClick = (text) => {
    setActiveSidebarItem(text);
  };

  const handleAcceptAppointment = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index].status = "CONFIRMED";
    setAppointments(updatedAppointments);
  };

  const handleRejectAppointment = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
  };

  const toggleNav = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <>
    <section className="mt-6 mr-6 ml-8 max-md:mr-2 max-md:max-w-full">
            <div className="flex gap-4 max-md:flex-col max-md:gap-0">
              {statCards.map((card, index) => (
                <div key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <StatCard {...card} />
                </div>
              ))}
            </div>
          </section>
          <section className="mt-6 mr-6 ml-8 max-md:mr-2 max-md:max-w-full">
            <div className="flex gap-4 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow pt-8 pb-16 w-full bg-white rounded-md border border-solid border-zinc-300 max-md:mt-6 max-md:max-w-full">
                  <div className="flex gap-4 self-center max-w-full font-medium w-[680px] max-md:flex-wrap">
                    <h2 className="flex-auto text-lg text-black">Recent Appointment Requests</h2>
                    <button className="text-sm text-sky-900">View All &gt;</button>
                  </div>
                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-sky-900 text-white text-sm font-medium">
                          
                          <th className="px-6 py-4 justify-center">Name</th>
                          <th className="px-6 py-4 justify-center">Gender</th>
                          <th className="px-6 py-4 justify-center">Age</th>
                          <th className="px-6 py-4 justify-center">Contact</th>
                          <th className="px-6 py-4 justify-center">Appointment Date</th>
                          <th className="px-6 py-4 justify-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {appointments.map((appointment, index) => (
                          <AppointmentItem
                            key={index}
                            {...appointment}
                            onAccept={() => handleAcceptAppointment(index)}
                            onReject={() => handleRejectAppointment(index)}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-4 w-[30%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow py-10 mx-auto w-full font-medium bg-white rounded-md border border-solid border-zinc-300 max-md:mt-6">
                  <h2 className="self-start ml-7 text-lg text-black max-md:ml-2">Upcoming Appointments</h2>
                  {upcomingAppointments.map((appointment, index) => (
                    <UpcomingAppointment key={index} {...appointment} />
                  ))}
                  <button className="justify-center px-7 py-4 mx-4 mt-5 text-sm text-white bg-sky-900 rounded max-md:px-4 max-md:mx-2">
                    View all Upcoming Appointments
                  </button>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}

export default Dashboard;