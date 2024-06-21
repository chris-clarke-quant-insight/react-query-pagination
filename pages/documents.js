import React from "react";
import FullLayout from "../components/FullLayout";

function Page(props) {
    return (
    <FullLayout title="Documents" location="documents">
        <div>
            {JSON.stringify(props)}
        </div>
    </FullLayout>
    );
}

export default Page;