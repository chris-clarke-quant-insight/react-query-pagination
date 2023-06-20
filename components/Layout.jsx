import Image from "next/image";
import Nav from "./Nav";
import Logo from "./Logo";

const TopSearch = () => {
    return (<form className="ab ls uh" action="#" method="GET">
    <label htmlFor="search-field" className="t">Search</label>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="u aa an cb pc rw axk">
        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd">
        </path>
    </svg>
    <input id="search-field" className="lp pc ti aev ari atm ato axq bfy bmw chs" placeholder="Search..." type="search" name="search" />
</form>);
}

export default function Layout(props) {
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
                        {props.search || <TopSearch />}
                        <div className="ls yu aab czm">
                            <button type="button" className="fo aqm axk bkr">
                                <span className="t">View notifications</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="nx rz">
                                    <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0">
                                    </path>
                                </svg>
                            </button>
                            <div className="ly cuk cva cwo dcf" aria-hidden="true">
                            </div>
                            <div className="ab" data-headlessui-state="">
                                <button className="fm ls yu aqi" id="headlessui-menu-button-1" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                                    <span className="t">Open user menu</span>
                                    <Image className="ob se adn ail" width={32} height={32} src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
                                    <span className="ly cum cyu">
                                    <span className="js avv awb awk axq" aria-hidden="true">Tom Cook</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="jo nu rw axk">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <main className="dmo">
                    <div className="ard arm cer dcv ddh">
                        <div className="ab ov adb ads aeu afk afr baz">
                            {props.children}
                        </div>
                    </div>
                    
                <div>{props.pagination}</div>
                </main>
            </div>
            <aside className="z bx ci dm ly sh ade aff afp ard arz cer dcv dij">
                <div className="ab ov adb ads aeu afk afr baz">
                    {props.aside}
                </div>
            </aside>
        </div>
    </div>);
}