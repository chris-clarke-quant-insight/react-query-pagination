import React from "react";
import Nav from "../components/Nav";
import Logo from "../components/Logo";
import { TextField, Button, InputLabel, FormControl } from "@material-ui/core";

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
    <div className="alj">
        <div>
            <div className="ly cps cpz cqi crg cuk cwc daq dce dds">
                <Logo />
                <Nav />
            </div>
            <div className="dec">
                <div className="ac di ee ls ng um yu aab afa afp alj ard bbi cbo cer dcv">
                    <button type="button" className="fo aqm axo cuq">
                        <span className="t">Open sidebar</span>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="nx rz">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5">
                            </path>
                        </svg>
                    </button>
                    <div className="nx tj aiv cuq" aria-hidden="true">
                    </div>
                    <div className="ls uh aab acz czm">
                    </div>
                </div>
            
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
            </div>
        </div>
    </div>
    );
}

export default Page;