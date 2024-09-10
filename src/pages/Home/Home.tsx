import { useEffect, useState } from "react"
import Hero from "../../components/ui/Hero/Hero"
import style from './Home.module.css'
import CardProduct from "../../components/ui/CardProduct/CardProduct"

const Home = () => {

  const [products, setProducts] = useState([])

  const getProducts = async () =>{
    try{
      const response = await fetch('http://localhost:3000/products');
      const data = await response.json()
      setProducts(data)

    }catch(error){
      console.log(error);
      throw(error)
      
    }
  }
  useEffect(() =>{
    getProducts();
  },[])
  
  
  return (
    <div>
      <Hero/>
      <div className={style.container}>
        {products.map((product) =>(
          <CardProduct key={product.tail} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default Home
