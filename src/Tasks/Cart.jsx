import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from './CartSlice'
import "./Cart.css"

const Cart = () => {
  const cartData = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const handleRemove =(id)=>{
    dispatch(remove(id))
  }
  return (
    <>
      <h2>Cart</h2>
      {
        cartData && cartData.length > 0 ? (
          cartData.map((item) => (
            <div className='row my-5 border-top border-bottom p-3'>
              <div className='col-md-4'>
                <img src={item.image} className='image'/>
              </div>
              <div className='col-md-4'>
                <h4>{item.title}</h4>
                <h3>{item.category}</h3>
                <h2>$ {item.price}</h2>
              </div>
              <div className='btn-div col-md-4'>
                <button className="btn btn-outline-danger"
                onClick={()=>{handleRemove(item.id)}}
                >Remove Form The Cart</button>
              </div>
            </div>
          ))
        ) : <p>Please add some products</p>
      }
    </>
  )
}

export default Cart
