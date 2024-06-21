// import MiniCalendar from "components/calendar/MiniCalendar";
// import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import { useState, useEffect } from "react";
import axios from 'axios';
// import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import { columnsDataCheck1, columnsDataComplex } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
// import TaskCard from "views/admin/default/components/TaskCard";
// import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";

const Dashboard = () => {
  const [inventory, setInventory] = useState([]);

  const [ptra, setptra] = useState(0);
  const [ptr, setptr] = useState(0);
  const [ts, setts] = useState(0);
  const [pti, setpti] = useState(0);
  const [te, sette] = useState(0);
  const [wallet, setwallet] = useState(0);
  useEffect(() => {
    // Make the API call here
    let data = localStorage.getItem('data');
    let email = JSON.parse(data);
    // console.log(email.email);
    const fetchInventory = async () => {
      try {
        const response = await axios.post('https://onehealth.onrender.com/getinv', { email: email.email }); // Replace with the desired email
        setInventory(response.data); // Assuming the response contains inventory data in the desired format
        // console.log(response.data);
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    };

    const fetchInventory1 = async () => {
      try {
        const response = await axios.post('https://onehealth.onrender.com/getmdata', { email: email.email }); // Replace with the desired email
        // setInventory(response.data); // Assuming the response contains inventory data in the desired format
        setwallet(response.data[0].wallet);
        sette(response.data[0].totalExchange);
        setpti(response.data[0].patientIntake);
        setts(response.data[0].totalService);
        setptr(response.data[0].patientReferred);
        setptra(response.data[0].patientReferralAccepted);
        // console.log(response.data[0].wallet);
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    };

    fetchInventory();
    fetchInventory1();
  }, []);
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Patient Referral Accepted"}
          subtitle={ptra}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Patient Refferred"}
          subtitle={ptr}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Total Services"}
          subtitle={ts}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Patient Intake"}
          subtitle={pti}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Total Exchange"}
          subtitle={te}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Wallet"}
          subtitle={"₹"+wallet}
        />
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5">
        {/* <TotalSpent /> */}
        {/* md:grid-cols-2 */}
        {/* <WeeklyRevenue /> */}
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 ">
        {/* Check Table */}
        {/* xl:grid-cols-2 */}
        <div>
          <CheckTable
            columnsData={columnsDataCheck1}
            // tableData={tableDataCheck}
            tableData={inventory}
          />
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] ">
          <DailyTraffic />
          {/* <PieChartCard /> */}
          {/* md:grid-cols-2 */}
        </div>

        {/* Complex Table , Task & Calendar */}

        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />

        {/* Task chart & Calendar */}

        {/* <div className="grid grid-cols-1 gap-5 rounded-[20px] "> */}
          {/* <TaskCard /> */}
          {/* md:grid-cols-2 */}
          {/* <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
