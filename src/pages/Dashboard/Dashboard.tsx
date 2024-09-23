import React from "react";
import style from './Dashboard.module.css'

const Dashboard = () => {
  return(
    <div className={style.container}>
        <div>
            <h1>Dashboard</h1>
            <button>Log out</button>
        </div>
        <form>
            {/* AmiiboSeries */}
            <div className={style.formControlLogin}>
                <label htmlFor="amiiboSeries">Amiibo Series</label>
                <input 
                    type="text"
                    id="amiiboSeries"
                    name="amiiboSeries"
                    value={''}
                    onChange={() =>{}} 
                    required/>
            </div>
            {/* Character */}
            <div className={style.formControlLogin}>
                <label htmlFor="character">Character</label>
                <input 
                    type="text"
                    id="character"
                    name="character"
                    value={''}
                    onChange={() =>{}} 
                    required/>
            </div>
            {/* gameSeries */}
            <div className={style.formControlLogin}>
                <label htmlFor="gameSeries">GameSeries</label>
                <input 
                    type="text"
                    id="gameSeries"
                    name="gameSeries"
                    value={''}
                    onChange={() =>{}} 
                    required/>
            </div>
            {/* head */}
            <div className={style.formControlLogin}>
                <label htmlFor="head">Head</label>
                <input 
                    type="text"
                    id="head"
                    name="head"
                    value={''}
                    onChange={() =>{}} 
                    required/>
            </div>
            {/* image */}
            <div className={style.formControlLogin}>
                <label htmlFor="image">Image</label>
                <input 
                    type="url"
                    id="image"
                    name="image"
                    value={''}
                    onChange={() =>{}} 
                    required/>
            </div>
            {/* name */}
            <div className={style.formControlLogin}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    value={''}
                    onChange={() =>{}} 
                    required/>
            </div>
            {/* release */}
            <div className={style.formControlLogin}>
                <label htmlFor="release">Release</label>
                <input 
                    type="date"
                    id="release"
                    name="release"
                    value={''}
                    onChange={() =>{}} 
                    required/>
            </div>
            {/* tail */}
            <div className={style.formControlLogin}>
                <label htmlFor="tail">Tail</label>
                <input 
                    type="text"
                    id="tail"
                    name="tail"
                    value={''}
                    onChange={() =>{}} 
                    required/>
            </div>
            {/* type */}
            <div className={style.formControlLogin}>
                <label htmlFor="type">Type</label>
                <input 
                    type="text"
                    id="type"
                    name="type"
                    value={''}
                    onChange={() =>{}} 
                    required/>
            </div>
            {/* price */}
            <div className={style.formControlLogin}>
                <label htmlFor="price">Price</label>
                <input 
                    type="number"
                    id="price"
                    name="price"
                    value={''}
                    onChange={() =>{}} 
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
