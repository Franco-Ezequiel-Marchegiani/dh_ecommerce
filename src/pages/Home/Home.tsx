import { useState } from "react"
import Hero from "../../components/ui/Hero/Hero"
import style from './Home.module.css'
import CardProduct from "../../components/ui/CardProduct/CardProduct"
import { getProducts } from "../../service"
import { Toaster } from "sonner"
import { useQuery } from "react-query"

const Home = () => {

  const [page, setPage] = useState(1)

  const {data, isLoading, error}= useQuery(
    ["products", page],
    () => getProducts(page), 
    {keepPreviousData: true}
  );
  //console.log(data);
  
  /* Crear un estado con valor Booleano, en el qué, si ya se recorrió toda la API.
  Que arroje un valor true, si es verdadero, entonces que se deshabilite el botón de Next. */
  
  return (
    <div>
      <Hero/>
      <Toaster richColors />
      {isLoading && <p>Loading...</p> }
      {error ? <p>Something went wrong</p> : '' }
      <div className={style.container}>
        {data?.map((product) =>(
          <CardProduct key={product.tail} product={product}/>
        ))}
      </div>
      <div className={style.paginationContainer}>
        <button className={style.paginationButton} onClick={()=> setPage(page - 1)} disabled={page === 1}>Previus page</button>
        <div className={style.paginationActive}>
          <span>{page}</span>
        </div>
        <button className={style.paginationButton} onClick={()=> setPage(page + 1)}>Next page</button>
      </div>
    </div>
  )
}

export default Home
