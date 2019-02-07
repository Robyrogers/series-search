import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

function SearchItem(props) {
  return (
    <div className="Link">
      <Link to={`/detail/${props.value.imdbID}`}>
        <img src={props.value.Poster} alt="Poster" />
        <div>
          <p>{props.value.Title}</p>
          <p className="type">TYPE: {props.value.Type.toUpperCase()}</p>
        </div>
      </Link>
    </div>
  )
}

export default SearchItem
