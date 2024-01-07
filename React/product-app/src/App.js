import logo from './logo.svg';
import './App.css';
import { Product } from './Product';
import JSON from "./data.json"
import { ProductList } from './ProductList';

function App() {
  //JS starts


  const productList = JSON
  console.log(productList)

  const name = "Dheeraj"
  const name1 = "Havila"

  //JS ends
  //JSX starts
  return (
    <div className='product-data'>
      {/* <Welcome nm={name} nm1={name1} /> */}
      {/* <Product /> */}
      {productList.map((item) => (
        <ProductList product={item} />
      ))}

    </div>
  );
  //JSX ends
}
export default App;
