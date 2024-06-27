import React from "react";
import FullLayout from "../components/FullLayout";

function Page(props) {
    return (
    <FullLayout title="Calendar" location="calendar">
        <div>
            {JSON.stringify(props)}
        </div>
    </FullLayout>
    );
}

export default Page;