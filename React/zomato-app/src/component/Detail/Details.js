import React, { Component } from 'react'
import axios from "axios"
import Header from '../../Header'
import "./Details.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from "react-router-dom"
import MenuList from './MenuList';

const url = "http://localhost:4000"
export default class Details extends Component {

    constructor() {
        super()
        this.state = {
            details: "",
            menuList: "",
            userItem: "",
            mealId: sessionStorage.getItem("mealId"),
            totalPrice: "",
        }
    }

    addToCart = (data) => {
        this.setState({ userItem: data })
        console.log(this.state.userItem)
        let menuId = sessionStorage.getItem("menu")
        let orderId = []
        console.log(menuId)
        let result = menuId.split(",").map((item) => {
            orderId.push(parseInt(item))
            return "ok"
        })
        console.log(result)
        fetch(`${url}/menuItem`, {
            method: "POST",
            body: JSON.stringify(orderId),
            headers: {
                accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("MenuData", data)
                let totalPrice = 0;
                data.map((item) => {
                    totalPrice = totalPrice + parseFloat(item.menu_price)
                    return "success"
                })
                console.log(totalPrice)
                totalPrice = sessionStorage.setItem("totalPrice", totalPrice)
            })

    }

    proceed = () => {
        sessionStorage.setItem("menu", this.state.userItem)
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }

    render() {
        let { details } = this.state;
        return (
            <>
                <Header />
                <div id="mainContent">
                    <div className="ImgDiv">
                        <img src={details.restaurant_thumb} alt={details.restaurant_name} />
                    </div>
                    <div className="contentDiv">
                        <h2>{details.restaurant_name}</h2>
                        <span> 300 customers Say its "{details.rating_text}"🥳</span>
                        <h3>
                            <del>Old Price: Rs/- 1000</del>
                        </h3>
                        <h3>New Price: Rs/- {details.cost}</h3>
                        <h3>
                            Best Taste of Fresh and hot food at your Door Step and DineIn
                        </h3>
                        <div className="feature-container">
                            <figure>
                                <img
                                    className="featureIcon"
                                    src="https://i.ibb.co/wJvrhYg/veg.png"
                                    alt="pureVeg"
                                />
                                <figcaption>Pure Veg</figcaption>
                            </figure>
                            <figure>
                                <img
                                    class="featureIcon"
                                    src="https://i.ibb.co/mD3jpgc/sentizied.png"
                                    alt="sanitized"
                                />
                                <figcaption>Fully Sanitized</figcaption>
                            </figure>
                        </div>

                        <Tabs>
                            <TabList>
                                <Tab>About Us</Tab>
                                <Tab>Contact Us</Tab>
                            </TabList>

                            <TabPanel>
                                <p>
                                    {details.restaurant_name} with the rating as
                                    {details.average_rating} which is {details.rating_text}
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <p>Address: {details.address}</p>
                                <p>Contact No: {details.contact_number}</p>
                            </TabPanel>
                        </Tabs>
                        <div>
                            {/* <Link
                                to={`listing/${this.state.mealId}`}
                                className="btn btn-danger"
                            >
                                BACK
                            </Link> */}
                            <button className="btn btn-success" onClick={this.proceed}>
                                PROCEED
                            </button>
                        </div>
                        <div>
                            <MenuList
                                menuData={this.state.menuList}
                                finalOrder={(data) => {
                                    this.addToCart(data);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }


    async componentDidMount() {
        console.log(this.props)
        let restId = this.props.location.search.split("=")[1]//['?restId', '1']
        console.log(restId)
        let response = await axios.get(`${url}/details/${restId}`, { method: "GET" })
        console.log(response.data[0])
        let menuData = await axios.get(`${url}/menu/${restId}`, { method: "GET" })
        console.log(menuData.data)
        this.setState({ details: response.data[0], menuList: menuData.data })
    }
}
