import React from "react"
import "./index.css"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.26/stores/5zns/categories").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({ categories: json })
    })
  }

  render() {
    return (
      <div className="header-container">
        <div className="symbols-container">
          <div>Cart</div>
          <div>Search<img src=".../images/magnifying-glass.png" alt="" /></div>
        </div>
        <div className="logo-container">
          <h1>Watches & Art</h1>
        </div>
        <hr />
        <div className="Categories">
          {this.state.categories.map((item) => {
            return <div className="categories-container">
              {item.title}</div>
          })}
        </div>
      </div>
    )
  }
}

export default Header
