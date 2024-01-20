import React, { Component } from 'react'
import Header from '../../Header'
import "./ListingApi.css"
import CuisineFilter from '../Filter/CuisineFilter'
import CostFilter from '../Filter/CostFilter'
import { ListingDisplay } from './ListingDisplay'

const murl = "http://localhost:4000/restaurants?mealId="

export default class ListingApi extends Component {
  constructor() {
    super()
    this.state = {
      restaurantList: ''
    }

  }
  setDataFilter = (data) => {
    this.setState({ restaurantList: data })
  }

  render() {
    return (
      <div>
        <Header />
        <div >
          <div id="mainListing">
            <div id="filter">
              <center>Filter</center>
              <CuisineFilter mealId={this.props.match.params.mealId}
                restPerCuisine={(data) => {
                  this.setDataFilter(data)
                }} />
              <CostFilter mealId={this.props.match.params.mealId}
                restPerCost={(data) => {
                  this.setDataFilter(data)
                }}
              />
            </div>
          </div>
          <ListingDisplay listData={this.state.restaurantList} />
        </div>
      </div>
    )
  }

  componentDidMount() {
    let mealId = this.props.match.params.mealId
    console.log(mealId)
    fetch(`${murl}${mealId}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ restaurantList: data })
        console.log(data)
      })

  }
}
