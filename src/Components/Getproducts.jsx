import React from 'react'
import { useState,useEffect } from 'react'
import Footer from './Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Getproducts = () => {

// initializing your hooks
  const [search, setSearch] = useState("");
  const[loading,SetLoading]=useState("")
  const[error,SetError]=useState("")
  const[products,SetProducts]=useState([])
  const navigate=useNavigate()


// a variable to store our images
  const img_url="http://kiruialvin.alwaysdata.net/static/images/"

  // a function to fetch or get products from the api
  const fetchproducts=async()=>{

  try {
    SetLoading("please wait as we retrieve your products")

    // call your Api

    const response=await axios.get("http://kiruialvin.alwaysdata.net/api/getproductdetails")


    SetProducts(response.data)
    console.log("The response is",response)
    SetLoading("")
    
  } catch (error) {
    SetLoading("")
    SetError(error.message)

  }
  }
  // end of the fetch function where we call our useEffect

  useEffect(()=>{
    fetchproducts()
  },[])

  
  return (
    <div className='row'> 
      
      <h1>Welcome to Beautify 💄</h1>
      <p>glow like never before {"\u2728"}</p>
      <p>Your one-stop shop for cosmetics</p>

      
     
      <br /><br />
    

      <p className='text-warning'>{loading}</p>
      <p className='text-danger'>{error}</p>
{/*  mapping through the products */}
      {products.map((product)=>(

      




      <div className='col-md-3 justify-content-center '>
        <div className='card shadow mt-3  '>
          <img src={img_url + product.product_photo } alt="" className='product_img'/>
          

          <div className='card-body'>
            <h3 className='text-success'>{product.product_name}</h3>
            <p className='text-secondary'>{product.product_description}</p>
            <b className='text-info'>{product.product_cost}</b>


            <br />
            <input 
                type="button" 
         
              value="Shop Now 🛒 "
              className="btn btn-success w-100"
                 onClick={() => navigate("/mpesa",{ state: { product } })}/>
                  
        
        
    
          </div>

        </div>

      </div>
      

        
    ))}
    ,
    </div>
  )
}


export default Getproducts