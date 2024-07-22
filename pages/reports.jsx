import React from "react";
import FullLayout from "../components/FullLayout";
import { ReportsIcon } from "../components/icons";

function Page(props) {
    return (
    <FullLayout title={<><ReportsIcon />Reports</>} location="reports">
        <div>
            {JSON.stringify(props)}
        </div>
    </FullLayout>
    );
}

export default Page;