import React from 'react'
import {Outlet,Link } from 'react-router-dom'
import './Navv.css'
import { RouterProvider } from 'react-router-dom'


const navv = () => {
    return (
        <>
        <nav>
        <div className='navbar'>
            
            <ul class>
            <li>
                <Link to="/TrafficAnalysis">Traffic Predict Data</Link>
            </li>
            <li>
                <Link to="/TrafficData">Shortest path</Link>
            </li>
            <li>
                <Link to="/TrafficPlot">Pollution</Link>
            </li>
            </ul>
        </div>
        </nav>

            
        <Outlet/>
        </>
    )
};

export default navv;
