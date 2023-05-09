import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/home/index.css'

const Home = () => {
  return (
    <div className='home_cont'>
        <div className='home_subcont'>
            <div className='home_under'>
                <p className='home_discover_title lowerlayer_title'>Let's Discover</p>
                <p className='home_desc lowerlayer_desc'>Each day a different image or photograph of our universe is featured,
                along with a brief explanation written by a professional astronomer.</p>
                <Link to='/apod'>
                    <button className='dicover_button lowerlayer_button'>GO!</button>
                </Link>
            </div>
        <div className='home_innersub home_sub_1'>
                <p className='home_title'>APOD</p>
                <p className='home_desc'>
                Each day a different image or photograph of our universe is featured,
                along with a brief explanation written by a professional astronomer.
                </p>
                <Link to='/apod'>
                    <button className='dicover_button upperlayer_button'>Let's Discover</button>
                </Link>
            </div>

        </div>
        <div className='home_subcont'>
        <div className='home_under'>
                <p className='home_discover_title  lowerlayer_title'>Let's Discover</p>
                <p className='home_desc lowerlayer_desc'>Displays a satellite image from the NASA and USGS database with a global coordinate reference.</p>
                <Link to='/earth'>
                    <button className='dicover_button lowerlayer_button'>GO!</button>
                </Link>
            </div>
            <div className='home_innersub home_sub_2'>
                <p className='home_title'>Earth</p>
                <p className='home_desc'>
                Displays a satellite image from the NASA and USGS database with a global coordinate reference.
                </p>
                <Link to='/earth'>
                    <button className='dicover_button upperlayer_button'>Let's Discover</button>
                </Link>
            </div>

        </div>
        
    </div>
  )
}

export default Home