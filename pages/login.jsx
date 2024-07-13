import React, { useState } from "react";

import FullLayout from "../components/FullLayout";
import { Login } from "../components/Login";

function Page(props) {
    const [user, setUser] = useState({});
    return (
        <FullLayout title="Login" location="dashboard">
                <main className="">
                    <div className="ard arm cer dcv ddh">
                        <div className="ab ov adb ads aeu afk afr baz">
                            <p>Please enter your login details</p>
                            <Login setUser={setUser} />
                            {user && user.username !== undefined ? `Welcome ${user.username}` : ''}
                            {JSON.stringify(props.context)}
                        </div>
                    </div>
                </main>
        </FullLayout>);
}

export default Page;