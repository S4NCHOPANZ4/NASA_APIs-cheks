import React, {useEffect, useState} from 'react'
import moment from 'moment';
import '../styles/earth/earth.css'
import OpenStreetMap from '../component/OpenStreetMap'
import LoadingSpinner from '../component/LoadingSpinner';
import { defineConfig } from 'vite';



type fetch_data = {
    date?: string,
    id?: string,
    resource?: string,
    service_version?: string,
    url?: string
};

const Earth = () => {
const [data, setData] = useState<fetch_data | undefined>(undefined);
const [lon , setLon] = useState(34.6415);
const [lat , setLat] = useState(36.8121);
const [update, setUpdate] = useState(false);
const [isLoading, setIsLoading] = useState(true); 
const [founded, setFounded] = useState(true);
const [opened, setOpened] = useState(true);


const fetchNewImg = (lon: number, lat: number) => {
  async function fetchData() {

    fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=2018-01-01&dim=.5&api_key=${import.meta.env.VITE_API_KEY}`)
    .then(response => response.json())
    .then(response => {
      setData(response);
      if(response?.url){
        setFounded(true);
      }
      else if (response?.url === undefined){
        setTimeout(() => {
          setFounded(false);
        }, 1000);
      }
    })
  
    setTimeout(() => {
      setIsLoading(false)
    }, 5000);
    //2022-01-23
    //2014-01-01
  }
fetchData()
console.log(data);

}

useEffect(()=>{
  setIsLoading(true);
  fetchNewImg(lon, lat)
  setUpdate(true)

},[])

useEffect(() => {
  setIsLoading(true);
  fetchNewImg(lon, lat)

},[lon, lat])

  return (
    
    <div className='earth_container'>
      <div className='earth_map_container'>
        <OpenStreetMap lng={lon} lat={lat} update={update} setLon={setLon} setLat={setLat} />
      </div>
    <div className='earth_alert' onClick={()=>{setOpened(false)}} style={opened? {} : {display:'none'}}>
      <div className='closing' onClick={()=>{setOpened(false)}}>x</div>
      <p>Some images may be distorted or may exist but not be displayed on the screen. We invite you to try another location.</p>
    </div>

    {founded? 
    <>
    <div className='img_loading' style={isLoading? {} : {display: 'none'}}>
    <LoadingSpinner/>
   </div>
    
    <div className='earth_img_container' style={isLoading? {display: 'none'}: {} }>
          <img className='earth_img' src={`${data?.url}`} alt=""  />
    </div>
    
    </>
    : 
    <div className='img_not_found'>
      <p className='notFound_title'>Whoops!</p>
      <p className='notFound_description'>It seems there is not a image availble for this
      coordenate {`:(`}
      </p>
    </div>}   
       
    </div>

    
  )
}

export default Earth