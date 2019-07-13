import React, { Component, useState, useEffect } from "react"
import axios from 'axios'

import SearchBar from "../../components/SearchBar"
import SearchItem from "../../components/SearchItem"

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
    if(query.trim().length > 2){
      setResponse({
        ...response,
        loading: true
      })
    }
  },[query, response])
  

  useEffect(()=>{
    if(response.loading){
      const url = `https://www.omdbapi.com/?s=${query
        .trim()
        .replace(/\s/g, "+")}&apikey=7ed82e12` 
      axios.get(url)
        .then(response=>{
          const {Response, Search} = response.data
          console.log(response.data)
          if(Response === "True"){
            setResponse({
              ...response,
              data: Search,
              loading: false
            })
          }else{
            setResponse({
              ...response,
              loading: false
            })
          }
        },
        err=>{
          console.log(err)
        }
        )
    }
  },[response])

  const handleChange = event=>{
    const {value} = event.target
    setQuery(value)
  }

  const items = response.data.map(item => <SearchItem key={item.imdbID} value={item} />)

  return (
    <div>
      <SearchBar value={query} change={handleChange} />
      {response.loading ? "loading" : items}
    </div>
  )
}

export default Search