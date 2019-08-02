import React, {memo} from "react"
import whyDidYouRender from '@welldone-software/why-did-you-render'

import "./style.css"

whyDidYouRender(React, {
  onlyLogs: true,
  titleColor: "green",
  diffNameColor: "aqua"
})

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

SearchBar.whyDidYouRender = true

export default memo(SearchBar)
