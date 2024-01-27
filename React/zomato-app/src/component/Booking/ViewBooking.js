import React, { useState, useEffect } from 'react'
import Header from '../../Header'
import { DisplayOrder } from './DisplayOrder'
import axios from 'axios'

const url = "http://localhost:4000/orders"


export const ViewBooking = () => {
    const [orders, setOrders] = useState()

    let sessionData = sessionStorage.getItem("userInfo")
    console.log(sessionData)
    let data = JSON.parse(sessionData)
    console.log(data)


    useEffect(() => {
        axios.get(`${url}?email=${data.email}`)
            .then((res) => {
                console.log(res.data)
                setOrders(res.data)
            })
    }, [])//call only once


    return (
        <>
            <Header />
            <DisplayOrder orderData={orders} />
        </>
    )
}