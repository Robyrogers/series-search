import React, { Component, useEffect, useState } from "react"
import Detail from "../../components/Detail"
import Axios from "axios";
import whyDidYouRender from '@welldone-software/why-did-you-render'

whyDidYouRender(React, {
  onlyLogs: true,
  titleColor: "green",
  diffNameColor: "aqua"
})

//Class based approach
// class SearchDetail extends Component {
//   state = { data: {}, loading: true }
//   componentDidMount() {
//     const { id } = this.props.match.params
//     fetch(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=7ed82e12`)
//       .then(response => response.json())
//       .then(result => {
//         if (result.Response === "True") {
//           this.setState({ data: result, loading: false })
//         }
//       })
//   }
//   render() {
//     return (
//       <React.Fragment>
//         {this.state.loading ? "Loading..." : <Detail data={this.state.data} />}
//       </React.Fragment>
//     )
//   }
// }

//functional based Approach
const SearchDetail = props=>{
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  const {id} = props.match.params
  const url = `https://www.omdbapi.com/?i=${id}&plot=full&apikey=7ed82e12`

  useEffect(()=>{
    const fetchData = async ()=>{
      console.log('called for specific title')
      try{
        const response = await Axios.get(url)
        setLoading(false)
        if(response.data.Response==="True"){
          setData(response.data)
        }
      }catch(err){
        setLoading(false)
        console.log(err)
      }
    }

    setLoading(true)
    fetchData()
  }, [url])

  return (
    <React.Fragment>
      {loading ? "Loading..." : <Detail data={data} />}
    </React.Fragment>
  )
}

SearchDetail.whyDidYouRender = true

export default SearchDetail
