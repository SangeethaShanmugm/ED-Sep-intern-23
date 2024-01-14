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




    renderCity = (data) => {
        console.log(data)
        if (data) {
            return data.map((item) => {
                return (
                    <option key={item._id} value={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    renderRest = (data) => {
        console.log(data)
        if (data) {
            return data.map((item) => {
                return (
                    <option key={item._id} value={item.restaurant_id}>{item.restaurant_name}</option>
                )
            })
        }
    }


    handleCity = (event) => {

        const state_Id = event.target.value
        console.log(state_Id)
        fetch(`${rurl}${state_Id}`, { method: "GET" })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ restaurants: data })
                console.log(data)
            }
            )
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


                <div className="row text-center datalist">
                    <div className="col-sm-4">
                        <select onChange={this.handleCity}>
                            <option>----SELECT CITY---</option>
                            {this.renderCity(this.state.locations)}
                        </select>
                    </div>
                    <div className="col-sm-5">
                        <select>
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
