import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Products.css'


const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setProducts(data)
  }

  return (
    <div className='main'>
      <h2>Products</h2>
      <div className='container'>
        <div className='row'>
          {
            products.length > 0 ? (
              products.map((item, index) => (
                <div className='col-md-3 mt-4'>
                  <div className='card p-2'>
                    <Link to={`/product/${item.id}`}>
                      <img src={item.image} alt={item.title} />
                      <h6 className='h6'>{item.title}</h6>
                      <h4>${item.price}</h4>
                    </Link>
                  </div>
                </div>
              ))
            ) : <div class="position-absolute top-50 start-50 translate-middle" role="status">
              <div role="status">
                <span class="spinner-grow text-primary" ></span>
                <span class="spinner-grow text-danger mx-2"></span>
                <span class="spinner-grow text-success"></span>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Products