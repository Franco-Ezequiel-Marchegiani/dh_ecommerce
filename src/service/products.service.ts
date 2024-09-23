import {Product} from '../interface'

export const getProducts = async (page = 0):Promise<Product[]> =>{

  try{
      const response = await fetch(`http://localhost:3000/products?_page=${page}&_per_page=500`);

      console.log(response);
      
      
      if (response.ok) {
        
        const data = await response.json()
        //const dataApi = [...data.data, false]

        console.log(data);
        //console.log(dataApi);
        

        return data.data

      }else{
        throw new Error('Faild to fetch products')
      }

    }catch(error){
      console.log(error);
      throw new Error('Network Error')
      
    }
  }

  export const createProduct = async(product: Product): Promise<Product> =>{
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      })
      console.log(response);
      
      if(response.ok){
        const data = await response.json();
        return data
      }else{
        throw new Error("Faild to create product");

      }
      
    } catch (error) {
      console.log(error);
      throw new Error(`Network Error ${error}`)
      
    }
  }