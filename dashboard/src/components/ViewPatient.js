import * as React from "react";

const HealthStatusCard = ({ icon, title, value, date, color }) => (
    <div className={`flex grow gap-5 justify-between p-4 w-full font-medium bg-white rounded-lg border border-${color} border-solid max-md:mt-5`}>
        <div className="flex flex-col">
            <img loading="lazy" src={icon} alt="" className="w-6 aspect-square" />
            <div className="mt-2 text-xs text-zinc-700">{title}</div>
            <div className="mt-2 text-xl text-black">{value}</div>
        </div>
        <div className="flex flex-col my-auto text-xs text-right whitespace-nowrap text-zinc-700">
            <img loading="lazy" src={`http://b.io/ext_${color === 'red-700' ? '18' : color === 'orange-500' ? '20' : '22'}-`} alt="" className={`self-end w-3.5 aspect-[1.08] fill-${color}`} />
            <div className="mt-10">{date}</div>
        </div>
    </div>
);

function ViewPatient() {
    const sidebarItems = [
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0b57e99810b0b3a2e7cebb0928fae4bc2e10ccebfb2bc0652a65ba1cfab83ca?apiKey=2b51dad425e04206847488420121dc35&", text: "Overview" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9e8b7c024349a18b261dcf242caa60021a7d04b57acead2c7590144bd7844e4?apiKey=2b51dad425e04206847488420121dc35&", text: "Appointments" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c1df1d68c818fc5c4a160483293cb08ed46eae6c1622dc51c70a0205c548a7c?apiKey=2b51dad425e04206847488420121dc35&", text: "My Patients", isActive: true },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef16d96d47ec2db10bf5a686b351ab6dbae8dc86a8e3bd0c23d8e95bad55b1d2?apiKey=2b51dad425e04206847488420121dc35&", text: "Payments" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cbfe3a8a5279031d3a1c72c0c46093c7cad3dca4a406c4a76e99479b3ea96dc7?apiKey=2b51dad425e04206847488420121dc35&", text: "Plans" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef338b430107e8bccd19b1caf2e355e1ec3f7c09e1332fb747b55f8d484d7f28?apiKey=2b51dad425e04206847488420121dc35&", text: "Meal Plans" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9b13ed486835f00f4dcca9eb005d2f0841332c444f03bbd18fe097c3d043cbf4?apiKey=2b51dad425e04206847488420121dc35&", text: "Settings" }
    ];

    const healthStatusData = [
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/91116734b0aa3e5c809efc222a1973a69a787beea1729436367cd7c3d5c8fee5?apiKey=2b51dad425e04206847488420121dc35&", title: "Initial Body Weight", value: "120 Kgs", date: "3/11/2023", color: "red-700" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2100b4a5bce6e0c9dbe4abf933d6b301284423e4c9659cfeb62c5c0f2deee6c0?apiKey=2b51dad425e04206847488420121dc35&", title: "Current Body Weight", value: "102 Kgs", date: "8/11/2023", color: "orange-500" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/84cc1abe50c6a2393426489cc8f18d979524320939bb0c2aaac3eefd418344c2?apiKey=2b51dad425e04206847488420121dc35&", title: "Body Weight Goal", value: "55 Kgs", date: "3/12/2023", color: "lime-700" }
    ];

    return (
        <>
            <div className="mx-7 mt-7 max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <section className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow items-center px-7 py-7 mx-auto w-full text-base font-medium text-black bg-white rounded-md border border-solid border-zinc-300 max-md:px-5 max-md:mt-3.5">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bd0afb2ef226137a216a5001d79cc32a803600be756b291638774b31daa56e0?apiKey=2b51dad425e04206847488420121dc35&" alt="Patricia Mutoni" className="max-w-full aspect-square w-[100px]" />
                            <h2 className="mt-2.5 text-2xl">Patricia Mutoni</h2>
                            <p className="mt-4 text-stone-500">38 Years- Female</p>
                            <div className="flex gap-5 justify-between self-stretch mt-6 text-xs font-light">
                                <div className="flex flex-col whitespace-nowrap">
                                    <div className="justify-center px-6 py-2 font-medium text-white bg-lime-700 rounded max-md:px-5">
                                        ACTIVE
                                    </div>
                                    <div className="flex gap-1 mt-5">
                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/355d7a7940f59d70a49e078c9b9507ac137778dc65c1288acd67f58e615514b3?apiKey=2b51dad425e04206847488420121dc35&" alt="" className="shrink-0 w-6 aspect-square" />
                                        <div className="my-auto">+256-709416733</div>
                                    </div>
                                    <div className="flex gap-1 mt-2.5">
                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4f63a24f0794ed39ff8e702579de965be4497ddf6f6a2742db4cb5d53e928e0?apiKey=2b51dad425e04206847488420121dc35&" alt="" className="shrink-0 w-5 aspect-square" />
                                        <div className="my-auto">+256-709416733</div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="justify-center self-end px-7 py-2 font-medium text-white whitespace-nowrap rounded bg-neutral-400 max-md:px-5">
                                        SILVER
                                    </div>
                                    <div className="flex gap-1 mt-5 whitespace-nowrap">
                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/89782b079366178dc1e86a19358e343eb553291968ed32437acd36df82c8ab8a?apiKey=2b51dad425e04206847488420121dc35&" alt="" className="shrink-0 w-6 aspect-square" />
                                        <a href="mailto:patmutoni@gmail.com" className="flex-auto my-auto underline">
                                            patmutoni@gmail.com
                                        </a>
                                    </div>
                                    <div className="flex gap-1 mt-1.5">
                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/99402929a1f57d49a1eaa1384b9fec2f195e49d00b42ba1d2acfce44db8aba23?apiKey=2b51dad425e04206847488420121dc35&" alt="" className="shrink-0 w-6 aspect-square" />
                                        <div className="flex-auto">Kira, Kampala</div>
                                    </div>
                                </div>
                            </div>
                            <button className="flex gap-2 self-stretch px-20 py-3 mx-8 mt-8 text-white bg-sky-900 rounded max-md:px-5 max-md:mx-2.5">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5c5711217882267737e5c97029fec22110c8263501d6668fa38d6aca2a73d89?apiKey=2b51dad425e04206847488420121dc35&" alt="" className="shrink-0 w-6 aspect-square" />
                                <span className="my-auto">Edit Patient</span>
                            </button>
                        </div>
                    </section>
                    <section className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-6 pt-7 pb-11 w-full bg-white rounded-md border border-solid border-zinc-300 max-md:px-5 max-md:mt-3.5 max-md:max-w-full">
                            <h3 className="text-base font-medium text-black max-md:max-w-full">
                                Health Status
                            </h3>
                            <div className="mt-5 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    {healthStatusData.map((data, index) => (
                                        <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                            <HealthStatusCard {...data} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <h4 className="mt-8 text-xs font-medium text-black max-md:max-w-full">
                                Observations
                            </h4>
                            <p className="mt-3 mr-9 text-base font-light leading-5 text-neutral-950 max-md:mr-2.5 max-md:max-w-full">
                                The patient is a well-developed, obese female with a BMI of 41.7 kg/m2. Her blood pressure is
                                150/95 mmHg and her heart rate is 90 beats per minute. Her lungs are clear to auscultation and
                                her heart rate is regular. Her abdomen is soft and non-tender.
                            </p>
                            <h4 className="mt-5 text-xs font-medium text-black max-md:max-w-full">
                                Allergies
                            </h4>
                            <p className="mt-2.5 text-base font-light text-neutral-950 max-md:max-w-full">
                                Lactose Intorerant
                            </p>
                            <h4 className="mt-6 text-xs font-medium text-black max-md:max-w-full">
                                Medication
                            </h4>
                            <p className="mt-3 text-base font-light text-neutral-950 max-md:max-w-full">
                                None
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <section className="flex flex-col py-6 mx-8 mt-4 bg-white rounded-md border border-solid border-zinc-300 max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-5 mr-9 ml-9 font-medium max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                    <h3 className="flex-auto self-start mt-4 text-xl text-black">
                        Visit History
                    </h3>
                    <button className="justify-center items-start px-10 py-4 text-xs text-white bg-sky-900 rounded max-md:px-5">
                        + Visit Details
                    </button>
                </div>
                <div className="flex gap-5 px-9 py-5 mt-6 w-full text-base font-medium text-white bg-sky-900 rounded max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
                        <div className="flex-auto">Appointment Date</div>
                        <div className="flex-auto">Weight recorded</div>
                        <div>Observations</div>
                    </div>
                    <div className="flex-auto">Issues presented by Patient</div>
                </div>
                <div className="flex z-10 gap-5 items-start pt-5 pr-20 pb-9 pl-8 w-full bg-white border-t border-b border-solid border-zinc-300 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-2.5 text-base font-medium text-black whitespace-nowrap">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b16804c30f081d51332b51b003edbe93b26b542b3085d08660b376611354987?apiKey=2b51dad425e04206847488420121dc35&" alt="" className="shrink-0 w-12 aspect-square" />
                        <div className="my-auto">5/11/2023</div>
                    </div>
                    <div className="mt-4 text-base font-medium text-zinc-700">
                        102 Kgs
                    </div>
                    <div className="flex-auto mt-3 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
                                <p className="text-base leading-5 text-zinc-700 max-md:mt-10">
                                    The patient's blood pressure is
                                    150/95 mmHg and her heart rate is 90 beats per minute. Her lungs are clear to auscultation and
                                    her heart rate is regular. Her abdomen is soft and non-tender.
                                </p>
                            </div>
                            <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                                <p className="text-base leading-5 text-zinc-700 max-md:mt-10">
                                    Stomach Upsets
                                    Soft stool
                                    Dizziness
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ViewPatient;