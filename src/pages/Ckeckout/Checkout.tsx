import React from "react";
import { Table } from "../../components/ui/Table/Table";
import styles from './Checkout.module.css'
import { CardCredit } from "../../components/ui/CardCredit/CardCredit";
const Checkout = () => {
  return( 
    <div className={styles.container}>
        <h1 className={styles.title}>Checkout</h1>
        <div className={styles.grid}>
            <div className={styles.tableContainer}>
            <Table/>
            </div>
            <div>
                <CardCredit/>
            </div>
        </div>
        <button className={styles.buyButton}>Buy now</button>
    </div>
    );
};

export default Checkout;
