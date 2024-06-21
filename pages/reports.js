import React from "react";
import FullLayout from "../components/FullLayout";

function Page(props) {
    return (
    <FullLayout title="Reports" location="reports">
        <div>
            {JSON.stringify(props)}
        </div>
    </FullLayout>
    );
}

export default Page;