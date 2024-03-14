import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from "./Data";
import Product from './Product';

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [relatedproduct, setRelatedproduct] = useState([])

    useEffect(()=>{
      const filterProduct = items.filter((product)=>product.id == id)
     // console.log(filterProduct);
      setProduct(filterProduct[0]);

      const  filterrelatedproduct = items.filter((raka) => raka.category === product.category)
      //console.log("RalatedProduct =", filterrelatedproduct)
      setRelatedproduct(filterrelatedproduct);

    },[id, product.category])
  return (
    <>
    <div className='container con'>
      <div className='img'>
        <img src= {product.imgSrc} alt=''/>

      </div>
      <div style={{textAlign:"center"}}>
      
                      <h1 className="card-title">{product.title}</h1>
                      <p class="card-text">{product.description}</p>
                      <button className="btn btn-primary mx-3">
                        {product.price}
                        {"  "}₹
                      </button>
                      <button className="btn btn-warning">Add To Cart</button>
                    
      </div>
      
    </div>
    <h1 className='text-center'> Related Product</h1>
    <Product items={relatedproduct}/>
    </>
  )
}

export default ProductDetails