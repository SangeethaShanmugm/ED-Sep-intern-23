import React, { Component } from 'react'
import Header from '../../Header'

const url = "http://localhost:8000/auth/register"

export default class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "John",
            email: "john@gmail.com",
            phone: "7654356576",
            password: "123456"
        }
    }


    handleChange = (e) => {
        this.setState({ [e.target.value]: e.target.value })
    }


    handleSubmit = () => {
        //method: POST
        //body: data
        //headers:json
        fetch(url, {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(this.props.history.push("/login"))

    }
    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3>Register</h3>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label for="fname" className="control-label">
                                        FirstName
                                    </label>
                                    <input
                                        className="form-control"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="email" className="control-label">
                                        Email
                                    </label>
                                    <input
                                        className="form-control"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="phone" className="control-label">
                                        Phone
                                    </label>
                                    <input
                                        className="form-control"
                                        name="phone"
                                        value={this.state.phone}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="password" className="control-label">
                                        Password
                                    </label>
                                    <input
                                        className="form-control"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <button className="btn btn-success" onClick={this.handleSubmit}>
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
