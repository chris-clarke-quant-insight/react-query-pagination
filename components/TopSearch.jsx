import React from "react";

const TopSearch = ({ handleChange, value }) => {
    return (<form className="ab ls uh" action="#" method="GET">
    <label htmlFor="search-field" className="t">Search</label>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="u aa an cb pc rw axk">
        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd">
        </path>
    </svg>
    <input
        id="search-field"
        defaultValue={value}
        onChange={handleChange}
        className="lp pc ti aev ari atm ato axq bfy bmw chs"
        placeholder="Search..."
        type="search"
        name="search"
    />
</form>);
}
export default TopSearch;