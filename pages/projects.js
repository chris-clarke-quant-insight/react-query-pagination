import React from "react";
import FullLayout from "../components/FullLayout";

function Page(props) {
    return (
    <FullLayout title="Projects" location="projects">
        <div>
            {JSON.stringify(props)}
        </div>
    </FullLayout>
    );
}

export default Page;