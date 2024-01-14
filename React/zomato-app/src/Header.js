import React, { Component } from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import Search from './component/Home/Search'

export default class Header extends Component {
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
                        <div className="p-2 mt-3 ms-auto">
                            <a href="#" className="login">Login</a>
                        </div>
                        <div className="p-2 mt-3">
                            <a href="#" className="createacc">Create an account</a>
                        </div>
                    </div>
                    <div>

                    </div>
                </header>
            </div>





        )
    }
}
