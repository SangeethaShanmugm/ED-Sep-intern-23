import React, { Component } from 'react'
import "./Search.css"

const lurl = "http://localhost:4000/locations"
const rurl = "http://localhost:4000/restaurants?state_id="

export default class Search extends Component {

    constructor() {
        super()
        this.state = {
            locations: "",
            restaurants: ""
        }
    }


    handleCity = (event) => {
        console.log("handleCity")
        const stateId = event.target.value
        console.log(stateId)
    }

    renderCity = (data) => {
        console.log(data)
        if (data) {
            return data.map((item) => {
                return (
                    <option>{item.state}</option>
                )
            })
        }
    }

    renderRest = () => {

    }
    render() {
        return (
            <div>
                <div className="row text-center">
                    <div className="col-12">
                        <p className="logo px-4 py-2">e!</p>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-md-12">
                        <p className="title">Find the best restaurants, cafés, and bars</p>
                    </div>
                </div>


                <div class="row text-center datalist">
                    <div class="col-sm-4">
                        <input class="form-control" id="exampleDataList"
                            placeholder="Please type a location" />
                        <select onChange={this.handleCity}>
                            <option>----SELECT CITY---</option>
                            {this.renderCity(this.state.locations)}
                        </select>
                    </div>
                    <div class="col-sm-5">
                        <input class="form-control" placeholder="Search for restaurants" />
                        <select>
                            <option>search restaurants</option>
                            <option>----SELECT RESTAURANTS---</option>
                            {this.renderRest(this.state.restaurants)}
                        </select>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        fetch(`${lurl}`, { method: "GET" })
            .then((res) => res.json())
            .then((data) => this.setState({ locations: data }))
    }
}
