import React, { useState } from "react";
import Nav from "../components/Nav";
import Logo from "../components/Logo";
import Modal from "./Modal";

function FullLayout(props) {
    const { title, location, search = (<></>), shown = false } = props;
    const [open, setOpen] = useState(shown);

    return (
    <div className="alj">
        <div>
            <div className="ly cps cpz cqi crg cuk cwc daq dce dds">
                <Logo />
                <Nav location={location} />
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
                        {search}<h1>{title}</h1>
                    </div>
                </div>
            
                <main className="">
                    <div className="cxb">
                        {open? 'Open' : 'Sesame'}
                    <Modal shown={false} setShown={() => setOpen(!open)}  />
                    </div>
                    <div className="ard arm cer dcv ddh">
                        <div className="ab ov adb ads aeu afk afr baz">
                            <div>
                                {props.children}
                            </div>
                        </div>
                    </div>
                    <div>{props.results}</div>
                </main>
            </div>
        </div>
    </div>
    );
}

export default FullLayout;