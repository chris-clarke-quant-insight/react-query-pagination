import React from "react";

import { TextField, Button, InputLabel, FormControl } from "@material-ui/core";
import FullLayout from "../components/FullLayout";

function validateLogin(username, password) {
    // TODO: get the user if available from the username and password
    let user = {};
    try {
        async () =>
        await fetch(
        `/api/user/?name=${username}`
        ).then((result) => result.json()).then((data) => {
            if (data.password_hash === password) {
                user = data;
                return;
            }
            throw("user not recognised");
        })
    } catch (error){
        console.log(error);
    }
    
    return { message: 'login success', user: user }
}

function Login() {
    return (
    <form className="ab ls uh dlj" action="#" method="GET">
        <div className="aqg"><FormControl fullWidth margin="normal">
            <InputLabel htmlFor="user-field" className="t">Username:</InputLabel>
            <TextField placeholder="user" id="user-field" label="Username" variant="outlined" />
        </FormControl>
        </div>
        <div className="aqg"><FormControl fullWidth margin="normal">
            <InputLabel htmlFor="password-field" className="t">Password:</InputLabel>
            <TextField placeholder="password" id="password" label="Password" type="password" variant="outlined" />
        </FormControl>
        </div>
        <div className="aqg"><FormControl fullWidth margin="normal">
            <Button type="submit">Login</Button>
        </FormControl>
        </div>
    </form>
    );
}
//        <input id="user-field" className="lp pc ti aev ari atm ato axq bfy bmw chs" placeholder="User..." type="text" name="user" />
//        <input id="password-field" className="lp pc ti aev ari atm ato axq bfy bmw chs" placeholder="Password..." type="password" name="password" />

function Page(props) {
    return (
        <FullLayout title="Login" location="dashboard">
                <main className="">
                    <div className="ard arm cer dcv ddh">
                        <div className="ab ov adb ads aeu afk afr baz">
                            <p>Please enter your login details</p>
                            <Login />
                        </div>
                        <div>
                            {JSON.stringify(props.context)}
                        </div>
                    </div>
                </main>
        </FullLayout>);
}

export default Page;