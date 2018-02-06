import React from "react"
import ProductCollection from "components/ProductCollection"
import "./index.css"

class Homepage extends React.Component {
  render() {
    return (
      <div className="body-container">
        <div className="hero-image-container">
          <img className="hero-image" src="https://static1.squarespace.com/static/5a1b5169d74cff5c36e9068c/t/5a360e11e2c48362969a5f35/1513573657743/christopher-burns-435998.jpg" alt="" />
        </div>
        <div className="hero-products">Our Products</div>
        <ProductCollection />
      </div>
    )
  }
}

export default Homepage
