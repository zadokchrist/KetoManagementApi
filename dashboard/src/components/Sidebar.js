import * as React from "react";
import { useState, useEffect } from "react";

const SidebarItem = ({ icon, text, isActive, onClick, isCollapsed }) => (
    <button
        className={`flex gap-3 px-6 py-2.5 w-full text-left ${isActive ? "text-white bg-sky-900" : "bg-white"
            } rounded max-md:px-4`}
        onClick={onClick}
    >
        <img loading="lazy" src={icon} alt="" className="shrink-0 w-5 aspect-square" />
        {!isCollapsed && <div className="flex-auto my-auto">{text}</div>}
    </button>
);

function Sidebar() {
    const [activeSidebarItem, setActiveSidebarItem] = useState("Overview");
    const [isNavCollapsed, setIsNavCollapsed] = useState(false);
    const sidebarItems = [
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1819fd3cb143f14d6259f115f0f0d392af2ff63444a86f1f98b1caaed74c28ce?apiKey=2b51dad425e04206847488420121dc35&", text: "Overview" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9e8b7c024349a18b261dcf242caa60021a7d04b57acead2c7590144bd7844e4?apiKey=2b51dad425e04206847488420121dc35&", text: "Appointments" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c03d63698aebc767c29196dab1820fa031a7d53696360e0ff7bc5c416697efb?apiKey=2b51dad425e04206847488420121dc35&", text: "My Patients" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef16d96d47ec2db10bf5a686b351ab6dbae8dc86a8e3bd0c23d8e95bad55b1d2?apiKey=2b51dad425e04206847488420121dc35&", text: "Payments" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cbfe3a8a5279031d3a1c72c0c46093c7cad3dca4a406c4a76e99479b3ea96dc7?apiKey=2b51dad425e04206847488420121dc35&", text: "Plans" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef338b430107e8bccd19b1caf2e355e1ec3f7c09e1332fb747b55f8d484d7f28?apiKey=2b51dad425e04206847488420121dc35&", text: "Meal Plans" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9b13ed486835f00f4dcca9eb005d2f0841332c444f03bbd18fe097c3d043cbf4?apiKey=2b51dad425e04206847488420121dc35&", text: "Settings" },
    ];

    const handleSidebarItemClick = (text) => {
        setActiveSidebarItem(text);
      };
    <>
        <aside
            className={`fixed top-0 left-0 h-screen ${isNavCollapsed ? "w-14" : "w-1/5"
                } bg-white overflow-y-auto transition-all duration-300 ease-in-out`}
        >
            <nav className="flex flex-col justify-center text-sm font-medium text-zinc-700">
                <div className="flex flex-col px-2 pb-16 w-full">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/86e28342e0e594beee478f67357d56ea3719bedef66076b332d50b0aa383f494?apiKey=2b51dad425e04206847488420121dc35&" alt="Logo" className="self-center w-36 max-w-full aspect-[1.09]" />
                    {sidebarItems.map((item, index) => (
                        <SidebarItem
                            key={index}
                            {...item}
                            isActive={item.text === activeSidebarItem}
                            onClick={() => handleSidebarItemClick(item.text)}
                            isCollapsed={isNavCollapsed}
                        />
                    ))}
                </div>
            </nav>
        </aside>
    </>

}

export default Sidebar;