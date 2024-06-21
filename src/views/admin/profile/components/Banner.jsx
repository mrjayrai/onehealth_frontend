import React from "react";
import axios from "axios";
// import avatar from "assets/img/avatars/avatar11.png";
import banner from "assets/img/profile/banner.png";
import Card from "components/card";
import avatar1 from "assets/img/avatars/babu.jpg";
import { useState,useEffect } from "react";

const Banner = () => {
  const [ name, setname ] = React.useState(null);
  const [ts, setts] = useState(0);
  const [pti, setpti] = useState(0);
  const [te, sette] = useState(0);
  // let data = localStorage.getItem('data');
  // let data1 = JSON.parse(data);

  useEffect(() => {
    let data = localStorage.getItem('data');
    let data1 = JSON.parse(data);
    setname(data1.name);


    const fetchInventory1 = async () => {
      try {
        const response = await axios.post('https://onehealth.onrender.com/getmdata', { email: data1.email }); // Replace with the desired email
        sette(response.data[0].totalExchange);
        setpti(response.data[0].patientIntake);
        setts(response.data[0].totalService);
        // console.log(response.data[0].wallet);
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    };

   fetchInventory1();
  }, []);

  return (
    <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          <img className="h-full w-full rounded-full" src={avatar1} alt="" />
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {name}
        </h4>
        <p className="text-base font-normal text-gray-600">Hospital Management</p>
      </div>

      {/* Post followers */}
      <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">{ts}</p>
          <p className="text-sm font-normal text-gray-600">Service</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            {pti}
          </p>
          <p className="text-sm font-normal text-gray-600">Patient Intake</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            {te}
          </p>
          <p className="text-sm font-normal text-gray-600">Total Exchange</p>
        </div>
      </div>
    </Card>
  );
};

export default Banner;
