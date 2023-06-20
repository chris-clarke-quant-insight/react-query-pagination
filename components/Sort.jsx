import React from "react"
import { InputLabel, Select, MenuItem, FormControl } from "@material-ui/core";

export function sortName(a,b) {
    let ret = 0;
    if (a.name.toUpperCase() < b.name.toUpperCase()) { ret = -1 }; 
    if (b.name.toUpperCase() < a.name.toUpperCase()) { ret = 1 };
    // a.name === b.name = 0 ;
    return ret;
}
export function sortLocation(a,b) {
    let ret = 0;
    if (a.location.name.toUpperCase() < b.location.name.toUpperCase()) { ret = -1 }; 
    if (b.location.name.toUpperCase() < a.location.name.toUpperCase()) { ret = 1 };
    // a.location.name === b.location.name = 0 ;
    return ret;
}
export function sortSpecies(a,b) {
    let ret = 0;
    if (a.species.toUpperCase() < b.species.toUpperCase()) { ret = -1 }; 
    if (b.species.toUpperCase() < a.species.toUpperCase()) { ret = 1 };
    // a.species === b.species = 0 ;
    return ret;
}
export function sortId(a,b) {
    let ret = 0; // inverse as 1 is best
    if (a.id < b.id) { ret = -1 }; 
    if (b.id < a.id) { ret = 1 };
    // a.id === b.id = 0 ;
    return ret;

    // a.id < b.id = -1 | b.id > a.id = 1 | a.id === b.id = 0;
}
  
const Sort = ({handleChange, value}) => {
    return <FormControl fullWidth>
    <InputLabel id="sort-select-label">Sort</InputLabel>
    <Select
      variant="outlined"
      labelId="sort-select-label"
      id="sort-select"
      value={value}
      label="Sort"
      onChange={handleChange}
    >
      <MenuItem value="id">id</MenuItem>
      <MenuItem value="name">Name</MenuItem>
      <MenuItem value="species">Species</MenuItem>
      <MenuItem value="location">Location</MenuItem>
    </Select>
  </FormControl>
}

export default Sort;