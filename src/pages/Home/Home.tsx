import { useEffect, useState } from "react"
import Hero from "../../components/ui/Hero/Hero"
import style from './Home.module.css'
import CardProduct from "../../components/ui/CardProduct/CardProduct"
import { getProducts } from "../../service"
import { Product } from "../../interface/products"

const Home = () => {

  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
    getProducts().then((data) => {
      setProducts(data)
    }).catch(() =>{
      setError(true)
    }).finally(() =>{
      setIsLoading(false)
    });
  },[])
  
  console.log(isLoading);
  console.log(error);
  
  
  return (
    <div>
      <Hero/>
      {isLoading && <p>Loading...</p> }
      {error && <p>Something went wrong</p> }
      <div className={style.container}>
        {products.map((product) =>(
          <CardProduct key={product.tail} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default Home
