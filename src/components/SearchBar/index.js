import React from "react"
import "./style.css"

const SearchBar = props => {
  return (
    <form className="sticky">
      <input
        value={props.value}
        id="searchBar"
        onChange={props.change}
        placeholder="Search your shows"
      />
    </form>
  )
}

export default SearchBar
