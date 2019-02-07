import React, { Component } from "react"
import SearchBar from "../../components/SearchBar"
import SearchItem from "../../components/SearchItem"

class Search extends Component {
  state = {
    value: "",
    data: [],
    loading: false
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.value.trim().length > 2 &&
      this.state.value !== prevState.value
    ) {
      this.setState({ loading: true })
      fetch(
        `https://www.omdbapi.com/?s=${this.state.value
          .trim()
          .replace(/\s/g, "+")}&apikey=7ed82e12`
      )
        .then(response => response.json())
        .then(result => {
          if (result.Response === "True") {
            this.setState({
              data: result.Search,
              loading: false
            })
          } else {
            this.setState({ loading: false })
          }
        })
        .catch(err => console.log(err.toString()))
    }
  }

  render() {
    const items = this.state.data.map(item => (
      <SearchItem key={item.imdbID} value={item} />
    ))
    return (
      <div>
        <SearchBar value={this.state.value} change={this.handleChange} />
        {this.state.loading ? "loading" : items}
      </div>
    )
  }
}

export default Search
