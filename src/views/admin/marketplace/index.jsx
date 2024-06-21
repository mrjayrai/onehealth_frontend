import Banner from "./components/Banner";
import NFt2 from "assets/img/nfts/Nft2.png";
import NFt4 from "assets/img/nfts/Nft4.png";
// import NFt3 from "assets/img/nfts/Nft3.png";
// import NFt5 from "assets/img/nfts/Nft5.png";
// import NFt6 from "assets/img/nfts/Nft6.png";
// import avatar1 from "assets/img/avatars/avatar1.png";
// import avatar2 from "assets/img/avatars/avatar2.png";
// import avatar3 from "assets/img/avatars/avatar3.png";
import axios from 'axios';
import { useEffect, useState } from "react";

import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";
import HistoryCard from "./components/HistoryCard";
import TopCreatorTable from "./components/TableTopCreators";
import NftCard from "components/card/NftCard";
import ReqCard from "components/card/ReqCard";

const Marketplace = () => {
  const [urgentRequestsData, setUrgentRequestsData] = useState([]);
  const [RequestsData, setRequestsData] = useState([]);

  // let data;

  useEffect(() => {
    // Make the API call here
    // let data = localStorage.getItem('data');
    // let email = JSON.parse(data);
    // console.log(email.email);
    const fetchInventory = async () => {
      try {
        const response = await axios.get('https://onehealth.onrender.com/urgentrequests'); // Replace with the desired email
        // setInventory(response.data); // Assuming the response contains inventory data in the desired format
        setUrgentRequestsData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    };

    const fetchInventory1 = async () => {
      try {
        const response = await axios.get('https://onehealth.onrender.com/getrequests'); // Replace with the desired email
        // setInventory(response.data); // Assuming the response contains inventory data in the desired format
        setRequestsData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    };

    fetchInventory();
    fetchInventory1();
  }, []);


  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5  ">
      {/* xl:grid-cols-2 2xl:grid-cols-3 */}
      <div className="col-span-1 h-fit w-full xl:col-span-1 ">
      {/* 2xl:col-span-2 */}
        {/* NFt Banner */}
        <Banner />

        {/* NFt Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
           Urgent Requirement
          </h4>
          {/* <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Art
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Music
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Collection
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                <a href=" ">Sports</a>
              </a>
            </li>
          </ul> */}
        </div>

        {/* NFTs trending card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Abstract Colors"
            author="Esthera Jackson"
            price="0.91"
            image={NFt3}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="ETH AI Brain"
            author="Nick Wilson"
            price="0.7"
            image={NFt2}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Mesh Gradients"
            author="Will Smith"
            price="2.91"
            image={NFt4}
          /> */}

{urgentRequestsData.map((entry, index) => (
            <NftCard
              key={index}
              bidders={[]} // Assuming bidders information is not available in the API response
              title={entry.requests[0].equipment}
              author={entry.name}
              email = {entry.email}
              price={entry.requests[0].quantity} // Assuming quantity as the price
              des = {entry.requests[0].description}
              image={NFt2}
            />
          ))}
        </div>

        {/* Recenlty Added setion */}
        <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            Requirement
          </h4>
        </div>

        {/* Recently Add NFTs */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Abstract Colors"
            author="Esthera Jackson"
            price="0.91"
            image={NFt4}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="ETH AI Brain"
            author="Nick Wilson"
            price="0.7"
            image={NFt5}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Mesh Gradients"
            author="Will Smith"
            price="2.91"
            image={NFt6}
          /> */}

    {RequestsData.map((entry, index) => (
            <NftCard
              key={index}
              bidders={[]} // Assuming bidders information is not available in the API response
              title={entry.requests[0].equipment}
              author={entry.name}
              email = {entry.email}
              price={entry.requests[0].quantity} // Assuming quantity as the price
              des = {entry.requests[0].description}
              image={NFt2}
            />
          ))}
        </div>
      </div>

      {/* right side section */}

      <div className="mb-5 mt-5 flex items-center justify-center px-[26px]">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
           Add Requirement
          </h4>
          {/* <div className="grid grid-cols-1 gap-5 md:grid-cols-3"> */}
          {/* </div> */}
        </div>
        <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-5  items-center justify-center">
        <ReqCard
          title="Add Request"
          image={NFt4}
        />
        {/* Add more NftCard components here if needed */}
      </div>
    </div>
      <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        {/* <TopCreatorTable
          extra="mb-5"
          tableData={tableDataTopCreators}
          columnsData={tableColumnsTopCreators}
        /> */}
        <HistoryCard />
      </div>
    </div>
  );
};

export default Marketplace;
