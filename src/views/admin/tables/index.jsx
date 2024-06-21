import CheckTable from "./components/CheckTable";
import CheckTable3 from "./components/CheckTable3";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
  servHosp,
} from "./variables/columnsData";
// import tableDataDevelopment from "./variables/tableDataDevelopment.json";
import { columnsDataCheck1 } from "../default/variables/columnsData";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataColumns from "./variables/tableDataColumns.json";
import tableDataComplex from "./variables/tableDataComplex.json";
// import DevelopmentTable from "./components/DevelopmentTable";
import ColumnsTable from "./components/ColumnsTable";
import ComplexTable from "./components/ComplexTable";
import CheckTable1 from "views/admin/default/components/CheckTable";

const Tables = () => {
  const [inventory, setInventory] = useState([]);
  const [service, setService] = useState([]);
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

    const fetchServ = async() =>{
      try{
      const response = await axios.get('https://onehealth.onrender.com/getserv');
      setService(response.data);
      // console.log(response.data);
      } catch(error){
        console.error("Error Fetching Service",error);
      }
    };

    

    fetchInventory();
    fetchServ();
  }, []);

  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5">
      {/* md:grid-cols-2 */}
        {/* <DevelopmentTable
          columnsData={columnsDataDevelopment}
          tableData={tableDataDevelopment}
        /> */}
        {/* <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} /> */}
        <CheckTable3 columnsData={servHosp} tableData={service} />
      </div>

      <div className="mt-5 grid h-full grid-cols-1 gap-5 ">
      {/* md:grid-cols-2 */}
        {/* <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        /> */}

        {/* <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        /> */}
        <CheckTable1
            columnsData={columnsDataCheck1}
            // tableData={tableDataCheck}
            tableData={inventory}
          />
      </div>
    </div>
  );
};

export default Tables;
