import React from "react";
import FullLayout from "../components/FullLayout";
import { ReportsIcon } from "../components/icons";
import { LinkButton } from "../components/LinkButton";

function Page(props) {
    return (
    <FullLayout title={<><ReportsIcon />Reports</>} location="reports">
        <div>
            <div className="tz">
                <LinkButton href="/business" title="To the business listings" />
            </div>
            {JSON.stringify(props)}
        </div>
    </FullLayout>
    );
}

export default Page;