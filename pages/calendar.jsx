import React from "react";
import FullLayout from "../components/FullLayout";
import { CalenderIcon } from "../components/icons";

function Page(props) {
    return (
    <FullLayout title={<div className="ab ls uh avj"><CalenderIcon /><h1>Calendar</h1></div>} location="calendar">
        <div>
            {JSON.stringify(props)}
        </div>
    </FullLayout>
    );
}

export default Page;