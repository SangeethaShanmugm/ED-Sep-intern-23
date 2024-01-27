export const DisplayOrder = (props) => {
    console.log(props)

    const renderData = ({ orderData }) => {
        if (orderData) {
            return orderData.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.rest_Name}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.cost}</td>
                    </tr>
                )
            })
        }
    }
    return (
        <div className="container">
            <center>
                <h1>Order List</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>OrderId</th>
                            <th>Restaurant Name</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderData(props)}
                    </tbody>
                </table>
            </center>
        </div>
    )
}