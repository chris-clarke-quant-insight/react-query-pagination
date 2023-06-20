import React from "react"
import { TextField } from "@material-ui/core";

const Search = ({handleChange}) => {
    return <TextField placeholder="search" onChange={handleChange} id="search" label="Search" variant="outlined" />
}

export default Search;