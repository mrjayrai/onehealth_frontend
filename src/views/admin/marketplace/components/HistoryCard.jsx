// import React,{ useState,useEffect } from "react";
// import axios from "axios";
// import Nft2 from "assets/img/nfts/Nft2.png";
// import Nft1 from "assets/img/nfts/Nft1.png";
// import Nft3 from "assets/img/nfts/Nft3.png";
// import Nft4 from "assets/img/nfts/Nft4.png";
// import Nft5 from "assets/img/nfts/Nft5.png";
// import Nft6 from "assets/img/nfts/Nft6.png";

// // import { FaEthereum } from "react-icons/fa";
// import Card from "components/card";

// const HistoryCard = () => {
//   const [ historyData , setHistoryData ] = useState([]);

//   useEffect(() => {
//     // Make the API call here
//     // let data = localStorage.getItem('data');
//     // let email = JSON.parse(data);
//     // console.log(email.email);
//     let data = localStorage.getItem('data');
//     let data1 = JSON.parse(data);
//     console.log(data1.email);
//     const fetchInventory = async () => {
//       try {
//         const response = await axios.post('https://onehealth.onrender.com/getreqtran',{hospitalEmail : data1.email}); // Replace with the desired email
//         // setInventory(response.data); // Assuming the response contains inventory data in the desired format
//         setHistoryData(response.data[0]);
//         console.log(response.data[0]);
//       } catch (error) {
//         console.error('Error fetching inventory:', error);
//       }
//     };

//     // const fetchInventory1 = async () => {
//     //   try {
//     //     const response = await axios.get('https://onehealth.onrender.com/getrequests'); // Replace with the desired email
//     //     // setInventory(response.data); // Assuming the response contains inventory data in the desired format
//     //     setRequestsData(response.data);
//     //     console.log(response.data);
//     //   } catch (error) {
//     //     console.error('Error fetching inventory:', error);
//     //   }
//     // };

//     fetchInventory();
//     // fetchInventory1();
//   }, []);

//   // const HistoryData = [
//   //   {
//   //     image: Nft1,
//   //     title: "Colorful Heaven",
//   //     owner: "Mark Benjamin",
//   //     price: 0.4,
//   //     time: "30s",
//   //   },
//   //   {
//   //     image: Nft2,
//   //     title: "Abstract Colors",
//   //     owner: "Esthera Jackson",
//   //     price: 2.4,
//   //     time: "50m",
//   //   },
//   //   {
//   //     image: Nft3,
//   //     title: "ETH AI Brain",
//   //     owner: "Nick Wilson",
//   //     price: 0.3,
//   //     time: "20s",
//   //   },
//   //   {
//   //     image: Nft4,
//   //     title: "Swipe Circles",
//   //     owner: " Peter Will",
//   //     price: 0.4,
//   //     time: "4h",
//   //   },
//   //   {
//   //     image: Nft5,
//   //     title: "Mesh Gradients",
//   //     owner: "Will Smith",
//   //     price: 0.4,
//   //     time: "30s",
//   //   },
//   //   {
//   //     image: Nft6,
//   //     title: "3D Cubes Art",
//   //     owner: " Manny Gates",
//   //     price: 0.4,
//   //     time: "2m",
//   //   },
//   // ];

//   return (
//     <>
//     <Card extra={"mt-3 !z-5 overflow-hidden"}>
//       {/* HistoryCard Header */}
//       <div className="flex items-center justify-between rounded-t-3xl p-3">
//         <div className="text-lg font-bold text-navy-700 dark:text-white">
//           Recieved History
//         </div>
//         <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
//           See all
//         </button>
//       </div>

//       {/* History CardData */}

//       {historyData.map((data, index) => (
//         <div className="flex h-full w-full items-start justify-between bg-white px-3 py-[20px] hover:shadow-2xl dark:!bg-navy-800 dark:shadow-none dark:hover:!bg-navy-700">
//           <div className="flex items-center gap-3">
            
//             <div className="flex flex-col">
//               <h5 className="text-base font-bold text-navy-700 dark:text-white">
//                 {" "}
//                 {data}
//               </h5>
//               <p className="mt-1 text-sm font-normal text-gray-600">
//                 {" "}
//                 {data}{" "}
//               </p>
//             </div>
//           </div>

//           <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
//             {/* <div>
//               <FaEthereum />
//             </div> */}
//             <div className="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
//               <p> {} </p>
//               {data} 
//               {/* <p className="ml-1">ETH</p> */}
//             </div>
//             <div className="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
//               <p>{data}</p>
//               <p className="ml-1">ago</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </Card>

//     {/* Second Card */}
    
//     </>
//   );
// };

// export default HistoryCard;


import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "components/card";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(); // Modify this line as per your desired date format
};
const HistoryCard = () => {
  const [historyData, setHistoryData] = useState([]);
  const [historyData1, setHistoryData1] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = localStorage.getItem('data');
        let data1 = JSON.parse(data);
        console.log(data1.email);

        const response = await axios.post('https://onehealth.onrender.com/getreqtran', { hospitalEmail: data1.email });
        setHistoryData(response.data); // Update the state with the API response array
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching history data:', error);
      }
    };

    const fetchData1 = async () => {
      try {
        let data = localStorage.getItem('data');
        let data1 = JSON.parse(data);
        console.log(data1.email);

        const response = await axios.post('https://onehealth.onrender.com/getgtran', { hospitalEmail: data1.email });
        setHistoryData1(response.data); // Update the state with the API response array
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching history data:', error);
      }
    };

    fetchData();
    fetchData1();
  }, []);

  return (
    <>
      <Card extra={"mt-3 !z-5 overflow-hidden"}>
        <div className="flex items-center justify-between rounded-t-3xl p-3">
          <div className="text-lg font-bold text-navy-700 dark:text-white">
            Received History
          </div>
          {/* <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
            See all
          </button> */}
        </div>

        {historyData.map((data, index) => (
          <div key={index} className="flex h-full w-full items-start justify-between bg-white px-3 py-[20px] hover:shadow-2xl dark:!bg-navy-800 dark:shadow-none dark:hover:!bg-navy-700">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <h5 className="text-base font-bold text-navy-700 dark:text-white">
                  {data.requirementName}
                </h5>
                <p className="mt-1 text-sm font-normal text-gray-600">
                  Given by: {data.takenfrom}
                </p>
              </div>
            </div>

            <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
              <div className="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                {data.price}
              </div>
              <div className="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                <p>{formatDate(data.dateOfCompletion)}</p>
                {/* <p className="ml-1">ago</p> */}
              </div>
            </div>
          </div>
        ))}
      </Card>

      <Card extra={"mt-3 !z-5 overflow-hidden"}>
        <div className="flex items-center justify-between rounded-t-3xl p-3">
          <div className="text-lg font-bold text-navy-700 dark:text-white">
            Given History
          </div>
          {/* <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
            See all
          </button> */}
        </div>

        {historyData1.map((data, index) => (
          <div key={index} className="flex h-full w-full items-start justify-between bg-white px-3 py-[20px] hover:shadow-2xl dark:!bg-navy-800 dark:shadow-none dark:hover:!bg-navy-700">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <h5 className="text-base font-bold text-navy-700 dark:text-white">
                  {data.requirementName}
                </h5>
                <p className="mt-1 text-sm font-normal text-gray-600">
                Given to: {data.givento}
                </p>
              </div>
            </div>

            <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
              <div className="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                {data.price}
              </div>
              <div className="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                <p>{formatDate(data.dateOfCompletion)}</p>
                {/* <p className="ml-1">ago</p> */}
              </div>
            </div>
          </div>
        ))}
      </Card>
    </>
  );
};

export default HistoryCard;
