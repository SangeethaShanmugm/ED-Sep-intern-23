import React, { Component } from 'react'

export default class MenuList extends Component {

    orderId = []
    placeOrder = (id) => {
        this.orderId.push(id)
        this.props.finalOrder(this.orderId)
        // console.log(this.props.finalOrder)
    }

    removeOrder = (id) => {
        if (this.orderId.indexOf(id) > -1) {
            this.orderId.splice(this.orderId.indexOf(id), 1)
        }
        this.props.finalOrder(this.orderId)
        console.log(this.props.finalOrder(this.orderId))
    }

    renderCart = (orders) => {
        if (orders) {
            return orders.map((item, index) => {
                return <b key={index}>{item},</b>
            })
        }

    }

    renderMenu = ({ menuData }) => {
        if (menuData) {
            return menuData.map((item) => {
                return (
                    <>
                        <div key={item.menu_id}>
                            <div className="col-md-4">
                                <img
                                    src={item.menu_image}
                                    alt={item.menu_name}
                                    style={{ width: 80, height: 50, marginBottom: "30px" }}
                                />
                            </div>
                            <div className="col-md-5">
                                <b>Menu ID: {item.menu_id}</b>
                                <p>
                                    {item.menu_name} - Rs/- {item.menu_price}
                                </p>
                                <button
                                    className="btn btn-success"
                                    onClick={() => {
                                        this.placeOrder(item.menu_id);
                                    }}
                                >
                                    <span className="glyphicon glyphicon-plus"></span>
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => {
                                        this.removeOrder(item.menu_id);
                                    }}
                                >
                                    <span className="glyphicon glyphicon-minus"></span>
                                </button>
                            </div>
                        </div>
                    </>
                )
            })
        }
    }


    render() {
        return (
            <div>
                <div className="col-md-12">
                    <h2>Item Added</h2>
                    <h4>Item Number Added =
                        {this.renderCart(this.orderId)}
                    </h4>
                </div>
                <div>{this.renderMenu(this.props)}</div>
            </div>
        )
    }
}
