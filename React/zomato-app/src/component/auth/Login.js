import React, { Component } from 'react'
import Header from '../../Header'

const url = "http://localhost:8000/auth/login"
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "john@gmail.com",
            password: "123456",
            message: ""
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
            .then((res) => res.json())
            .then((data) => {
                console.log(data.token)
                if (data.auth === false) {
                    this.setState({ message: data.token })
                } else {
                    sessionStorage.setItem("Itk", data.token)
                    this.props.history.push("/")
                }

            })

    }


    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <div className="panel panel-warning">
                        <div className="panel-heading">
                            <h3>Login</h3>
                        </div>
                        <div className="panel-body">
                            <h2 style={{ color: "red" }}>{this.state.message}</h2>
                            <div className="row">
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
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
