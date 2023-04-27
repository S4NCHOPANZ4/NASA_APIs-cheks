import React from 'react'
import { useState, useEffect } from 'react';
import moment from 'moment';
import gif from '../assets/not_found.gif'
import '../styles/apod/apod.css'
import LoadingSpinner from '../component/LoadingSpinner';

type fetch_data = {
    copyright: string,
    date: string, 
    explanation: string, 
    hdurl: string, 
    media_type: string, 
    service_version: string,
    title: string, 
    url:string, 
    
};

const APOD = () => {
    const [data, setData] = useState<fetch_data | undefined>(undefined);
    const [date, setDate] = useState(moment().format('YYYY-MM-DD'))
    const [loaded, setLoaded] = useState(false)
    let [year, month, day] = date.split('-');
    
    useEffect(() => {
      async function fetchData() {
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_API_KEY}&date=${date}`)
        const data = await res.json();
        setData(data);
        setTimeout(()=>{
          setLoaded(true);
        },2000)
      }
      fetchData();
      console.log(data?.title);
    },
    [date])
    {data? console.log(data?.url) : console.log('a')}
  
    return (
      
        <div className='container'>
          <div className='sub_container sub_1'>
            <div className='container_img'>
              {loaded? 
              <img className='image'
              src={`${(data?.url === undefined)? gif
              :
              data?.url }`}
              />
              :
              <div className='apod_loading_container'>
                <LoadingSpinner/>
              </div>
              }
              
            </div>
          
          <div className='img_description '>
          <div className='form upper_inputs'>
            <button className='submit_button' onClick={()=>{setDate([year,month,day].join('-'))}}>Discover</button>
  
              <div className='form_inputs'>
                <div>
                  <label className='day-input label' htmlFor="day-input">DD: </label>
                  <input type="number" id="day-input"  onChange={(e)=>{day = e.target.value}} min={0} max={31} step="1" />
                </div>
                <div>
                  <label className='month-input label' htmlFor="month-input">MM: </label>
                  <input type="number" id="month-input"  onChange={(e)=>{month = e.target.value}} min={0} max={12} step="1" />
                </div>
                <div>
                <label className='month-input label' htmlFor="year-input">YYYY: </label>
                  <input type="number" id="year-input"  onChange={(e)=>{year = e.target.value}} min={0} max={9999} step="1" />
                </div>     
              </div>
            </div>
            <h1 className='img_title'>{(data?.title === undefined)? 'No Image Found': data?.title}</h1>
            <h1 className='img_desc_title'>{(data?.title === undefined)? '404': 'Description'}</h1>
            <p className='description'>
              {(data?.explanation === undefined)? 'Available since 1996' : data?.explanation}
            </p>
          </div>
          </div>
          <form className='form lower_inputs' onSubmit={(e)=>{e.preventDefault()}}>
              <div className='form_inputs'>
                <div>
                  <label className='day-input label' htmlFor="day-input">DD: </label>
                  <input type="number" id="day-input"  onChange={(e)=>{day = e.target.value}} min={0} max={31} step="1" />
                </div>
                <div>
                  <label className='month-input label' htmlFor="month-input">MM: </label>
                  <input type="number" id="month-input"  onChange={(e)=>{month = e.target.value}} min={0} max={12} step="1" />
                </div>
                <div>
                <label className='month-input label' htmlFor="year-input">YYYY: </label>
                  <input type="number" id="year-input"  onChange={(e)=>{year = e.target.value}} min={0} max={9999} step="1" />
                </div>     
              </div>
              <button className='submit_button' onClick={()=>{
                setDate([year,month,day].join('-'))
                setLoaded(false)
                }}>Discover</button>
            </form>
        </div>
    )
}

export default APOD