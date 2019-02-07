import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

function Detail(props) {
  return (
    <React.Fragment>
      <div className="container">
        <img src={props.data.Poster} alt="poster" />
        <h1>{props.data.Title}</h1>
        <div className="genre">
          {props.data.Genre}
        </div> 
        <p className="plot">
          Synopsis: {props.data.Plot}
        </p>
        <div className="details">
          Actors: {props.data.Actors}
        </div>
        <div className="details">
          Director: {props.data.Director}
        </div>
        <div className="details">
          Writer: {props.data.Writer}
        </div>
      </div>
      <Link className="searchMore" to="/">
        Search for More
      </Link>
    </React.Fragment>
  )
}

export default Detail
