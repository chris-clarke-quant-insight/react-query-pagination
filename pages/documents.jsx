import React from "react";
import FullLayout from "../components/FullLayout";
import { DocumentsIcon } from "../components/icons";

function Page(props) {
    return (
    <FullLayout title={<><DocumentsIcon />Documents</>} location="documents">
        <div>
            {JSON.stringify(props)}
        </div>
    </FullLayout>
    );
}

export default Page;