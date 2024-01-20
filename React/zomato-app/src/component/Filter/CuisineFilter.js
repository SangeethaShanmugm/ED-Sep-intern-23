import React, { Component } from 'react'
import axios from "axios"
const url = "http://localhost:4000/filter"


export default class CuisineFilter extends Component {

  filterCuisine = (event) => {
    console.log(event.target.value)
    let cuisineId = event.target.value
    let mealId = this.props.mealId
    console.log(mealId)
    let cuisineUrl;
    if (cuisineUrl === "") {
      cuisineUrl = `${url}/${mealId}`
    } else {
      cuisineUrl = `${url}/${mealId}?cuisineId=${cuisineId}`
    }
    axios.get(cuisineUrl).then((res) => {
      console.log(res.data)
      this.props.restPerCuisine(res.data)
    })

  }

  render() {
    return (
      <div>
        <center style={{ fontSize: "20px", color: "blue" }}>
          Cuisine Filter
        </center>
        <div style={{ marginLeft: "25px" }} onChange={this.filterCuisine}>
          <label className="radio">
            <input type="radio" name="cost" value="" />
            All
          </label>
          <label className="radio">
            <input type="radio" name="cost" value="1" />
            North-Indian
          </label>
          <label className="radio">
            <input type="radio" name="cost" value="2" />
            South-Indian
          </label>
          <label className="radio">
            <input type="radio" name="cost" value="3" />
            Chinese
          </label>
          <label className="radio">
            <input type="radio" name="cost" value="4" />
            Fast Food
          </label>
          <label className="radio">
            <input type="radio" name="cost" value="5" />
            Street Food
          </label>
        </div>
      </div>
    )
  }
}
