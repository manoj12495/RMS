import React from 'react'
import './chart.css'
export default function Chart() {
    return (
     
        // <div className='chart'>
        //     <h3 className='chartTitle'>Live Table Status</h3>
        //     <div className="wrapper">
        //         <div >one</div>
        //         <div>one</div>
        //         <div>one</div>
        //         <div>one</div>
        //         <div>one</div>
        //         <div>one</div>
        //     </div>
        // </div>

        <>
<div className="chart">
    <h2 className='chartTitle'>Live Table Status</h2>
</div>
<div class="wrapper">
    <ul>
        <li class="card"><h2>One</h2>
            <p>BOOKED</p>
        </li>
        <li class="card"><h2>Two</h2>
            <p>booked</p>
        </li>
        <li class="card"><h2>Three</h2>
            <p> BOOKED</p>
        </li>
        <li class="card"><h2>Four</h2>
            <p>Booked</p>
        </li>
        <li class="card"><h2>Five</h2>
            <p> BOOKED</p>
        </li>
        <li class="card"><h2>Six</h2>
            <p>booked</p>
        </li>
    </ul>
</div>

</>

        

    )
}
