export function ProductList({ product }) {
  console.log(product);
  return (
    <div className='card'>
      <img src={product.image} alt={product.name} />
      <div>
        <h6>{product.name}</h6>
        <p>{product.description}</p>
        <p>Rs. {product.cost}</p>
      </div>
    </div>
  );
}
