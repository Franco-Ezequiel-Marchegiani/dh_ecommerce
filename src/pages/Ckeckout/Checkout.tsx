import React from "react";
import { Table } from "../../components/ui/Table/Table";
import styles from './Checkout.module.css'
const Checkout = () => {
  return( 
    <div className={styles.container}>
        <h1 className={styles.title}>Checkout</h1>
        <Table/>
    </div>
    );
};

export default Checkout;
