import React, { useEffect, useState } from "react";
import style from './Dashboard.module.css'
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const [dataProduct, setDataProduct] = useState({
        amiiboSeries: '',
        character: '',
        gameSeries: '',
        head: '',
        image: '',
        name: '',
        release: '',
        tail: '',
        type: '',
        price: 0,
    })
    const navigate = useNavigate()

    useEffect(() =>{
        //Extraemos el item del LocalStorage para ver si pasó por el proceso de registro
        const userLogin = localStorage.getItem('userLogin')
        
        //En caso de no contar con ello, se lo envía al login
        if (!userLogin){
            navigate("/login")
        }
        
    }, [])

    const handleLogOut = () =>{
        localStorage.removeItem("userLogin")
        navigate("/login")
    }

    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        
        setDataProduct({
            ...dataProduct,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(dataProduct);
        

    }

  return(
    <div className={style.container}>
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogOut}>Log out</button>
        </div>
        <form onSubmit={handleSubmit}>
            {/* AmiiboSeries */}
            <div className={style.formControlLogin}>
                <label htmlFor="amiiboSeries">Amiibo Series</label>
                <input 
                    type="text"
                    id="amiiboSeries"
                    name="amiiboSeries"
                    value={dataProduct.amiiboSeries}
                    onChange={handleOnChange} 
                    required/>
            </div>
            {/* Character */}
            <div className={style.formControlLogin}>
                <label htmlFor="character">Character</label>
                <input 
                    type="text"
                    id="character"
                    name="character"
                    value={dataProduct.character}
                    onChange={handleOnChange} 
                    required/>
            </div>
            {/* gameSeries */}
            <div className={style.formControlLogin}>
                <label htmlFor="gameSeries">GameSeries</label>
                <input 
                    type="text"
                    id="gameSeries"
                    name="gameSeries"
                    value={dataProduct.gameSeries}
                    onChange={handleOnChange} 
                    required/>
            </div>
            {/* head */}
            <div className={style.formControlLogin}>
                <label htmlFor="head">Head</label>
                <input 
                    type="text"
                    id="head"
                    name="head"
                    value={dataProduct.head}
                    onChange={handleOnChange} 
                    required/>
            </div>
            {/* image */}
            <div className={style.formControlLogin}>
                <label htmlFor="image">Image</label>
                <input 
                    type="url"
                    id="image"
                    name="image"
                    value={dataProduct.image}
                    onChange={handleOnChange} 
                    required/>
            </div>
            {/* name */}
            <div className={style.formControlLogin}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    value={dataProduct.name}
                    onChange={handleOnChange} 
                    required/>
            </div>
            {/* release */}
            <div className={style.formControlLogin}>
                <label htmlFor="release">Release</label>
                <input 
                    type="date"
                    id="release"
                    name="release"
                    value={dataProduct.release}
                    onChange={handleOnChange} 
                    required/>
            </div>
            {/* tail */}
            <div className={style.formControlLogin}>
                <label htmlFor="tail">Tail</label>
                <input 
                    type="text"
                    id="tail"
                    name="tail"
                    value={dataProduct.tail}
                    onChange={handleOnChange} 
                    required/>
            </div>
            {/* type */}
            <div className={style.formControlLogin}>
                <label htmlFor="type">Type</label>
                <input 
                    type="text"
                    id="type"
                    name="type"
                    value={dataProduct.type}
                    onChange={handleOnChange} 
                    required/>
            </div>
            {/* price */}
            <div className={style.formControlLogin}>
                <label htmlFor="price">Price</label>
                <input 
                    type="number"
                    id="price"
                    name="price"
                    value={dataProduct.price}
                    onChange={handleOnChange} 
                    required/>
            </div>
            <div className={style.formControlLogin}>
                <button type="submit">Add Product</button>
            </div>
        </form>
    </div>
  );
};

export default Dashboard;
