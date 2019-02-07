import React, { Component } from "react"
import Detail from "../../components/Detail"

class SearchDetail extends Component {
  state = { data: {}, loading: true }
  componentDidMount() {
    const { id } = this.props.match.params
    fetch(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=7ed82e12`)
      .then(response => response.json())
      .then(result => {
        if (result.Response === "True") {
          this.setState({ data: result, loading: false })
        }
      })
  }
  render() {
    return (
      <React.Fragment>
        {this.state.loading ? "Loading..." : <Detail data={this.state.data} />}
      </React.Fragment>
    )
  }
}

export default SearchDetail
