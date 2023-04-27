import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../styles/navbar/index.css'

const Navbar = () => {
    const [selected, setSelected] = useState('home');
    const [path, setPath] = useState(window.location.pathname); // gets the path from the URL
    const [lastSegment, setLastSegment] = useState(path.split("/").pop())
    // const lastSegment = path.split("/").pop();
    const handleSelect = (item: string) => {
        setSelected(item);
      };

  return (

    <nav className="menu-container">
    <div className="menu">
      <ul>
          <Link className='Link' to="/">
            <li
            className={(lastSegment === 'home')?  'selected' : 'link'}
            onClick={()=>{
              
              setLastSegment('')
              }}>
              <p>Home</p>
            </li>   
          </Link>

      </ul>
      <ul>
        <Link className='Link' to='/earth'>
          <li
          className={(lastSegment === 'earth')?  'selected' : 'link'}
          onClick={()=>{setLastSegment('earth')}}>
              <p>Earth</p>
          </li>
        </Link>
          <Link className='Link' to="/apod">
            <li
            className={(lastSegment === 'apod')?  'selected' : 'link'}
            onClick={()=>{setLastSegment('apod')}}>
                <p>APOD</p>
            </li>
          </Link>
      </ul>
   
    </div>
  </nav>
  )
}

export default Navbar