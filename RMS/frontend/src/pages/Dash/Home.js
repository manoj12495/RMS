// import { render } from '@testing-library/react';
// import { Modal } from 'bootstrap';
import React from 'react'
// import { useState } from 'react'
// import { Button } from 'react-bootstrap';
// import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
import Table from './Table'
import Sidebar from '../../components/sidebar/Sidebar'
import Salesinfo from './salesInfo'


 const Home=()=> {
    return (<>
        <Sidebar />
        <div className='homeList'>
           {/* <FeaturedInfo /> */}
           {/* <Salesinfo /> */}
           {/* <Chart /> */}
           <Table />
        </div>
        </>
    )
}

export default Home;