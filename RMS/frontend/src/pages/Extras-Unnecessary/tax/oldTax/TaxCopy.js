import React from 'react'
import { useState } from 'react';
import styles from './tax.module.css'
import Table1 from './Table1'
import Table2 from './Table2';
import Table3 from './Table3'



export default function Tax() {
    
    const[tableid,setTableid]=useState('')


    return (
      <>
        <div className={styles.taxList}>
            <div className={styles.tableStatus}>
                <h2>Table Status</h2>
                <div className={styles.tableBox} >
                    <div className={styles.item} onClick={()=>{
                        setTableid(1)
                        
                    }}>
                        <p>Table 1</p>
                        <p>2 person</p>
                    </div>
                    <div className={styles.item} onClick={()=>{
                        setTableid(2)
                    }}>
                        <p>Table 2</p>
                        <p>2 person</p>
                    </div>
                    <div className={styles.item}  onClick={()=>{
                        setTableid(3)
                    }}>
                        <p>Table 3</p>
                        <p>2 person</p>
                    </div>
                    <div className={styles.item}>
                        <p>Table 4</p>
                        <p>2 person</p>
                    </div>
                    <div className={styles.item}>
                        <p>Table 5</p>
                        <p>2 person</p>
                    </div>
                    <div className={styles.item}>
                        <p>Table 6</p>
                        <p>2 person</p>
                    </div>
                    <div className={styles.item}>
                        <p>Table 7</p>
                        <p>2 person</p>
                    </div>
                    <div className={styles.item}>
                        <p>Table 8</p>
                        <p>2 person</p>
                    </div>
                    <div className={styles.item}>
                        <p>Table 9</p>
                        <p>2 person</p>
                    </div>
                </div>
            </div>
            <div className={styles.orderStatus}>
            <h2>Order Status</h2>
            <div className={styles.orderBox}>

            {tableid==1? <Table1 />: tableid==2?<Table2 /> : <Table3 />}
               
                        
              
            </div>
            </div>
        </div>
      </>
    );
}
