import React, {memo} from "react"
import { Link } from "react-router-dom"
import whyDidYouRender from '@welldone-software/why-did-you-render'

import "./style.css"

whyDidYouRender(React, {
  onlyLogs: true,
  titleColor: "green",
  diffNameColor: "aqua"
})

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

SearchItem.whyDidYouRender = true

export default memo(SearchItem)
