import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Pro.css"
import { add } from './CartSlice'
import { useDispatch } from 'react-redux'
import Cart from './Cart'; 

const Product = (props) => {
  const [product, setProduct] = useState({})
  const [addToCart, setAddToCart] = useState(false)
  const [items, setItems] = useState(0)
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    getProduct();
  }, [])

  const getProduct = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setProduct(data)
  };
  const handleItems =(product) =>{
    
  }
  const handleAdd = (product) => {
    dispatch(add(product))
    setAddToCart(true)
  }
  return (
    <>
      <h1>Product</h1>
      <div className='container'>
        {Object.keys(product).length > 0 ? (
          <div className="row">
            <div className="col-md-6">
              <img className='img' src={product.image} alt={product.title} />
            </div>
            <div className="col-md-6">
              <h4>{product.title}</h4>
              <h3>${product.price}</h3>
              <p>{product.description}</p>

              <button className='btn btn-success'
                onClick={() => {
                  handleItems(items); // Increment items
                  handleAdd(product);  // Add product to cart
                }}>
                Add To Cart
                <h5>{items}</h5>
              </button>
            </div>
          </div>
        ) : (
          <div className="position-absolute top-50 start-50 translate-middle" role="status">
            <div role="status">
              <span className="spinner-grow text-primary"></span>
              <span className="spinner-grow text-danger mx-2"></span>
              <span className="spinner-grow text-success"></span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Product
