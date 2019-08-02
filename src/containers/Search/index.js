import React, { Component, useState, useEffect, useCallback } from "react"
import axios from 'axios'
import whyDidYouRender from '@welldone-software/why-did-you-render'

import SearchBar from "../../components/SearchBar"
import SearchItem from "../../components/SearchItem"

whyDidYouRender(React, {
  onlyLogs: true,
  titleColor: "green",
  diffNameColor: "aqua"
})


//Classed Based Approach
// class Search extends Component {
//   state = {
//     value: "",
//     data: [],
//     loading: false
//   }

//   handleChange = event => {
//     this.setState({ value: event.target.value })
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (
//       this.state.value.trim().length > 2 &&
//       this.state.value !== prevState.value
//     ) {
//       this.setState({ loading: true })
//       fetch(
//         `https://www.omdbapi.com/?s=${this.state.value
//           .trim()
//           .replace(/\s/g, "+")}&apikey=7ed82e12`
//       )
//         .then(response => response.json())
//         .then(result => {
//           if (result.Response === "True") {
//             this.setState({
//               data: result.Search,
//               loading: false
//             })
//           } else {
//             this.setState({ loading: false })
//           }
//         })
//         .catch(err => console.log(err.toString()))
//     }
//   }

//   render() {
//     const items = this.state.data.map(item => (
//       <SearchItem key={item.imdbID} value={item} />
//     ))
//     return (
//       <div>
//         <SearchBar value={this.state.value} change={this.handleChange} />
//         {this.state.loading ? "loading" : items}
//       </div>
//     )
//   }
// }

//functional version

const Search = props=>{
  
  const [query, setQuery] = useState("")

  const [data, setData] = useState([])

  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    if(query.trim().length<3){
      return
    }
    const fetchData = async ()=>{
      console.log("called api")
      setLoading(true)
      const url = `https://www.omdbapi.com/?s=${query
        .trim()
        .replace(/\s/g, "+")}&apikey=7ed82e12`
      try{
        const recievedData = await axios.get(url)
        setLoading(false)
        if(recievedData.data.Response==="True"){
          setData(recievedData.data)
        }
      }
      catch(e){
        console.log(e)
        setLoading(false)
      }
    }
    const timeout = setTimeout(fetchData,1000)
    return ()=>{clearTimeout(timeout)}
  },[query])

  const handleChange = useCallback(event=>{
    const {value} = event.target
    setQuery(value)
  },[])

  const items = data.Search && data.Search.map(item => <SearchItem key={item.imdbID} value={item} />)

  return (
    <div>
      <SearchBar value={query} change={handleChange} />
      {loading ? "loading" : items}
    </div>
  )
}

Search.whyDidYouRender = true

export default Search