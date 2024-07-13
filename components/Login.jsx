import React, { useState } from "react";
import { TextField, Button, InputLabel, FormControl } from "@material-ui/core";

function validateLogin(username, password, setUser) {
    let user = {};
    try {
        setUser({});
        const res = fetch(
            `/api/user/?name=${username}`
        ).then((response) =>{
          const newData = response.json();
          newData.then((data) => {
            if (data.password_hash === password) {
                user = data;
                setUser(data);

                return { message: 'login success', user: user };
            }
            console.log(`Called api for user ${username}`);
          });
        });
        if(user === {}) {
            throw("user not recognised");
        }
    } catch (error){
        console.log(error);
    }
    
    return { message: 'login success', user: user }
}

export function Login({ setUser }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className="ab ls uh dlj" action="#" method="GET" onSubmit={() => { validateLogin(username, password, setUser); return void (0); }}>
            <div className="aqg"><FormControl fullWidth margin="normal">
                <InputLabel htmlFor="user-field" className="t">Username:</InputLabel>
                <TextField placeholder="user" id="user-field" label="Username" variant="outlined" defaultValue={username} onChange={(ev) => setUsername(ev.target.value)} />
            </FormControl>
            </div>
            <div className="aqg"><FormControl fullWidth margin="normal">
                <InputLabel htmlFor="password-field" className="t">Password:</InputLabel>
                <TextField placeholder="password" id="password" label="Password" type="password" variant="outlined" defaultValue={password} onChange={(ev) => setPassword(ev.target.value)} />
            </FormControl>
            </div>
            <div className="aqg"><FormControl fullWidth margin="normal">
                <Button type="submit">Login</Button>
            </FormControl>
            </div>
        </form>
    );
}
