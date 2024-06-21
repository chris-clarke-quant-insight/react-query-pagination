import React, { useState, useEffect } from "react";
import FullLayout from "../components/FullLayout";
import { ModelsList } from "../components/ModelsList";

function Page() {
    const [data, setData] = useState([]);

    useEffect(() => {
      function fetchData() {
        try {
          const res = fetch(
              `/api/models/`
          ).then((response) =>{
            const newData = response.json();
            newData.then((data) => setData(data));
          });
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }, []);
  
    return (
    <FullLayout title="Team" location="team">
        <div className="result-box">
            {data ? 
            <ModelsList models={data} />
            : 
            "Loading..."
            }            
        </div>
    </FullLayout>
    );
}

export default Page;