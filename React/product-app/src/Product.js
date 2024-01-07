export function Product() {
  const data = [
    {
      id: 1,
      title: "Onion",
      category: "veg"
    },
    {
      id: 2,
      title: "Tomato",
      category: "veg"
    },
    {
      id: 3,
      title: "Orange",
      category: "fruit"
    },
    {
      id: 4,
      title: "Apple",
      category: "fruit"
    },
    {
      id: 5,
      title: "Banana",
      category: "fruit"
    },
  ]

  console.log(data)

  return (
    <div>
      <h1>ProductList</h1>
      <table style={{ width: "500px", height: "200px", border: "1px solid black" }}>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {data.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.category}</td>
            </tr>
          )
        }
        )}

      </table>





    </div>
  );
}
