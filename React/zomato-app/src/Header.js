import React, { Component } from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import Search from './component/Home/Search'


const url = "http://localhost:8000/auth/userInfo"
export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            userData: ""
        }
    }

    handleLogout = () => {
        sessionStorage.setItem("loginStatus", "LoggedOut")
        sessionStorage.setItem("userInfo", "")
        sessionStorage.removeItem("Itk")
        this.setState({ userData: [] })
        // this.props.history.push("/login")
    }

    conditionalHeader = () => {
        if (this.state.userData.name) {
            let data = this.state.userData
            sessionStorage.setItem("loginStatus", "LoggedIn")
            sessionStorage.setItem("userInfo", JSON.stringify(data))
            return (
                <>
                    <div className="p-2 mt-3 ms-auto">
                        <Link to="/login" className="login">Hi {data.name}</Link>
                    </div>
                    <div className="p-2 mt-3" onClick={this.handleLogout}>
                        <Link to="/login" className="createacc" >Logout</Link>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="p-2 mt-3 ms-auto">
                        <Link to="/login" className="login">Login</Link>
                    </div>
                    <div className="p-2 mt-3">
                        <Link to="/register" className="createacc">Create an account</Link>
                    </div>
                </>
            )
        }

    }

    render() {
        return (

            <div>
                <header>
                    <div className="hstack">
                        <div className='gstack'>
                            <div id="brand">Zomato App</div>
                            <div className="p-2 mt-3 ms-auto">
                                <Link className="btn btn-info" to="/">Home</Link>
                            </div>
                        </div>
                        {this.conditionalHeader()}
                    </div>
                    <div>

                    </div>
                </header>
            </div>





        )
    }

    componentDidMount() {
        fetch(url, {
            method: "GET",
            headers: {
                "x-access-token": sessionStorage.getItem("Itk")
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.setState({ userData: data })
            })
    }
}
