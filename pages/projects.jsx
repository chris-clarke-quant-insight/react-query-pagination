import React from "react";
import FullLayout from "../components/FullLayout";
import { ProjectsIcon } from "../components/icons";

function Page(props) {
    return (
    <FullLayout title={<><ProjectsIcon />Projects</>} location="projects">
        <div>
            {JSON.stringify(props)}
        </div>
    </FullLayout>
    );
}

export default Page;