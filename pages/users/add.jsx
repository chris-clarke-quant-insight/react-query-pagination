import React from "react";
import FullLayout from "../../components/FullLayout";
import { AddEdit } from '../../components/users';

function Page(props) {
    return (
    <FullLayout title="Add user" location="team">
        <h1>Add User</h1>

        <div className="result-box">
            <AddEdit />
        </div>
    </FullLayout>
    );
}

export default Page;